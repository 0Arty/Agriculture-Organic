'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './Header.module.scss'
import Links from './handlers/Links'
import Menu from './Menu'
import ShopBaskerBtn from './handlers/ShopBaskerBtn'
import MenuHandler from './handlers/MenuHandler'
import { useState } from 'react'
import ScrolledMenu from '@/ui/components/scrolled-menu/ScrolledMenu'
import { useAppSelector } from '@/libs/store/root'

const Header = ({}) => {
  const [routesMenuIsOpen, setRoutesMenuIsOpen] = useState<boolean>(false)
  const [shopMenuIsOpen, setShopMenuIsOpen] = useState<boolean>(false)

  // const setRoutesMenuHandler = () => {
  //   if (shopMenuIsOpen) {
  //     showModal(shopMenuIsOpen, setShopMenuIsOpen)
  //   }
  //   setTimeout(() => {
  //     showModal(routesMenuIsOpen, setRoutesMenuIsOpen)
  //   }, 301)
  // }
  // const setShopMenuHandler = () => {
  //   if (routesMenuIsOpen) showModal(routesMenuIsOpen, setRoutesMenuIsOpen)
  //   setTimeout(() => {
  //     showModal(shopMenuIsOpen, setShopMenuIsOpen)
  //   }, 301)
  // }

  // const showModal = (menuIsOpen: boolean, setMenuIsOpen: Function) => {
  //   if (menuIsOpen) {
  //     setTimeout(() => setMenuIsOpen(false), 301)
  //     return
  //   } else {
  //     setMenuIsOpen(true)
  //   }
  // }
  const shopIsOpen = useAppSelector(
    (state) => state.applicationDetails.shopModalWindowIsOpen
  )
  const routesIsOpen = useAppSelector(
    (state) => state.applicationDetails.routesModalWindowIsOpen
  )
  console.log('shopIsOpen:', shopIsOpen)

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

      <ScrolledMenu isOpen={shopIsOpen}>
        <span>I`m shop window</span>
      </ScrolledMenu>

      <ScrolledMenu isOpen={routesIsOpen}>
        <span>I`m links window</span>
      </ScrolledMenu>

      {/* {routesMenuIsOpen && (
        <Menu isOpen={routesMenuIsOpen} closeMenu={setRoutesMenuHandler}>
          <h1>Routes</h1>
        </Menu>
      )}
      {shopMenuIsOpen && (
        <Menu isOpen={shopMenuIsOpen} closeMenu={setShopMenuHandler}>
          <h1>shop</h1>
        </Menu>
      )} */}
    </header>
  )
}

export default Header
