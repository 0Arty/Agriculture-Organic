'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './MenuHandler.module.scss'
import { useDispatch } from 'react-redux'
import { toggleRoutesModalWindow } from '@/libs/store/slices/applicationSlice'

const MenuHandler = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleRoutesModalWindow())
  }

  return (
    <div onClick={toggleMenuHandler}>
      <Icon name={'list'} width={50} height={50} styling={style.svg} />
    </div>
  )
}

export default MenuHandler
