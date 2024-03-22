import Icon from '@/ui/components/icon/Icon'
import style from './Header.module.scss'
import Links from './links/Links'

const Header = ({}) => {
  const itemCounter: number = 0

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Icon name={'logo'} width={39} height={56} />
        <h1>Organic</h1>
      </div>
      <div className={style.links}>
        <Links />
      </div>
      <div className={style.inputs}>
        <button>
          <Icon width={25.53} height={23} name={'shop'} />
        </button>
        <span>{`Card (${itemCounter})`}</span>
      </div>
    </header>
  )
}

export default Header
