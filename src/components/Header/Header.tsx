import React from 'react'
import Link from 'next/link'
import className from 'classnames'
import { useRouter } from 'next/router'
import styles from '../../../styles/Header.module.scss'
import ruIcon from '../../../public/RUS.svg'
import enIcon from '../../../public/Britain.svg'

export type HeaderProps = {
  children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const router = useRouter()
  const { asPath } = router
  const enBtnStyle = className(styles.en, { [styles.locale_active]: router.locale === 'en' })
  const ruBtnStyle = className(styles.ru, { [styles.locale_active]: router.locale === 'ru' })
  return (
    <header className={styles.container}>
      <div className={styles.container_shadow} />
      <section className={styles.section}>
        <Link href="/">
          <span className={styles.logo}>
            <b>netflix</b>
            roulette
          </span>
        </Link>
        <Link href={asPath} locale="en">
          <img className={enBtnStyle} src={enIcon} alt="EN" />
        </Link>
        <Link href={asPath} locale="ru">
          <img className={ruBtnStyle} src={ruIcon} alt="RU" />
        </Link>
        {children}
      </section>
    </header>
  )
}
