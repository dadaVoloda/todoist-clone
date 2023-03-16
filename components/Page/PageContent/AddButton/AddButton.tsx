import { Button } from '@/components/UI'
import React from 'react'
import styles from './AddButton.module.scss'
import PlusIcon from './plus.svg'

export const AddButton = () => {
  return (
    <Button className={styles.button}>
      <span className={styles.icon}>
        <PlusIcon />
      </span>
      <span>Добавить задачу</span>
    </Button>
  )
}
