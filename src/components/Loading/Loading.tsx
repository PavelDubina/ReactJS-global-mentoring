import React from 'react'
import styles from '../../../styles/Loading.module.scss'

export const Loading: React.FC = () => (
  <div className={styles.lds_spinner}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)
