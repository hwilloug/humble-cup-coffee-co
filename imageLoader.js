export default function cloudfrontLoader({ src, width, quality }) {
  const url = new URL(`https://humblecupimages.poppyland.dev${src}`)
  url.searchParams.set('format', 'auto')
  url.searchParams.set('width', width.toString())
  url.searchParams.set('quality', (quality || 25).toString())
  return url.href
}