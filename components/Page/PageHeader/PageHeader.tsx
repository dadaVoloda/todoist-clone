import React from 'react'
import styles from './PageHeader.module.scss'

export const PageHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>Спорт</h1>
        <div>options</div>
      </div>
    </div>
  )
}
