import classNames from 'classnames'
import style from './Menu.module.scss'
import Links from './handlers/Links'
import ShopBaskerBtn from './handlers/ShopBaskerBtn'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface IProps {
  isOpen: boolean
  closeMenu: () => void
  children: ReactNode
}
const Menu = ({ isOpen, closeMenu, children }: IProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 1)
  }, [isOpen])

  const handleClickOutside = (event: MouseEvent) => {
    if (!menuRef.current) return
    if (!menuRef.current.contains(event.target as Node)) {
      setIsMounted(false)
      setTimeout(() => closeMenu(), 301)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  })

  return (
    <div
      ref={menuRef}
      className={classNames(
        style.mobile_menu,
        isMounted ? style.active : style.closed
      )}
    >
      {children}
    </div>
  )
}

export default Menu
