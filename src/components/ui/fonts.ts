import {Bai_Jamjuree, Work_Sans, Ubuntu} from 'next/font/google'

// Work_Sans
// EA80FC

export const fontSans = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export const workSans = Ubuntu({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--work-sans',
})
