import classNames from 'classnames'
import style from './Menu.module.scss'
import Links from './handlers/Links'
import ShopBaskerBtn from './handlers/ShopBaskerBtn'
import { useEffect, useRef, useState } from 'react'

interface IProps {
  isOpen: boolean
  closeMenu: () => void
}
const Menu = ({ isOpen, closeMenu }: IProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  // const [isAnimated, setIsAnimated] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (isOpen) {
  //     setTimeout(() => setIsAnimated((prev) => !prev), 1)
  //     setIsMounted((prev) => !prev)
  //     return
  //   }
  //   setTimeout(() => setIsMounted((prev) => !prev), 301)
  //   setIsAnimated((prev) => !prev)
  // }, [isOpen
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
    ></div>
  )
}

export default Menu
