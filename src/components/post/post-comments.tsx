'use client'
import React from 'react'
import Giscus from '@giscus/react'
import {env} from '~/constants/env'

const PostComments = () => {
  return (
    <div className="w-full mt-4">
      <Giscus
        id="comments"
        repo="BinarySenseiii/personal-website"
        repoId={env.NEXT_PUBLIC_GISCUS_REPO_ID}
        category="General"
        categoryId={env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="og:title"
        term="Welcome to Faisal personal Portfolio"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        // loading="lazy"
      />
    </div>
  )
}

export default PostComments
