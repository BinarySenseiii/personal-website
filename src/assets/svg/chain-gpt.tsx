import * as React from 'react'
import {SVGProps} from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const ChainGpt = ({title, titleId, ...props}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <div className="size-16  bg-neutral-900 grid place-content-center rounded-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="url(#a)"
        d="M20 4.733h8.87a6.394 6.394 0 0 1 6.397 6.393v1.912c0 .271.22.492.492.492h3.748c.273 0 .493-.22.493-.492V8.994c0-.815-.324-1.594-.9-2.169L33.172.899A3.037 3.037 0 0 0 31.004 0H20v4.733Z"
      />
      <path
        fill="url(#b)"
        d="M20 35.267h8.87a6.394 6.394 0 0 0 6.397-6.393v-7.175c0-.272.22-.492.492-.492h3.748c.273 0 .493.22.493.492v9.307c0 .816-.324 1.594-.9 2.169l-5.929 5.927a3.037 3.037 0 0 1-2.167.898H20v-4.733Z"
      />
      <path
        fill="url(#c)"
        d="M20 0H8.996A3.09 3.09 0 0 0 6.83.899L.899 6.825A3.062 3.062 0 0 0 0 8.991V20h4.736v-8.874a6.394 6.394 0 0 1 6.396-6.393H20V0Z"
      />
      <path
        fill="url(#d)"
        d="M20 40H8.996a3.09 3.09 0 0 1-2.167-.899l-5.93-5.926A3.062 3.062 0 0 1 0 31.009V20h4.736v8.874a6.394 6.394 0 0 0 6.396 6.393H20V40Z"
      />
      <path
        fill="#EFEFE5"
        d="M14.474 23.158c1.405 0 2.543-1.178 2.543-2.632 0-1.453-1.138-2.631-2.543-2.631-1.405 0-2.544 1.178-2.544 2.631 0 1.454 1.139 2.632 2.544 2.632ZM25.877 23.158c1.405 0 2.544-1.178 2.544-2.632 0-1.453-1.139-2.631-2.544-2.631s-2.544 1.178-2.544 2.631c0 1.454 1.14 2.632 2.544 2.632Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={38.86}
          x2={20.263}
          y1={13.509}
          y2={3.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6C5AE6" />
          <stop offset={1} stopColor="#509ADD" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={38.86}
          x2={20.263}
          y1={26.491}
          y2={36.14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC6756" />
          <stop offset={1} stopColor="#F8CF3E" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={19.21}
          x2={5.175}
          y1={4.474}
          y2={22.105}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#509ADD" />
          <stop offset={1} stopColor="#26F4D0" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={15.702}
          x2={4.561}
          y1={35.439}
          y2={19.298}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F8CF3E" />
          <stop offset={0.288} stopColor="#F8CF3E" />
          <stop offset={1} stopColor="#27F3D1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)
export default ChainGpt
