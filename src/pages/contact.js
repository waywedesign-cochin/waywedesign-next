import React, { useRef }  from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Footer from "@/Components/Footer";
import Menu from "@/Components/Navbar";
import  MobileMenu  from '@/Components/MobileMenu';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_sjigqr3', 'contact_waywedesign', form.current, 'uZZ825vdRXTX6_btT')
      .then((result) => {
          form.current.reset(); 
          
          document.querySelector(".result").innerHTML = "Message sent successfully!"; // shows success message
          setTimeout(() => {
            document.querySelector(".result").style.display = "none"; // hides success message after 2 seconds
          }, 3000);

      }, (error) => {
               document.querySelector(".result").innerHTML = "Failed to send message. Please try again."; // shows error message

      });
  };
  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Way WeDesign | Kochi | Cochin, Kerala </title>
        <meta name="description" content="Looking for  the best IT /ITES and digital marketing services for your business. Way WeDesign with five plus years of experience in this field." />
         <meta   name="robots" content="index, follow" />
  <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link   rel="canonical" href="https://waywedesign.com/conatct" />
  <meta   property="og:locale" content="en_US" />
  <meta   property="og:type" content="website" />
  <meta   property="og:title" content="Way WeDesign | Kochi | Cochin, Kerala" />
  <meta   property="og:description" content="Looking for  the best IT /ITES and digital marketing services for your business. Way WeDesign with five plus years of experience in this field." />
  <meta   property="og:url" content="https://waywedesign.com/contact" />
  <meta   property="og:site_name" content="WayWeDesign" />
  <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
  <meta   property="article:modified_time" content="2023-06-05T08:16:17+00:00" />
  <meta   name="twitter:card" content="summary_large_image" />
  <meta   name="twitter:creator" content="@waywedesign" />
  <meta   name="twitter:site" content="@waywedesign" />
      </Head>
      <Menu/>
      <MobileMenu />

      <Breadcrumbs pageurl="contact" subtitle="Contact" />
      {/*Page Header End*/}
      {/*Contact Page Start*/}
      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-page__left">
                <div className="section-title text-left">
                  <h1 className="section-title__tagline">
                    Contact with us
                  </h1>
                  <h2 className="section-title__title">Write A Message </h2>
                </div>
                <p className="contact-page__text">
                 
                </p>
                <div className="contact-page__social-list">
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
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="contact-page__right">
                <form
                method="post"
                 ref={form} 
                 onSubmit={sendEmail}
                  className="comment-one__form contact-form-validated"
                 
                  
                >
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          defaultValue={""}
                        />
                      </div>
                      <button 
                        type="submit"
                       value="Send"
                       
                        className="thm-btn comment-form__btn"
                      >
                        Send a message
                      </button>
                    </div>
                  </div>
                </form>
                <div className="result" />
                {/* /.result */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Page End*/}
      {/*Contact Details End*/}
      <section className="contact-details">
        <div className="container">
          <div className="contact-details__inner">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single">
                  <div className="contact-details__icon">
                    <span className="icon-map" />
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">Office</p>
                    <h5>
                      Way WeDesign, <br/>47/1403A,Ivees, MRERA-69,<br/> Chalikkavattom,
                      Vennala Kochi, Kerala 682028
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single contact-details__single-2">
                  <div className="contact-details__icon">
                    <span className="icon-email-1" />
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">Send Email</p>
                    <h4>
                      <a href="mailto:contact@waywedesign.com">
                        contact@waywedesign.com
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single contact-details__single-3">
                  <div className="contact-details__icon">
                    <span className="icon-phone-call" />
                  </div>
                  <div className="contact-details__content">
                    <p className="contact-details__sub-title">Call Anytime</p>
                    <h4>
                      <a href="tel:+917994643673">+91 799 464 3673</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Contact Details End*/}
      {/*Google Map Start*/}
      <section className="contact-page-google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.423815993187!2d76.322371!3d9.987427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cd992f5c453%3A0xf75cea890ae3e948!2sWay%20WeDesign!5e0!3m2!1sen!2sin!4v1678778115835!5m2!1sen!2sin"
          className="contact-page-google-map__one"
          allowFullScreen
        />
      </section>
      {/*Google Map End*/}
      <Footer/>
    </motion.div>
  );
};

export default Contact;
