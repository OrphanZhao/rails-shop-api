import { useLayoutEffect } from 'react'

const useFavicon = () => {
  useLayoutEffect(
    () =>
      (function () {
        const link = document.createElement('link')
        link.type = 'image/png'
        link.rel = 'icon'
        link.href = '/images/favicon-32x32.png'
        document.getElementsByTagName('head')[0].appendChild(link)
      })(),
    []
  )
}

export default useFavicon
