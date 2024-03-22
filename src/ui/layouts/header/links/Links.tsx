'use client'
import style from './Links.module.scss'

import { routes } from '@/utils/constants'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'

const Links = ({}) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <nav className={style.links}>
      {routes &&
        routes.map((route, id) => {
          return (
            <Link href={route.path} key={route.name}>
              {route.name}
            </Link>
          )
        })}
    </nav>
  )
}

export default Links
