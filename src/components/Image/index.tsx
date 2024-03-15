import { CSSProperties, SyntheticEvent, forwardRef } from 'react'
import fallbackImage from 'src/assets/images/fallback_book.png'
interface IImage {
  src: string
  alt?: string
  loading?: 'eager' | 'lazy'
  style?: CSSProperties
  width?: string | number
  height?: string | number
  className?: string
}

const Image = forwardRef((props: IImage, ref: any) => {
  const { ...rest } = props
  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackImage
  }
  return (
      <img {...rest} onError={handleImageError} />
  )
})

export default Image
