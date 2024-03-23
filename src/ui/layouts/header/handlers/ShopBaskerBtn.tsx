import Icon from '@/ui/components/icon/Icon'
import style from './Handlers.module.scss'
interface IProps {
  togleMenu: () => void
}

const ShopBaskerBtn = ({ togleMenu }: IProps) => {
  const itemCounter: number = 0
  return (
    <div className={style.inputs}>
      <button onClick={togleMenu}>
        <Icon width={30} height={25} name={'shop'} styling={style.svg} />
      </button>
      <span>{`Card (${itemCounter})`}</span>
    </div>
  )
}

export default ShopBaskerBtn
