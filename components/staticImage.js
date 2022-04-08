import Image from 'next/image'

function imageLoader({ src }) {
  return src;
}

export default function StaticImage(props) {
  return <Image alt="" loader={imageLoader} {...props} />  
}
