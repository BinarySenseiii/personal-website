import {createEnv} from '@t3-oss/env-nextjs'
import {z} from 'zod'

export const env = createEnv({
  server: {
    NOCODE_API_KEY: z.string().min(1),
    NOCODE_TAB_ID: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    NOCODE_API_KEY: process.env.NOCODE_API_KEY,
    NOCODE_TAB_ID: process.env.NOCODE_TAB_ID,
  },
})
