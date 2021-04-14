import React from 'react'
import className from 'classnames'
import { useTranslation } from 'next-i18next'
import { Select } from './Select/Select'
import { navGenres } from '../../utils/constants'
import styles from '../../../styles/Navbar.module.scss'

type NavbarProps = {
  genreValue: string
  sortValue: string
  toggleSortValue: (sortValue: string) => void
  handleMenu: (genre: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ genreValue, sortValue, toggleSortValue, handleMenu }) => {
  const { t } = useTranslation()
  return (
    <nav className={styles.container}>
      <div className={styles.genres}>
        {Object.values(navGenres).map((genre) => {
          const classList = className(styles.genre, { [styles.active]: genreValue === genre })
          return (
            <div className={classList} onClick={() => handleMenu(genre)} key={genre}>
              {t(`nav.genres.${genre}`)}
            </div>
          )
        })}
      </div>
      <div className={styles.sort}>
        <span>{t('nav.sort.by')}</span>
        <Select value={sortValue} toggleSortValue={toggleSortValue} />
      </div>
    </nav>
  )
}
