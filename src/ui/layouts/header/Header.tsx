'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './Header.module.scss'
import Links from './handlers/Links'
import Menu from './Menu'
import ShopBaskerBtn from './handlers/ShopBaskerBtn'
import MenuHandler from './handlers/MenuHandler'
import { useState } from 'react'

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const setMenuHandler = () => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 301)
      return
    } else {
      setIsOpen(true)
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
        <MenuHandler onClickFunction={setMenuHandler} />
      </div>

      {isOpen && <Menu isOpen={isOpen} closeMenu={setMenuHandler} />}
    </header>
  )
}

export default Header
