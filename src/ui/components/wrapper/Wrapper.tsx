import { ReactNode } from 'react'
import style from './Wrapper.module.scss'

interface IProps {
  children: ReactNode
}
const Wrapper = ({ children }: IProps) => {
  return <div className={style.wrapper}>{children}</div>
}

export default Wrapper
