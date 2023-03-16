import React from 'react'
import { TopMenu } from '@/components'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <TopMenu />
      <h5>Проекты</h5>
    </div>
  )
}
