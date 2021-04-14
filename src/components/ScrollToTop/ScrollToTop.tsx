import React, { useEffect, useState } from 'react'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../../styles/ScrollToTop.module.scss'

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 360) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  })

  return (
    <div className={styles.scroll_to_top}>
      {isVisible && <FontAwesomeIcon data-testid="icon" icon={faArrowAltCircleUp} onClick={scrollToTop} />}
    </div>
  )
}
