import Image from 'next/image'

function imageLoader({ src }) {
  return src;
}

export default function StaticImage(props) {
  return <Image loader={imageLoader} {...props} />  
}
