'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './Header.module.scss'
import Links from './handlers/Links'
import Menu from './Menu'
import ShopBaskerBtn from './handlers/ShopBaskerBtn'
import MenuHandler from './handlers/MenuHandler'
import { useState } from 'react'

const Header = ({}) => {
  const [routesMenuIsOpen, sertRoutesMenuIsOpen] = useState<boolean>(false)

  const setRoutesMenuHandler = () => {
    if (routesMenuIsOpen) {
      setTimeout(() => sertRoutesMenuIsOpen(false), 301)
      return
    } else {
      sertRoutesMenuIsOpen(true)
    }
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Icon name={'logo'} width={39} height={56} />
        <h1>Organic</h1>
      </div>
      <div className={style.responsive_container}>
        <Links />
      </div>
      <div className={style.responsive_container}>
        <ShopBaskerBtn />
      </div>

      <div className={style.icon_menu}>
        <ShopBaskerBtn />
        <MenuHandler onClickFunction={setRoutesMenuHandler} />
      </div>

      {routesMenuIsOpen && (
        <Menu isOpen={routesMenuIsOpen} closeMenu={setRoutesMenuHandler} />
      )}
    </header>
  )
}

export default Header
