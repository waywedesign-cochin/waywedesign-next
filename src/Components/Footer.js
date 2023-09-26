import React from 'react'
import  Link  from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div>
         {/*Site Footer One Start*/}
         <footer className="site-footer">
          <div className="site-footer__top">
            <div className="container">
              <div className="site-footer__top-inner">
                <div
                  className="site-footer-map"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/footer-bg.png)",
                  }}
                />
                <div className="row">
                  <div data-aos="fade-up"
                    className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <Link href="/">
                          <Image  width="150" height="150"
                            src={logo}
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <p className="footer-widget__about-text " style={{fontSize:"14px",textAlign:"justify"}}>
                      Way WeDesign, the  best IT/ ITES provider in Cochin, with over 5 years of experience, is dedicated to delivering tecnology-powered solutions globally. Our relentless pursuit of excellence and investment in state-of-the-art resources keep us on technology's leading edge. Strong client relationships drive demand for our services in Enterprise Mobility, Web Technologies, Internet Marketing, and more. We're committed to crafting customized solutions that align with your unique needs and goals.


                      </p>
                      <div className="footer-widget__about-social">
                      <Link target={"_blank"} href="https://wa.me/+917994643673">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link target={"_blank"} href="https://www.instagram.com/waywedesign/">
                          <i className="fab fa-instagram" />
                        </Link>
                       
                        <Link target={"_blank"} href="https://www.linkedin.com/company/13701254/">
                          <i className="fab fa-linkedin" />
                        </Link>
                        <Link target={"_blank"} href="https://www.behance.net/waywedesign">
                          <i className="fab fa-behance" />
                        </Link>
                        <Link target={"_blank"} href="https://twitter.com/waywedesign">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link target={"_blank"} href="https://www.facebook.com/contact.waywedesign/">
                          <i className="fab fa-facebook" />
                        </Link>
                        <Link href="https://in.pinterest.com/WayWeDesign/">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-up-right"
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="footer-widget__column footer-widget__links clearfix">
                      <h3 className="footer-widget__title">Links</h3>
                      <ul className="footer-widget__links-list list-unstyled clearfix">
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/software-development-platform">Software Platform</Link>
                        </li>
                        <li>
                          <Link href="/digital-marketing">Digital Marketing</Link>
                        </li>
                        <li>
                          <Link href="/web-development">Web Development</Link>
                        </li>
                        <li>
                          <Link href="/cloud-service">Cloud Service</Link>
                        </li>
                        <li>
                          <Link href="/hrm">HRM</Link>
                        </li>
                        <li>
                          <Link href="/ui-ux-design">UI UX Design</Link>
                        </li>
                        <li>
                          <Link href="/digital-marketing-academy">Digital Academy</Link>
                        </li>
                      </ul>
                     
                    </div>
                  </div>
                  <div data-aos="fade-up-right"
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="footer-widget__column footer-widget__contact">
                      <h3 className="footer-widget__title">Contact</h3>
                      <h5 className="text-white">India</h5>
                      <p className="footer-widget__contact-text " style={{textAlign:"left",fontSize:"14px"}}>
                      Way WeDesign,
                      47/1403A,Ivees, MRERA-69, Chalikkavattom, Vennala
                      Kochi, Kerala
                      682028
                      </p>
                      <ul className="list-unstyled footer-widget__contact-list">
                        <li>
                          <div className="icon">
                            <span className="icon-email" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="mailto:contact@waywedesign.com">
                              contact@waywedesign.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          
                          <div className="icon">
                            <span className="icon-telephone" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel:+917994643673">+91 799 464 3673</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <br></br>
                      <h5 className="text-white">UAE</h5>
                      <p className="footer-widget__contact-text" style={{fontSize:"14px"}}>
                      Dusseldorf Business Point,
Al Barsha 1, Dubai, United Arab Emirates
P.O.BOX: 5003517
                      </p>
                      <ul className="list-unstyled footer-widget__contact-list">
                    
                        <li>
                          
                          <div className="icon">
                            <span className="icon-telephone" />
                          </div>
                          <div className="text">
                            <p>
                              <a href="tel: +971562171439"> +971 562 171 439</a>
                            </p>
                          </div>
                        </li>
                      </ul>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="site-footer__bottom-container">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__bottom-left">
                        <p className="site-footer__bottom-text">
                          © All Copyright <span className="dynamic-year"></span>
                          {/* /.dynamic-year */} by{" "}
                          <Link href="/">Way WeDesign</Link>
                        </p>
                      </div>
                      <div className="site-footer__bottom-right">
                        <ul className="list-unstyled site-footer__bottom-menu">
                          <li>
                            <Link href="/terms-and-conditions">Terms &amp; Condition</Link>
                          </li>
                          
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Site Footer One End*/}
        {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src='/assets/images/logo.png'
                width={155}
                alt="logo"
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:contact@waywedesign.com">
              contact@waywedesign.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+91 799 464 3673">+91 799 464 3673</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
            <Link href="https://wa.me/+917994643673">
                          <i className="fab fa-whatsapp" />
                        </Link>
                        <Link href="https://www.instagram.com/waywedesign/">
                          <i className="fab fa-instagram" />
                        </Link>
                       
                        <Link href="https://www.linkedin.com/company/13701254/">
                          <i className="fab fa-linkedin" />
                        </Link>
                        <Link href="https://www.behance.net/waywedesign">
                          <i className="fab fa-behance" />
                        </Link>
                        <Link href="https://twitter.com/waywedesign">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="https://www.facebook.com/contact.waywedesign/">
                          <i className="fab fa-facebook" />
                        </Link>
                        <Link href="https://in.pinterest.com/WayWeDesign/">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                       
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
    </div>
  )
}

export default Footer