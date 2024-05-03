'use client'
import React from 'react'
import Giscus from '@giscus/react'

const PostComments = () => {
  return (
    <div className="w-full mt-4">
      <Giscus
        id="comments"
        repo="BinarySenseiii/personal-website"
        repoId="R_kgDOLyFZyw"
        category="General"
        categoryId="DIC_kwDOLyFZy84CfAwY"
        mapping="og:title"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}

export default PostComments
