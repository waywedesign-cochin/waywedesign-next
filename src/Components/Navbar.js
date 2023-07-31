import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import logo from '../../images/logo-wwd.png'
import  Link  from 'next/link';
const Menu = () => {
  return (
    <div className="full_width_nav">
      <header className="main-header clearfix">
        <div className="main-header__top clearfix">
          <div className="main-header__top-inner clearfix">
            <div className="main-header__top-left">
              <ul className="list-unstyled main-header__top-address">
                <li>
                  <div className="icon">
                    <span className="icon-pin" />
                  </div>
                  <div className="text">
                      <Link  href="https://goo.gl/maps/ag2TbuBVZkZ3oT9s5" target="blank">
                    <p>Way WeDesign, India</p>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="icon-email" />
                  </div>
                  <div className="text">
                    <p>
                      <Link href="mailto:contact@waywedesign.com">
                        contact@waywedesign.com
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header__top-right">
              {/* <div className="main-header__top-right-text">
          <p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
        </div> */}
              <div className="main-header__top-right-social">
                <Link target={"_blank"} href="https://wa.me/+917994643673">
                  <i className="fab fa-whatsapp" />
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.instagram.com/waywedesign/"
                >
                  <i className="fab fa-instagram" />
                </Link>

                <Link
                  target={"_blank"}
                  href="https://www.linkedin.com/company/13701254/"
                >
                  <i className="fab fa-linkedin" />
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.behance.net/waywedesign"
                >
                  <i className="fab fa-behance" />
                </Link>
                <Link target={"_blank"} href="https://twitter.com/waywedesign">
                  <i className="fab fa-twitter" />
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.facebook.com/contact.waywedesign/"
                >
                  <i className="fab fa-facebook" />
                </Link>
                <Link href="https://in.pinterest.com/WayWeDesign/">
                          <i className="fab fa-pinterest-p" />
                        </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar className="main-menu clearfix">
        <div className="main-menu-wrapper__logo">
                  <Navbar.Brand>
                    <Link href="/">
                      <img width="170px" src="https://waywedesign.com/static/media/logo-wwd.4e2615278b2f75eca268.png" alt="logo" />
                    </Link>
                  </Navbar.Brand>
                </div>
          <div className="main-menu-wrapper clearfix">
            
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
              
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <ul className="main-menu__list">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>

                      <li className="dropdown">
                        <Link href=""> Our Services</Link>
                        <ul>
                          <li className="dropdown">
                            <Link href="/software-development-platform">
                              Software & Platform
                            </Link>
                            <ul>
                              <li>
                                <Link href="/mobile-app-development">
                                  Mobile App Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/retail-and-ecommerce">
                                  Retail And Ecommerce
                                </Link>
                              </li>
                              <li>
                                <Link href="/iot-development">
                                  IOT Development
                                </Link>
                              </li>
                              <li>
                                <Link href="/payroll-management-softwares">
                                  Payroll Management Softwares
                                </Link>
                              </li>
                              <li>
                                <Link href="/erp-crm-solution">
                                  ERP & CRM Solutions{" "}
                                </Link>
                              </li>

                              <li>
                                <Link href="/assessment-platforms">
                                  Assessment Platforms
                                </Link>
                              </li>
                              <li>
                                <Link href="/dashboard-reporting">
                                  Dashboard Reporting
                                </Link>
                              </li>
                              <li>
                                <Link href="/data-labeling">
                                  Data Labelling & Classification
                                </Link>
                              </li>
                              <li>
                                <Link href="/pen-testing">
                                  Pen Testing
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown">
                            <Link href="/digital-marketing">
                              Digital Marketing
                            </Link>
                            <ul>
                              <li>
                                <Link href="/search-engine-optimization">
                                  Search Engine Optimization (SEO)
                                </Link>
                              </li>
                              <li>
                                <Link href="/social-media-marketing">
                                  Social Media Marketing(SMM)
                                </Link>
                              </li>
                              <li>
                                <Link href="/google-ads">
                                  Google Ads
                                </Link>
                              </li>
                              <li>
                                <Link href="/email-marketing">
                                  Email Marketing
                                </Link>
                              </li>

                              <li>
                                <Link href="/graphic-designing">
                                  Digital Branding
                                </Link>
                              </li>
                              <li>
                                <Link href="/video-production">
                                  Video Production
                                </Link>
                              </li>
                              <li>
                                <Link href="/content-marketing">
                                  Content Marketing
                                </Link>
                              </li>
                              {/* <li>
                                <Link href="/digital-marketing/logo-design">
                                  Logo Design
                                </Link>
                              </li>
                              <li>
                                <Link href="/digital-marketing/brochure-design">
                                  Brochure Design
                                </Link>
                              </li> */}
                            </ul>
                          </li>
                          <li>
                            <Link href="/web-development ">Web Development </Link>
                          </li>
                          <li>
                            <Link href="/cloud-service ">Cloud Service </Link>
                          </li>
                          <li className="dropdown">
                            <Link href="/hrm">HRM</Link>
                            <ul>
                              <li>
                                <Link href="/professional-staffing">
                                  Professional Staffing
                                </Link>
                              </li>
                              <li>
                                <Link href="/outsourcing">Outsourcing</Link>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="dropdown">
                            <Link href="">Web Design & Development</Link>
                            <ul>
                              <li>
                                <Link href="/website-design">
                                Website  Design
                                </Link>
                              </li>
                              <li>
                                <Link href="/website-development">
                                Website Development
                                </Link>
                              </li>
                              </ul>
                          </li>
                          */}
                          <li>
                            <Link href="/ui-ux-design">UI/UX Design </Link>
                          </li>

                          <li>
                            <Link href="/digital-marketing-academy">
                              Digital Academy
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/industries">Industries</Link>
                      </li>
                      <li>
                        <Link href="/careers">Careers</Link>
                      </li>

                      <li>
                        <Link href="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <button className="btn btn-primary"><Link className="getquotelink" href="/contact">Get  Quote</Link></button>
                      </li>
                      {/* <li style={{border:"1px solid blue",backgroundColor:"blue",height:'80px'}}>
                        <Link href="/contact">Get A Quote</Link>
                      </li> */}
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </div>
              {/* <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <img src="assets/images/shapes/phone-icon.png" alt />
              </div>
              <div className="main-menu-wrapper__call-number">
                <p>Have any questions?</p>
                <h5>
                  <Link href="tel:926668880000">Free: + 92 666 888 0000</Link>
                </h5>
              </div>
            </div>
            <div className="main-menu-wrapper__search-box-cart-box">
              <Link
                href="#"
                className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
              />

              <Link
                href="contact.html"
                className="main-menu-wrapper__cart icon-avatar"
              />
            </div>
          </div> */}
            </div>
          </div>
        </Navbar>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content" />
        {/* /.sticky-header__content */}
      </div>
      {/* /.stricky-header */}

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="index.html" aria-label="logo image">
              <img
                src="assets/images/resources/footer-logo.png"
                width={155}
                alt="footer-logo"
              />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <Link href="mailto:needhelp@packageName__.com">
                needhelp@izeetak.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <Link href="tel:666-888-0000">666 888 0000</Link>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" className="fab fa-twitter" />
              <Link href="#" className="fab fa-facebook-square" />
              <Link href="#" className="fab fa-pinterest-p" />
              <Link href="#" className="fab fa-instagram" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      <Link href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </Link>
    </div>
  );
};

export default Menu;