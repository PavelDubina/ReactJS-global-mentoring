import { useEffect } from 'react'

export const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => ref.current && !ref.current.contains(e.target) && callback && callback()
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
