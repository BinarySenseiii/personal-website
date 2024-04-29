import Image, {ImageProps} from 'next/image'

const CustomImage: React.FC<ImageProps> = ({...props}) => {
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

export default CustomImage
