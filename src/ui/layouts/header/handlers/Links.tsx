'use client'
import style from './Handlers.module.scss'
import { routes } from '@/utils/constants'
import Link from 'next/link'

const Links = ({}) => {
  return (
    <nav className={style.links}>
      {routes &&
        routes.map((route, id) => {
          return (
            <Link href={route.path} key={route.name} className={style.link}>
              {route.name}
            </Link>
          )
        })}
    </nav>
  )
}

export default Links
