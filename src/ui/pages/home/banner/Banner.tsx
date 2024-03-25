import Image from 'next/image'
import style from './Banner.module.scss'
import Wrapper from '@/ui/components/wrapper/Wrapper'

const Banner = ({}) => {
  return (
    <section className={style.banner}>
      <Image
        src={'/images/banner_bg.png'}
        alt="banner"
        fill
        className={style.back_ground}
      />
      <Wrapper>
        <div className={style.article}>
          <span>100% Natural Food</span>
          <h1>Choose the best healthier way of life</h1>
        </div>
      </Wrapper>
    </section>
  )
}

export default Banner
