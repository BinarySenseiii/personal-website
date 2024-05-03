import {cn} from '~/lib/utils'
import {ReactNode} from 'react'

interface CalloutProps {
  children?: ReactNode
  type?: 'default' | 'warning' | 'danger'
}

export default function Callout({children, type = 'default', ...props}: CalloutProps) {
  return (
    <div
      className={cn('my-6 items-start rounded-md border bodrer-l-4 p-4 w-full ', {
        'border-red-900 bg-red-50 ': type === 'danger',
        'border-yellow-900 bg-yellow-50 ': type === 'warning',
      })}
      {...props}
    >
      <div>{children}</div>
    </div>
  )
}
