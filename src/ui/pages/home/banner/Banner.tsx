'use client'
import Image from 'next/image'
import style from './Banner.module.scss'
import Wrapper from '@/ui/components/wrapper/Wrapper'
import Button from '@/ui/components/button/Button'

const Banner = ({}) => {
  const handleClick = () => {
    console.log('MAKE SOMETHING WITH THIS !!')
  }
  return (
    <section className={style.banner}>
      <Image
        src={'/images/banner_bg.png'}
        alt="banner"
        fill
        className={style.back_ground}
      />
      <Wrapper>
        <article className={style.article}>
          <div className={style.container}>
            <span>100% Natural Food</span>
            <h1>Choose the best healthier way of life</h1>
            <Button
              type={'gold'}
              text={'Explore Now'}
              handleClick={handleClick}
            />
          </div>
        </article>
      </Wrapper>
    </section>
  )
}

export default Banner
