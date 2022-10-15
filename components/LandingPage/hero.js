import React from 'react'
import styles from '../../styles/LandingPage/Hero.module.css'
import Image from 'next/image'
import logo from '../../public/images/landing-page-illustration-1.svg'
function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>
          It’s Free<br/> and Open.
        </h1>
        <p>
          Nope, not like free beer at an open bar. It&apos;s much more than that.
        </p>
      </div>
      <div className={styles.image}>
        <div>
          <Image src={logo} alt="FOSS Cell NITC" width="700" height="500"/>
        </div>
      </div>
    </div>
  )
}

export default Hero