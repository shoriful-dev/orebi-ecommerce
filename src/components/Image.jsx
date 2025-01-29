
const Image = ({ imgSrc, imgAlt, className }) => {
  return (
    <img className={`cursor-pointer w-full bg-no-repeat bg-center bg-cover ${className}`} src={imgSrc} alt={imgAlt} />
  )
}

export default Image
