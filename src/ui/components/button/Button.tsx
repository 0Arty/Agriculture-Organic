'use client'
import classNames from 'classnames'
import style from './Button.module.scss'
import Icon from '../icon/Icon'

interface IProps {
  type: 'default' | 'gold' | 'white' | 'pagination'
  text: string
  handleClick: () => void
}
const Button = ({ type, text, handleClick }: IProps) => {
  return (
    <button
      onClick={handleClick}
      className={classNames(
        style.btn,
        type === 'gold' ? style.gold : '',
        type === 'white' ? style.white : ''
      )}
    >
      <div className={style.container}>
        {text}
        {type !== 'pagination' ? (
          <div className={style.circle}>
            <Icon name={'arrow'} width={20} height={20} styling={style.icon} />
          </div>
        ) : null}
      </div>
    </button>
  )
}

export default Button
