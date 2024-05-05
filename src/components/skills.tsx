'use client'
import Marquee from 'react-fast-marquee'
import {BACKEND_STACKS, FRONTEND_STACKS, stacksProps} from '~/constants/stack'
import {typo} from './ui/typograpghy'

const Skills = () => {
  return (
    <section aria-label="skills" className="my-4 space-y-6 bg-background">
      <h2 className={typo({variant: 'h2'})}>Tools that i have used</h2>
      <Marquee autoFill pauseOnHover>
        <SkillsList stacks={FRONTEND_STACKS} />
      </Marquee>

      <Marquee autoFill pauseOnHover direction="right">
        <SkillsList stacks={BACKEND_STACKS} />
      </Marquee>
    </section>
  )
}

export default Skills

const SkillsList = ({stacks}: {stacks: stacksProps}) => {
  return (
    <ul className="flex items-center" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon
        const className = stacks[stack].className
        return (
          <li
            role="listitem"
            key={index}
            className="mr-2 flex w-max items-center gap-2 rounded-full border  px-3 py-2 text-[15px] shadow-sm border-neutral-800 bg-neutral-900 text-neutral-50"
          >
            {<Icon className={className} aria-label={stack} />}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        )
      })}
    </ul>
  )
}
