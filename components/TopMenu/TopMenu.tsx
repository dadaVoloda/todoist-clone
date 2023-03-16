import React from 'react'

import BoxIcon from './box.svg'
import TodayIcon from './today.svg'
import CalendarIcon from './calendar.svg'
import FiltersIcon from './filters.svg'
import { ItemMenu } from './ItemMenu/ItemMenu'

const menu = [
  { title: 'Входящие', path: '/project/100', count: 1, icon: <BoxIcon /> },
  { title: 'Сегодня', path: '/', count: 5, icon: <TodayIcon /> },
  { title: 'Предстоящее', path: '/upcoming', count: 0, icon: <CalendarIcon /> },
  {
    title: 'Фильтры и метки',
    path: '/filters-labels',
    count: 0,
    icon: <FiltersIcon />,
  },
]

export const TopMenu = () => {
  return (
    <ul>
      {menu.map((item) => (
        <ItemMenu key={item.title} {...item} />
      ))}
    </ul>
  )
}
