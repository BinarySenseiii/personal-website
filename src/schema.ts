import {z} from 'zod'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

export const ContactSchema = z.object({
  fullName: z.string().min(1, {message: 'Please enter your full name.'}),
  phone: z
    .string()
    .min(1, {message: 'Please enter your phone.'})
    .regex(phoneRegex, 'Invalid phone number.'),
  email: z
    .string()
    .min(1, {message: 'Please enter a valid email address.'})
    .email({message: 'Invalid email address.'}),
  message: z.string().min(1, {message: 'Please enter a message.'}),
})

export type contactSchemaType = z.infer<typeof ContactSchema>
