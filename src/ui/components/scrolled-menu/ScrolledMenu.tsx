'use client'
import classNames from 'classnames'
import style from './ScrolledMenu.module.scss'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { useAppSelector } from '@/libs/store/root'
import { closeAllModalWindows } from '@/libs/store/slices/applicationSlice'
import { useDispatch } from 'react-redux'

interface IProps {
  isOpen: boolean
  children: ReactNode
  styleProps?: string
}
const ScrolledMenu = ({ children, isOpen, styleProps }: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [AnimationDelay, setAnimationDelay] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      setTimeout(() => {
        setAnimationDelay(true)
      }, 20)
    } else {
      setAnimationDelay(false)
      setTimeout(() => {
        setIsMounted(false)
      }, 301)
    }
  }, [isOpen])

  //close window if click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (!menuRef.current) return
    if (!menuRef.current.contains(event.target as Node)) {
      setAnimationDelay(false)
      setTimeout(() => {
        dispatch(closeAllModalWindows())
      }, 301)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  })
  //

  const isOpenWindow = true
  return (
    <>
      {isMounted && (
        <div
          ref={menuRef}
          className={classNames(
            style.mobile_menu,
            AnimationDelay ? style.active : style.closed,
            styleProps
          )}
        >
          {children}
        </div>
      )}
    </>
  )
}

export default ScrolledMenu
