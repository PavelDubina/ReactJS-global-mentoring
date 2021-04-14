import React, { useState, useRef } from 'react'
import className from 'classnames'
import { useTranslation } from 'next-i18next'
import { useOutsideClick } from '../../../Hooks/useClickOutside'
import { sortingValues } from '../../../utils/constants'
import styles from '../../../../styles/Select.module.scss'
import { getSortQuery } from '../../../utils/helpers'

type SelectProps = {
  value: string
  toggleSortValue: (sortValue: string) => void
}

export const Select: React.FC<SelectProps> = ({ value, toggleSortValue }) => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const selectStyle = className(styles.select, { [styles.open]: isOpen })
  const dropdownStyle = className(styles.dropdown, { [styles.visible]: isOpen })
  useOutsideClick(ref, () => isOpen && setIsOpen(false))
  return (
    <div data-testid="select" onClick={() => setIsOpen((state) => !state)} ref={ref} className={selectStyle}>
      {t(`nav.sort.${getSortQuery(value)}`)}
      <div data-testid="dropdown" className={dropdownStyle}>
        {Object.values(sortingValues).map((val) => {
          const activeStyle = className({ [styles.active]: val === value })
          return (
            <p onClick={() => toggleSortValue(val)} data-testid={val} className={activeStyle} key={val}>
              {t(`nav.sort.${getSortQuery(val)}`)}
            </p>
          )
        })}
      </div>
    </div>
  )
}
