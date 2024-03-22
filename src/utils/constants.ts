interface IRoutes {
  name: string
  path: string
}

export const routes: IRoutes[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Shop',
    path: '/shop',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'News',
    path: '/news',
  },
]
