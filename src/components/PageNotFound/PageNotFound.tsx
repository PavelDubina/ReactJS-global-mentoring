import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Button } from '../Button/Button'
import styles from '../../../styles/PageNotFound.module.scss'

export const PageNotFound: React.FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const goHome = () => router.push('/')
  return (
    <div className={styles.container}>
      <h1>{t('404.title')}</h1>
      <p>404</p>
      <Button onClick={goHome} styleType="back_home">
        {t('404.btn')}
      </Button>
    </div>
  )
}
