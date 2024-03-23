'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './Handlers.module.scss'
import { useDispatch } from 'react-redux'
import { toggleShopModalWindow } from '@/libs/store/slices/applicationSlice'

const ShopBaskerBtn = () => {
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleShopModalWindow())
  }

  const itemCounter: number = 0
  return (
    <div className={style.inputs}>
      <button onClick={toggleMenuHandler}>
        <Icon width={30} height={25} name={'shop'} styling={style.svg} />
      </button>
      <span>{`Card (${itemCounter})`}</span>
    </div>
  )
}

export default ShopBaskerBtn
