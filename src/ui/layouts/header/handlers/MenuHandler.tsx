'use client'
import Icon from '@/ui/components/icon/Icon'
import style from './Handlers.module.scss'

interface IProps {
  onClickFunction: () => void
}
const MenuHandler = ({ onClickFunction }: IProps) => {
  return (
    <div onClick={onClickFunction}>
      <Icon name={'list'} width={50} height={50} styling={style.svg} />
    </div>
  )
}

export default MenuHandler
