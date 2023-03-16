import { Button } from '@/components/UI'
import React from 'react'
import { AddButton } from './AddButton/AddButton'
import styles from './PageContent.module.scss'

export const PageContent = () => {
  return (
    <div className={styles.wrapper}>
      <AddButton />
    </div>
  )
}
