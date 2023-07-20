import React,{useEffect} from "react";
import Link from 'next/link'
import Image from "next/image";
import aboutImge from '../../images/resources/about-two-img-1.jpg'
// import MissionVisionSlider from "../MissionAndVision";

const AboutOne = () => {

  return (
    <div>
      {/*About One Start*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div data-aos="slide-right"
                className="about-one__left wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
              >
                <div className="about-one__img-box">
                  <div className="about-one__img">
                    <Image
                      src={aboutImge}                      alt="about-image"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  {/* <span className="section-title__tagline">
                    Get to Know About us
                  </span> */}
                  <h4 className="section-title__title">
                   About Us
                  </h4>
                </div>
                
                <p className="about-one__text py-3">
                  Way WeDesign is a leading IT/ITES provider in cochin with 5 +
                  years of proven track record in serving customers worldwide
                  with a passion for business innovation and always striving to
                  take our company to new pinnacles of excellence. Our team
                  stays at the forefront of technology advancements, constantly
                  researching the latest developments to ensure that we offer
                  our customers the best possible services. We invest in
                  state-of-the-art facilities and technologies to be at the
                  cutting edge of the industry. We understand the importance of
                  developing strong relationships and ensuring customer
                  satisfaction. 
                </p>
                <p></p>
                <p></p>
                <p></p>
                {/* <MissionVisionSlider/> */}
                <br/>
                {/* <div className="about-one__points-box">
                  <ul className="about-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>Take a look at our round up of the best shows</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>It has survived not only five centuries</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>
                          Lorem Ipsum has been the ndustry standard dummy text
                        </p>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/* <div className="about-one__it-solutions">
                  <div className="about-one__it-solutions-icon">
                    <span className="icon-computer" />
                  </div>
                  <div className="about-one__it-solutions-text-box">
                    <p className="about-one__it-solutions-text">
                      We Run all Kinds of IT Solutions &amp; Services
                      <br /> that Vow your Success
                    </p>
                  </div>
                </div> */}
                <Link href="/about" className="about-one__btn thm-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </div>
  );
};

export default AboutOne;
