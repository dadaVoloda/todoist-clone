import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import styles from './ItemMenu.module.scss'

interface ItemMenuProps {
  title: string
  count?: number
  icon: ReactNode
  path: string
}

export const ItemMenu: FC<ItemMenuProps> = (props) => {
  const { title, icon, path, count = 0 } = props
  return (
    <li className={styles.itemMenu}>
      <Link className={styles.link} href={path}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
      </Link>
      <span className={styles.count}>{count > 0 && count}</span>
    </li>
  )
}
