import {Frown} from 'lucide-react'
import React from 'react'

const ContentNotFound = ({text}: {text: string}) => {
  return (
    <li
      role="listitem"
      className="h-60  w-full flex items-center justify-center"
    >
      <div className="space-y-3  flex flex-col items-center">
        <Frown />
        <h2 className="text-lg">{text}</h2>
      </div>
    </li>
  )
}

export default ContentNotFound
