import React from 'react'
import  Link  from 'next/link';


const ServiceWithoutLink = (props) => {
  
  return (
    <>
    
              <div  data-aos="fade-up-right"
                className="col-xl-6 col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/*Services One Single*/}
                <div style={{height:"460px",backgroundColor:"#fafafa"}} className="services-one__single">
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
                 
                </div>
              </div>
              
                
             
    
    </>
  )
}

export default ServiceWithoutLink