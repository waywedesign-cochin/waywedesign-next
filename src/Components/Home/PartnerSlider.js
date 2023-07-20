import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const PartnerSlider = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div>
      {/*Brand One Start*/}
      <section className="brand-one">
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
          <div className="container">
            
            <div className="row">
              <div className="col-md-3 col-6 text-center ">
                <div className="counter-wrapper">
                  <h1 className=" section-title__title_counter text-white">
                    {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 className="text-white">Projects</h4>
                </div>
              </div>
              <div className="col-md-3 col-6 text-center counter-col">
                <div className="counter-wrapper">
                  <h1 className=" section-title__title_counter text-white">
                    {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 className="text-white">Countries</h4>
                </div>
              </div>
              <div className="col-md-3 py-md-0 py-3 col-6 text-center counter-col">
                <div className="counter-wrapper">
                  <h1 className=" section-title__title_counter text-white">
                    {counterOn && <CountUp start={0} end={10} duration={2} delay={0}/>}
                    +
                  </h1>
                  <h4 class="text-white">Services</h4>
                </div>
              </div>
              <div className="col-md-3 py-md-0 py-3  col-6 text-center counter-col">
                <div className="counter-wrapper">
                  <h1 className=" section-title__title_counter text-white">
                    {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                    %
                  </h1>
                  <h4 className="text-white">Reliable</h4>
                </div>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>
      {/*Brand One End*/}
    </div>
  )
}

export default PartnerSlider

