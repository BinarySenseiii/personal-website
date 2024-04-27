import * as runtime from 'react/jsx-runtime'
import Image from 'next/image'
import Callout from '~/components/ui/callout'

const sharedComponents = {
  Image,
  Callout,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({...runtime}).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({code, components}: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{...sharedComponents, ...components}} />
}
