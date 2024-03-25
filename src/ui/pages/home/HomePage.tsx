import Icon from '@/ui/components/icon/Icon'
import style from './HomePage.module.scss'
import Banner from './banner/Banner'
import Cards from './cards/Cards'

const HomePage = ({}) => {
  return (
    <main className={style.wrapper}>
      <Banner />
      <Cards />
    </main>
  )
}

export default HomePage
