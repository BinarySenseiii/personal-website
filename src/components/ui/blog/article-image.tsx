import Image, {ImageProps} from 'next/image'
import React from 'react'

const ArticleImage: React.FC<ImageProps> = ({...props}) => {
  return (
    <div className="aspect-video relative mt-3">
      <Image
        priority
        fetchPriority="auto"
        fill
        className="rounded-sm size-full object-cover !m-0"
        {...props}
        alt={props.alt}
      />
    </div>
  )
}

export default ArticleImage
