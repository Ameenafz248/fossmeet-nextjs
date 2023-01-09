import React from 'react'
import styles from '../../styles/LandingPage/Why.module.css'
import image1 from '/public/images/linus-and-rms-transparent.png'
import Image from 'next/image'

function WhyFoss() {
  return (
    <div className={styles.why}>
      <div className={styles.heading_why}>
        <h1>
          Why are we conducting it?
        </h1>
        <p>
          We believe in collaboration for the growth of technology and society.
        </p>
      </div>
      <div className={styles.why_quotes}>
        <div className={styles.why_quotes1}>
          <p>
            &quot; When a project is opened up, there is rapid and continual improvement. With 
            teams of contributors working in parallel, the results can happen far more speedily 
            and successfully than if the work were being conducted behind closed doors &quot;
          </p>
          <h4>
            -Linus Torvalds, creator of Linux and Git
          </h4>
        </div >
        <div className={styles.why_quotes2}>
          <p>
            Creativity can be a social contribution, but only in so far as socitey
             is free to use the results.
          </p>
          <h4>
             -Richard Stallman, founder of the Free Software Movement
          </h4>
        </div>
      </div>
      {/* <Image src={image1} class={styles.img} alt="Images" width="3000"/> */}
    </div>
  )
}

export default WhyFoss