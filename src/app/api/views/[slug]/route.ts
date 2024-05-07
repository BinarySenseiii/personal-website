import { z } from 'zod'
import { db } from '~/server/db'

interface Options {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: Options) {
  try {
    const slug = z.string().parse(params.slug)
    const views = await db.views.findUnique({ where: { slug } })

    return Response.json({ views }, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error'
    return Response.json({ message }, { status: 400 })
  }
}

export async function POST(_: Request, { params }: Options): Promise<Response> {
  try {
    const slug = z.string().parse(params.slug)

    // Check if the view already exists
    const existingView = await db.views.findUnique({ where: { slug } })

    if (existingView) {
      // If the view exists, update the count by incrementing it by 1
      await db.views.update({
        where: { slug },
        data: { count: existingView.count + 1 },
      })
    } else {
      // If the view doesn't exist, create a new one with count 1
      await db.views.create({
        data: { slug, count: 1 },
      })
    }

    return new Response(JSON.stringify({ message: 'Count incremented successfully' }), {
      status: 200,
    })
  } catch (error) {
    console.error('An error occurred while incrementing count:', error)

    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    })
  }
}
