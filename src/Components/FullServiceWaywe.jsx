import React from 'react'
import SingleService from '../Components/SingleService';

const FullServiceWaywe = (props) => {
    const FullServiceWayWeDesign =[
        {
            serviceTitle:"Software and Platform            ",
            serviceDesc:"Our software and platform services will transform your business. We provide tailored solutions to help you optimize operations and increase efficiency. With our cutting-edge technology",
            link:"software-development-platform"
        },
        {
            serviceTitle:"Digital marketing",
            serviceDesc:"With our digital marketing services, you can maximize your online potential. Our customized strategies ensure that your company reaches the proper audience and achieves genuine results",
            link:"digital-marketing"
        },
        {
            serviceTitle:"Web Development",
            serviceDesc:"Looking for experienced Web Development services to help you realise your online vision? There is no need to look any further! Our expert developers use cutting-edge  ",
            link:"web-development"
        },
        {
            serviceTitle:"Cloud Service",
            serviceDesc:"With our Cloud Services, you may explore the infinite possibilities of the Cloud. Transform your IT architecture, simplify data management, and easily design and deploy apps. ",
            link:"cloud-service"
        },
        {
            serviceTitle:"HRM",
            serviceDesc:"With our customized HRM services, you can empower your workers and propel your organization forward. Our skilled team offers complete solutions for recruitment, talent management",
            link:"hrm"
        },
        {
            serviceTitle:"UI UX Design            ",
            serviceDesc:"Creating intuitive and visually stunning digital experiences. Let our expert UI/UX designers elevate your brand and engage your users.",
            link:"ui-ux-design"
        },
        {
            serviceTitle:"Digital Academy",
            serviceDesc:"With Digital Academy's specialized training services, you can unleash your digital potential. Get hands-on, engaging learning experiences to help you upskill, reskill, or jumpstart ",
            link:"digital-marketing-academy"
        },
        
    ]
  return (
    <div>
         <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            {/* <span className="section-title__tagline">
              Wide Range of Services
            </span> */}
            <h2 className="section-title__title">{props.title}</h2>
          </div>
          <div className="row">
            {FullServiceWayWeDesign.map((data) => {
              return (
                <SingleService
                  link={data.link}
                  serviceTitle={data.serviceTitle}
                  serviceDesc={data.serviceDesc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FullServiceWaywe