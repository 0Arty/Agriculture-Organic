import { ReactNode } from 'react'
import style from './Wrapper.module.scss'

interface IProps {
  children: ReactNode
}
const Wrapper = ({ children }: IProps) => {
  return <section className={style.wrapper}>{children}</section>
}

export default Wrapper
