import React, { FC } from 'react'
import { Search } from '@/components'
import { Button } from '@/components/UI'
import styles from './Header.module.scss'
import Image from 'next/image'
import MenuIcon from './icons/menu.svg'
import HomeIcon from './icons/home.svg'
import PlusIcon from './icons/plus.svg'
import StatIcon from './icons/stat.svg'
import QuestionIcon from './icons/question.svg'
import NoticeIcon from './icons/notice.svg'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.buttons}>
          <Button className={styles.button}>
            <MenuIcon />
          </Button>
          <Button className={styles.button}>
            <HomeIcon />
          </Button>
        </div>
        <Search />
      </div>
      <div className={styles.right}>
        <div className={styles.buttons}>
          <Button className={styles.button}>
            <PlusIcon />
          </Button>
          <Button className={styles.button}>
            <StatIcon />
            <span className={styles.count}>1/6</span>
          </Button>
          <Button className={styles.button}>
            <QuestionIcon />
          </Button>
          <Button className={styles.button}>
            <NoticeIcon />
          </Button>
        </div>
        <Button className={styles.avatar}>
          <Image src='/avatar.jpg' alt='Аватар' width={28} height={28} />
        </Button>
      </div>
    </header>
  )
}
