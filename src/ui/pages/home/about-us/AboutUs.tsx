import Image from 'next/image'
import style from './AboutUs.module.scss'
import Wrapper from '@/ui/components/wrapper/Wrapper'
import Icon from '@/ui/components/icon/Icon'

const AboutUs = ({}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.image_block}>
        <Image
          src="/images/oranges.png"
          alt="oranges"
          fill
          className={style.img}
        />
      </div>
      <Wrapper>
        <div className={style.text}>
          <span>About Us</span>
          <h2>We Believe in Working Accredited Farmers</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <Icon name={'organic-food-only'} width={46} height={46} />
        </div>
      </Wrapper>
    </div>
  )
}

export default AboutUs
