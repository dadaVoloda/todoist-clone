import React from 'react'
import styles from './Page.module.scss'
import { PageContent } from './PageContent/PageContent'
import { PageHeader } from './PageHeader/PageHeader'

export const Page = () => {
  return (
    <div className={styles.page}>
      <PageHeader />
      <PageContent />
    </div>
  )
}
