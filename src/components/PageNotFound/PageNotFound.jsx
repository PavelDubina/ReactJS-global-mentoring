import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '../Button/Button'
import styles from '../../../styles/PageNotFound.module.scss'

export const PageNotFound = () => {
  const router = useRouter()
  const goHome = () => router.push('/')
  return (
    <div className={styles.container}>
      <h1>Page Not Found</h1>
      <p>404</p>
      <Button onClick={goHome} styleType="back_home">
        GO BACK TO HOME
      </Button>
    </div>
  )
}
