import Image from 'next/image'
import Link from 'next/link'
import appdevelopment from "../../images/icons/app-development.png"
import socialmedia from "../../images/icons/social-media.png"
import migrating from "../../images/icons/migrating.png"
import uiux from "../../images/icons/uiuxdesign.png"
import hrm from "../../images/icons/hrm.png"
import academy from "../../images/icons/academy.png"
const CustomService = () => {
  return (
    <div>
    {/*Services One Start*/}
    <section className="services-one" >
     <div className="container">
       <div className="section-title text-center">
         {/* <span className="section-title__tagline">
          
         </span> */}
         <h2 className="section-title__title"> Wide Range of Services</h2>
       </div>
       <div className="row">
         <div  data-aos="fade-up-right"
           className="col-xl-4 col-lg-4 wow fadeInLeft"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
             <div className="services-one__icon" >
            <Image className= "service-custom-icon" width="60" height="60" src={appdevelopment} alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link href="/software-development-platform">
                 Software & Platform <br /> Development
               </Link>
             </h3>
             <p className="services-one__text">
             Unlock the full potential of your business with customized software development solutions tailored to your unique needs and requirements
             </p>
             
           </div>
         </div>
         <div data-aos="slide-up"
           className="col-xl-4 col-lg-4 wow fadeInUp"
           data-wow-delay="200ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" >
            <Image className="service-custom-icon" width="60" height="60" src={socialmedia} alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link href="/digital-marketing">
                 Digital <br /> Marketing
               </Link>
             </h3>
             <p className="services-one__text">
             Boost your online presence and reach your target audience through our comprehensive digital marketing services.
             </p>
           
           </div>
         </div>
         <div data-aos="fade-up-left"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" >
            <Image className="service-custom-icon" width="60" height="60" src={migrating} alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link href="cloud-service">
                 Cloud  <br /> Service
               </Link>
             </h3>
             <p className="services-one__text">
             Explore our comprehensive range of cloud services offering secure data storage, scalable computing power, and seamless application deployment

             </p>

           </div>
         </div>
         <div data-aos="fade-up-right"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" >
            <Image className="service-custom-icon" width="60" height="60" src={uiux} alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link href="/ui-ux-design">
               UI UX <br></br>Design

               </Link>
             </h3>
             <p className="services-one__text">
             Unlock the potential of your digital products with our bespoke UI/UX design services, ensuring optimal user engagement and brand loyalty
             </p>

           </div>
         </div>
         <div data-aos="slide-up"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" >
            <Image className= "service-custom-icon" width="60" height="60" src={hrm} alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link href="hrm">
                HRM
                <br/>
                <br/>
                
               </Link>
             </h3>
             <p className="services-one__text">
             Discover our comprehensive HRM services, providing strategic talent management solutions to optimize your workforce and drive business success
    </p>

           </div>
         </div>
         <div data-aos="fade-up-left"
           className="col-xl-4 col-lg-4 wow fadeInRight"
           data-wow-delay="100ms"
         >
           {/*Services One Single*/}
           <div className="services-one__single">
           <div className="services-one__icon" >
            <Image className= "service-custom-icon" width="60" height="60" src={academy} alt="service image" />
                        </div>
             <h3 className="services-one__title">
               <Link href='digital-marketing-academy'>
                 Digital Marketing  <br /> Academy
               </Link>
             </h3>
             <p className="services-one__text">
             Discover the secrets of successful digital marketing at our academy and gain the skills to thrive in the online world

             </p>

           </div>
         </div>
       </div>
     </div>
     
   </section>
   {/*Services One End*/}
</div>
  )
}

export default CustomService