import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { useOutsideClick } from '../../../Hooks/useClickOutside'
import { sortingValues } from '../../../utils/constants'
import styles from './Select.scss'

export const Select = ({ value, toggleSortValue }) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const selectStyle = className(styles.select, { [styles.open]: isOpen })
  const dropdownStyle = className(styles.dropdown, { [styles.visible]: isOpen })
  useOutsideClick(ref, () => isOpen && setIsOpen(false))
  return (
    <div onClick={() => setIsOpen((state) => !state)} ref={ref} className={selectStyle}>
      {value}
      <div onClick={toggleSortValue} className={dropdownStyle}>
        {Object.values(sortingValues).map((val) => {
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

Select.propTypes = {
  value: PropTypes.string.isRequired,
  toggleSortValue: PropTypes.func.isRequired,
}
