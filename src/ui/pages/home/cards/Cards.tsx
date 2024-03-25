import Image from 'next/image'
import style from './Cards.module.scss'
import Wrapper from '@/ui/components/wrapper/Wrapper'
import classNames from 'classnames'

const Cards = ({}) => {
  return (
    <Wrapper>
      <section className={style.wrapper}>
        <div className={classNames(style.first_card, style.card)}>
          <Image
            src={'/images/banan.png'}
            className={style.image}
            alt="banana"
            fill
          />
          <div className={style.text}>
            <span>Natural!!</span>
            <h3>Get Garden Fresh Fruits</h3>
          </div>
        </div>
        <div className={style.card}>
          <Image
            src={'/images/apricot.png'}
            className={style.image}
            alt="peach and meat"
            fill
          />
          <div className={style.text}>
            <span>Offer!!</span>
            <h3>Get 10% off on Vegetables</h3>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Cards
