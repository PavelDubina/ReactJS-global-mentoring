import React, { useState } from 'react'
import className from 'classnames'
import { sortingValues } from '../../../utils/constants'
import styles from './Select.scss'

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('RELEASE DATE')
  const selectStyle = className(styles.select, { [styles.open]: isOpen })
  const dropdownStyle = className(styles.dropdown, { [styles.visible]: isOpen })
  return (
    <div onClick={() => setIsOpen((state) => !state)} className={selectStyle}>
      {value}
      <div onClick={(event) => setValue(event.target.textContent)} className={dropdownStyle}>
        {sortingValues.map((val) => {
          const activeStyle = className({ [styles.active]: val === value })
          return (
            <p className={activeStyle} key={val}>
              {val}
            </p>
          )
        })}
      </div>
    </div>
  )
}
