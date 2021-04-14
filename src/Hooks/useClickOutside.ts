import React, { useEffect } from 'react'

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback?: (isMessage?: boolean) => void) => {
  const handleClick = (e: MouseEvent) => ref.current && !ref.current.contains(<Node>e.target) && callback && callback()
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
