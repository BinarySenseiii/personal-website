'use client'
import React from 'react'
import {typo} from './ui/typograpghy'
import {Form, FormControl, FormField, FormItem, FormMessage} from '~/components/ui/form'
import {contactSchemaType, ContactSchema} from '~/schema'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Button} from './ui/button'
import {Input} from './ui/input'
import {Textarea} from './ui/textarea'
import {CustomLink} from './mdx'
import config from '~/config'
import Socials from './socials'

const ContactUs = () => {
  const form = useForm<contactSchemaType>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(data: contactSchemaType) {
    console.log('data::: ', data)
  }

  return (
    <section aria-label="contact" className="!mt-5">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="md:max-w-xs w-full  space-y-4">
          <h2 className={typo({variant: 'h2'})}>Get in Touch</h2>
          <p className="text-muted-foreground text-base">
            If you have any inquiries, please feel free to reach out. You can contact us
            via email at{' '}
            <CustomLink
              href={`mailto:${config.social.email}`}
              aria-label={config.social.email}
            >
              {config.social.email}
            </CustomLink>{' '}
          </p>

          <div className="space-y-3">
            <h3>Follow me </h3>
            <Socials />
          </div>
        </div>
        <Form {...form}>
          <form className="space-y-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Phone No" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant="secondary" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}

export default ContactUs
