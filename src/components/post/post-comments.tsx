'use client'
import React from 'react'
import Giscus from '@giscus/react'
import {useTheme} from 'next-themes'

const PostComments = () => {
  const {theme} = useTheme()
  return (
    <div className="w-full mt-4">
      <Giscus
        key={theme}
        id="comments"
        repo="BinarySenseiii/personal-website"
        repoId="R_kgDOLyFZyw"
        category="General"
        categoryId="DIC_kwDOLyFZy84CfAwY"
        mapping="og:title"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}

export default PostComments
