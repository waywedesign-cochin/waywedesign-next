import React from 'react'
import Link from 'next/link'
import ctashape from "../../images/shapes/cta-two-shape-1.png"
import Image from 'next/image'
const HomeCta = () => {
  return (
    <div>
         {/*CTA One Start*/}
        <section className="cta-two">
  <div className="cta-two__container">
    <div className="cta-two-shape-1"><Image src={ctashape} alt="cta shape two" /></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="cta-two__inner">
            <div className="cta-two__left">
              <h2 className="cta-two__title">We’ll Help You Overcome Your <br /> Technology
                Challenges
              </h2>
            </div>
            <div className="cta-two__btn-box">
              <Link href="contact" className="cta-one__btn thm-btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/*CTA One End*/}
    </div>
  )
}

export default HomeCta