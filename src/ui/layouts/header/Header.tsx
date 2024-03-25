'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './Header.module.scss'
import Links from './handlers/Links'
import ShopBaskerBtn from './handlers/ShopBaskerBtn'
import MenuHandler from './handlers/MenuHandler'
import ScrolledMenu from '@/ui/components/scrolled-menu/ScrolledMenu'
import { useAppSelector } from '@/libs/store/root'

const Header = ({}) => {
  const shopIsOpen = useAppSelector(
    (state) => state.applicationDetails.shopModalWindowIsOpen
  )
  const routesIsOpen = useAppSelector(
    (state) => state.applicationDetails.routesModalWindowIsOpen
  )
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
        <MenuHandler />
      </div>

      <ScrolledMenu isOpen={shopIsOpen} styleProps={style.scrolled_menu}>
        <span>I`m shop window</span>
      </ScrolledMenu>

      <ScrolledMenu isOpen={routesIsOpen} styleProps={style.scrolled_menu}>
        <span>I`m links window</span>
      </ScrolledMenu>
    </header>
  )
}

export default Header
