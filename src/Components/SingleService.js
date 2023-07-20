import React from 'react'
import  Link  from 'next/link';


const SingleService = (props) => {
  
  return (
    <>
    
              <div  data-aos="fade-up-right"
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <di style={{height:"350px"}} className="services-one__single">
                  {/* <div className="services-one__icon">
                    <span className="icon-conversation" />
                  </div> */}
                  <h3 className="services-one__title">
                    <Link href={`/${props.link}`}>
                     {props.serviceTitle}
                    </Link>
                  </h3>
                  <p className="services-one__text">
                   {props.serviceDesc}
                  </p>
                  <div className="services-one__arrow">
                    <Link href={`/${props.link}`}>
                      <span className="icon-right-arrow" />
                    </Link>
                  </div>
                </di>
              </div>
              
                
             
    
    </>
  )
}

export default SingleService