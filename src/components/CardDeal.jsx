import React from 'react'
import styles, {layout} from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section id='cardDeal' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal 
          <br className='sm:block hidden'/>
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Best deals are filtered from all the deals.
          The process to get the best deals is very easy comparitively.
        </p>
        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card'  className='w-[100%] h-[100%]'/>
      </div>

    </section>
  )
}

export default CardDeal