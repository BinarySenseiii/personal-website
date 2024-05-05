import {useMutation} from '@tanstack/react-query'
import {env} from '~/constants/env'
import {contactSchemaType} from '~/schema'
import axios from 'axios'
import config from '~/config'
import toast from 'react-hot-toast'

const ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${config.domainName}`


export async function sendDataToGoogleSheets(data: contactSchemaType): Promise<void> {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([Object.values(data)]),
  }

  const response = await fetch(
    `https://v1.nocodeapi.com/faisal_dev/google_sheets/${env.NOCODE_API_KEY}?tabId=${env.NOCODE_TAB_ID}`,
    requestOptions,
  )

  if (!response.ok) {
    throw new Error('Failed to send data to Google Sheets')
  }

  return await response.json()
}

export const useSendContactData = () =>
  useMutation({
    mutationKey: ['GOOGLE_SHEET'],
    mutationFn: (data: contactSchemaType) => axios.post(`${ORIGIN}/api/contact`, data),
    onError: error => toast.error(error.message),
    onSuccess: () => toast.success("I'll be in touch shortly."),
  })
