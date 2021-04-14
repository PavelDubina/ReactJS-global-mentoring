import React, { useState, useRef } from 'react'
import className from 'classnames'
import { useTranslation } from 'next-i18next'
import { useOutsideClick } from '../../Hooks/useClickOutside'
import { genres } from '../../utils/constants'
import styles from '../../../styles/FormSelect.module.scss'

type FormSelectProps = {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormSelect: React.FC<FormSelectProps> = ({ name, value, onChange }) => {
  const { t } = useTranslation()
  console.log(t('addModal.genres.comedy'))
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropStyle = className(styles.dropdown, { [styles.visible]: isOpen })
  const arrowStyle = className(styles.arrow, { [styles.open]: isOpen })
  const valueStyle = className(styles.value, { [styles.default_value]: !value })
  useOutsideClick(ref, () => setIsOpen(false))
  return (
    <>
      <span>{t('addModal.input.genre')}</span>
      <div ref={ref} className={styles.container}>
        <div onClick={() => setIsOpen((state) => !state)} className={styles.select}>
          <p className={valueStyle}>
            {(value.length > 0 &&
              value
                .split(', ')
                .map((genre) => t(`addModal.genres.${genre}`))
                .join(', ')) ||
              t('addModal.placeholders.genre')}
          </p>
          <div className={arrowStyle}>&#9660;</div>
        </div>
        <div data-testid="dropdown" className={dropStyle}>
          {genres.map((genre) => (
            <div key={genre} className={styles.input}>
              <input
                className={styles.checkbox}
                name={name}
                id={genre}
                type="checkbox"
                checked={value.split(', ').includes(genre)}
                value={genre}
                onChange={onChange}
              />
              <label className={styles.lable} htmlFor={genre}>
                <span>{t(`addModal.genres.${genre}`)}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
