import Icon from '@/ui/components/icon/Icon'
import style from './Header.module.scss'
import Links from './links/Links'

const Header = ({}) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Icon name={'logo'} width={39} height={56} />
        <h1>Organic</h1>
      </div>
      <div className={style.links}>
        <Links />
      </div>
      <div className={style.inputs}>3</div>
    </header>
  )
}

export default Header
