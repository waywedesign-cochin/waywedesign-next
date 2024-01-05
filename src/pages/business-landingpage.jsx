import React, { useRef, useState, useEffect } from 'react'
import Footer from '@/Components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '@/styles/landing/logoround.png'
import { Button } from 'react-bootstrap';
import ssl from '@/styles/landing/ssl.png'
import eybi from '@/styles/landing/eybi.png'
import bcwo from '@/styles/landing/bcwo.png'
import visuals from '@/styles/landing/visuals.png'
import cta from '@/styles/landing/call to action.png'
import advancedform from '@/styles/landing/advanced form design.png'
import design from '@/styles/landing/responsive design.png'
import graphics from '@/styles/landing/graphics.png'
import emailjs from '@emailjs/browser';


export const business_landingpage = () => {
  const form = useRef();
  const form2 = useRef();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [email, setlpEmail] = useState("")
  const [phoneNumber, setlpPhoneNumber] = useState("")
  const [name, setlpName] = useState("")
  const [company, setlpCompany] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)
  const handlelpEmailChange = (e) => {
    e.preventDefault()
    setIsValidEmail(emailRegex.test(e.target.value));
    setlpEmail(e.target.value)
  }

  const handlelpPhoneChange = (e) => {
    e.preventDefault()
    setlpPhoneNumber(e.target.value)
  }
  const handlelpNameChange = (e) => {
    e.preventDefault()
    setlpName(e.target.value)
  }

  const handlelpCompanyChange = (e) => {
    e.preventDefault()
    setlpCompany(e.target.value)
  }
  const resetlpForm = () => {
    setlpCompany(e.target.value);
    setlpPhoneNumber(e.target.value);
    setlpEmail(e.target.value);
    setlpName(e.target.value);

  }
  const [showPopUp, setlpShowPopUp] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [isVisible, setlpIsVisible] = useState(false);
  function openlpForm() {
    setlpIsVisible(true)
  }

  function closelpForm() {
    setlpIsVisible(false);
  }
  const [isScrolled, setlpIsScrolled] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    console.log('1234 landingPage', email, isValidEmail)
    emailjs
      .sendForm(
        "service_wccf4ri",
        "template_earca72",
        form.current,
        "G79luOLoWDIpanYzY"
      )
      .then(
        (result) => {
          form.current.reset();
          setShowResult(true);
          document.querySelector(".result").style.display = "block";
          document.querySelector(".result").innerHTML =
            "Message sent successfully!"; // shows success message
          setTimeout(() => {
            setShowResult(false);
            document.querySelector(".result").style.display = "none"; // hides success message after 2 seconds
          }, 3000);
        },
        (error) => {
          setShowResult(false);
          document.querySelector(".result").style.display = "block";
          document.querySelector(".result").innerHTML =
            "Failed to send message. Please try again."; // shows error message
        }
      );
  };
  const sendEmail2 = (e) => {
    e.preventDefault();
    console.log('1234 landingPage', form2.current)
    emailjs
      .sendForm(
        "service_wccf4ri",
        "template_earca72",
        form2.current,
        "G79luOLoWDIpanYzY"
      )
      .then(
        (result) => {
          form2.current.reset();
          setShowResult(true);
          document.querySelector(".result").innerHTML =
            "Message sent successfully!"; // shows success message
          setTimeout(() => {
            setShowResult(false);
            document.querySelector(".result").style.display = "none"; // hides success message after 2 seconds
          }, 3000);
        },
        (error) => {
          setShowResult(false);
          document.querySelector(".result").innerHTML =
            "Failed to send message. Please try again."; // shows error message
        }
      );
  };

  useEffect(() => {
    const handlelpScroll = () => {
      const scrollY = window.scrollY;

      // Define a threshold value based on your requirements
      const threshold = 100;

      // Check if the scroll position is greater than the threshold
      if (scrollY > threshold) {
        setlpIsScrolled(true);
      } else {
        setlpIsScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handlelpScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handlelpScroll);
    };
  }, []);


  return (
    <>
    <Head>
        <title>
          {" "}
          Best SEO Company in Kochi, Kerala | Rank No 1 | SEO Services
        </title>
        <meta
          name='description'
          content='SEO Company - Top SEO company in Kochi, providing reliable Digital Marketing & SEO services across India. Speak with our expert for a free consultation'
        />

        <meta
          name='robots'
          content='index, follow'
        />
        <meta
          name='googlebot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <meta
          name='bingbot'
          content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />

        <link
          rel='canonical'
          href='https://waywedesign.com/seo-company-in-kochi'
        />

        <meta
          property='og:locale'
          content='en_US'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:title'
          content=' Best SEO Company in Kochi, Kerala | Rank No 1 | SEO Services'
        />
        <meta
          property='og:description'
          content='SEO Company - Top SEO company in Kochi, providing reliable Digital Marketing & SEO services across India. Speak with our expert for a free consultation'
        />
        <meta
          property='og:url'
          content='https://waywedesign.com/seo-company-in-kochi'
        />
        <meta
          property='og:image'
          content='https://waywedesign.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Fseo-second.9b73ab38.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fseo-second.9b73ab38.jpg&w=3840&q=75'
        />
        <meta
          property='og:image:width'
          content='1024'
        />
        <meta
          property='og:image:height'
          content='1024'
        />
        <meta
          property='og:image:alt'
          content='Best SEO Company in Kochi'
        />
        <meta
          property='og:image:type'
          content='image/png'
        />
        <meta
          property='og:site_name'
          content='WayWeDesign'
        />

        <meta
          property='article:publisher'
          content='https://www.facebook.com/waywedesign'
        />
        <meta
          property='article:modified_time'
          content='2023-06-05T08:16:17+00:00'
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:creator'
          content='@waywedesign'
        />
        <meta
          name='twitter:site'
          content='@waywedesign'
        />
      </Head>

      <header className={`lp-sticky-header ${isScrolled ? 'scrolled' : ''}`}>
          <div className="lp-logo-container1">
            <Image
              src={logo}
              alt='logo'
              width={125}
            />

          </div>
          <nav className="lp-nav-menu">
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#strategy">Our Strategies</Link></li>
              <li><Link href="#solution">Our Solutions</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </nav>
          {isScrolled ? <button className="lp-header-btn" onClick={() => openlpForm()}>Create Your Landing Page</button>
            : <div className="lp-header-btn" />
          }
        </header>
        <section
          className='lp-hero1'
          id='home'>
          <div className='lp-container1 left'>
            <div className='lp-carousel1-hero1-container1'>
              <Slider
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={2000}
                dots={false}
                arrows={false}>
                <div>
                  <h2>
                    SEO Strategies Experience Higher Level of Website Traffic
                  </h2>
                  <h3>
                    Implementing SEO Strategies for Sustainable Business Growth
                  </h3>
                </div>
                <div>
                  <h2> Strategic SEO Solutions for Measurable Success</h2>
                  <h3>Improve your rankings and increase sales</h3>
                </div>
                <div>
                  <h2> Connections and interactions with your audience</h2>
                  <h3>
                    Brand recognition and visibility through targeted marketing
                  </h3>
                </div>
              </Slider>
            </div>
          </div>
          {/* first form */}
          <div className='lp-container1 lp-right lp-formContainer'>
            <div className='lp-form'>
              <h5>Schedule a Consultation</h5>
              <form
                method="post"
                ref={form}
                onSubmit={sendEmail}
                className="lp-comment-one__form lp-contact-form-validated"
              >
                <div className='lp-contact-hero1-form'>
                  <div className='lp-input-group'>
                    <input

                      id='fullName'
                      className="mt-2"
                      name="name"
                      value={name}
                      onChange={handlelpNameChange}
                      required
                    />
                    <label for=''>
                      <i className='fa-solid fa-user'></i> Name
                    </label>
                  </div>
                  <div className='lp-input-group'>
                    <input
                      id='email_id'
                      className="mt-2"
                      required
                      minLength={10}
                      value={email}
                      name="email"
                      onChange={handlelpEmailChange}

                    />
                    <label
                      for=''
                      className='ms-2 text-white'>
                      <i className='fa-solid fa-envelope'></i> Email
                    </label>
                  </div>
                  <div className='lp-input-group'>
                    <input
                      type='tel'
                      id='phone'
                      className="mt-2"
                      required
                      minLength={10}
                      value={phoneNumber}
                      name="phone"
                      onChange={handlelpPhoneChange}
                    >
                    </input>
                    <label
                      for=''
                      className='ms-2 text-white'>
                      <i className='fa-solid fa-mobile'></i> Number
                    </label>
                  </div>
                  <div className='lp-input-group'>
                    <input

                      id='Companyname'
                      className="mt-2"
                      name="company"
                      value={company}
                      onChange={handlelpCompanyChange}
                      required
                    />
                    <label
                      for=''
                      className='ms-2 text-white'>
                      <i className='fa-solid fa-building'></i> Company
                    </label>
                  </div>
                  <button type="submit" className="p-0 lp-submit-btn">
                    <i className='fa-solid fa-paper-plane'></i> Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </section>



    <div>
      <div className='lp-second-section'>
        <div className='second-content'>
          <h4>
            Kickstart Your Campaign With
          </h4>
          <h2>
            Responsive Landing Pages<br /> for Your Business
          </h2>
          <p>
            Unlock the potential of a professionally designed, responsive landing page that speaks volumes about your brand. Choose Way WeDesign for an efficient, visually striking, and results-driven online presence.
          </p>
          <button className='second-cta-btn' onClick={() => openlpForm()}>
            Create Your Landing Page
          </button>
        </div>
      </div>
      <div className='lp-third-section'>
        <div className='lp-third-row'>
          <div className='lp-third-column'>
            <Image src={ssl} width={200} height={200}></Image>
            <h4>Stay Secure with SSL</h4>
          </div>
          <div className='lp-third-column'>
            <Image src={eybi} width={200} height={200}></Image>
            <h4>Enrich your Business leads</h4>
          </div>
          <div className='lp-third-column'>
            <Image src={bcwo} width={200} height={200}></Image>
            <h4>Better Content with optimization</h4>
          </div>
        </div>
      </div>
      <div className='lp-fourth-section'>
        <h2>
        We Create Premium Quality Landing Pages
        </h2>
        <p>
        This is your times to communicate with our expert to grow your business
        </p>
        <div className='lp-fourth-row'>
          <div className='lp-fourth-column'>
          <Image src={visuals} width={200} height={200}></Image>
            <h5>Compelling Visuals</h5>
          </div>
          <div className='lp-fourth-column'>
          <Image src={cta} width={200} height={200}></Image>
            <h5>Clear Call-to-Action</h5>
          </div>
          <div className='lp-fourth-column'>
          <Image src={advancedform} width={200} height={200}></Image>
            <h5>Advanced Form Design</h5>
          </div>
          <div className='lp-fourth-column'>
          <Image src={design} width={200} height={200}></Image>
            <h5>Responsive Design</h5>
          </div>
          <div className='lp-fourth-column'>
          <Image src={graphics} width={200} height={200}></Image>
            <h5>High-Quality Graphics</h5>
          </div>
        </div>
        <div className='fourth-cta-section'>
        <button className='fourth-cta-btn' onClick={() => openlpForm()}>
        Create Your Landing Page
        </button>
        <button className='fourth-cta-btn'>
        Call : 1234567890
        </button>
        </div>
      </div>
      <div className='lp-fifth-section'>
      <h2>
      Why Choose Way WeDesign <span>?</span>
        </h2>
        <div className='lp-fifth-row'>
          <div className='lp-fifth-column'>
            <h5>
            Professional Design
            </h5>
            <p>
            Captivate your audience with visually stunning and modern website designs that reflect the essence of your brand. Our skilled designers ensure a seamless blend of aesthetics and functionality.
            </p>
          </div>
          <div className='lp-fifth-column'>
            <h5>
            Responsive Development
            </h5>
            <p>
            In an era of diverse devices, your website needs to be accessible to everyone, everywhere. We specialize in responsive development, ensuring a flawless experience on desktops, tablets, and smartphones.
            </p>
          </div>
          <div className='lp-fifth-column'>
            <h5>
            Performance Optimization
            </h5>
            <p>
            Speed matters. Our team employs advanced techniques to optimize your website's performance, ensuring quick loading times and a smooth user experience that keeps visitors engaged.
            </p>
          </div>
        </div>
        <div className='lp-fifth-row'>
          <div className='lp-fifth-column'>
            <h5>
            SEO-Friendly
            </h5>
            <p>
            Drive organic traffic to your website with our SEO-friendly designs. We implement best practices to enhance your site's visibility on search engines, helping you reach a wider audience.
            </p>
          </div>
          <div className='lp-fifth-column'>
            <h5>
            Custom Solutions
            </h5>
            <p>
            Every business is unique, and so should be your website. We provide custom web solutions tailored to your specific needs, ensuring your online presence stands out from the competition.
            </p>
          </div>
          <div className='lp-fifth-column'>
            <h5>
            User-Centric Navigation
            </h5>
            <p>
            Your website's success is rooted in user experience. We prioritize intuitive navigation, ensuring visitors effortlessly find what they seek. From clear calls-to-action to user-friendly interfaces, we design with your audience in mind, fostering engagement and conversions.
            </p>
          </div>
        </div>
        <button className='fourth-cta-btn' onClick={() => openlpForm()}>
        Create Your Landing Page
        </button>
      </div>
      <div className='lp-sixth-section'>
        <h2>Our Process</h2>
        <p>We follow a well-defined, systematic process to work with our clients.</p>
        <div className='lp-sixth-row'>
          <div className='lp-sixth-column'>
            <Image src={logo} width={100} height={100}/>
            <div className='lp-sixth-sub-column'>
                <h5>Book A Free Consultation</h5>
                <p>We will learn about your business, problems, objectives and your expectations</p>
            </div>
          </div>
          <div className='lp-sixth-column'>
            <Image src={logo} width={100} height={100}/>
            <div className='lp-sixth-sub-column'>
                <h5>Review The Plan of Action</h5>
                <p>We will walk you through the plan of action that will help you to achieve your goals.</p>
            </div>
          </div>
          <div className='lp-sixth-column'>
            <Image src={logo} width={100} height={100}/>
            <div className='lp-sixth-sub-column'>
                <h5>Kick Start</h5>
                <p>While you focus on your business, we will kick start the marketing campaigns to grow your business online.</p>
            </div>
          </div>
        </div>
      </div>

            <div
            // className='form-popup'
            className={isVisible === true ? 'lp-form-popup visible' : 'lp-form-popup hidden'}
            id='myForm'>
            <div className='lp-form-container1'>
              <div className='lp-input-group'>
                <input
                  type='text'
                  id='fullName'
                  className="mt-2"
                  name="name"
                  required
                />
                <label for=''>
                  <i className='fa-solid fa-user'></i> Name
                </label>
              </div>
              <div className='lp-input-group'>
                <input
                  id='email_id'
                  className="mt-2"
                  required
                  minLength={10}
                  value={email}
                  name="email"
                  onChange={handlelpEmailChange}
                />
                <label for=''>
                  <i className='fa-solid fa-envelope'></i>Email
                </label>
              </div>
              <div className='lp-input-group'>
                <input
                  type='tel'
                  id='phone'
                  className="mt-2"
                  required
                  minLength={10}
                  name="phone"
                  value={phoneNumber}
                  onChange={handlelpPhoneChange}
                ></input>
                <label for=''>
                  <i className='fa-solid fa-mobile'></i> Number
                </label>
              </div>
              <div className='lp-input-group'>
                <input
                  type='text'
                  id='Companyname'
                  name="company"
                  className="mt-2"
                  required
                />
                <label for=''>
                  <i className='fa-solid fa-building'></i> Company
                </label>
              </div>
              <button type="submit" className="p-0 lp-submit-btn">
                <i className='fa-solid fa-paper-plane'></i> Submit
              </button>
              <button
                type='button'
                className='btn lp-cancel'
                onClick={() => closelpForm()}>
                <i className='fa-solid fa-circle-xmark'></i>&nbsp; Close
              </button>
            </div>
          </div>

        <div className={`login-popup ${showPopUp ? 'show' : ''}`}>
          <div className='box'>
            <Image
              src={logo}
              alt='Image 1'
              className="logoBox"
            />
            <div className='form'>
              <h2>Schedule a Consultation</h2>
              <div className='close'><a onClick={() => setlpShowPopUp(false)}>&times;</a></div>
              <form
                method="post"
                ref={form}
                onSubmit={sendEmail}
                className="lp-comment-one__form lp-contact-form-validated"
              >
                <div className='lp-form-popup-container1'>
                  <div className='lp-input-group'>
                    <input
                      type='text'
                      id='fullName'
                      className="mt-2"
                      name="name"
                      required
                    />
                    <label for=''>
                      <i className='fa-solid fa-user'></i> Name
                    </label>
                  </div>
                  <div className='lp-input-group'>
                    <input
                      id='email_id'
                      className="mt-2"
                      required
                      minLength={10}
                      value={email}
                      name="email"
                      onChange={handlelpEmailChange}
                    />
                    <label for=''>
                      <i className='fa-solid fa-envelope'></i> Email
                    </label>
                  </div>
                  <div className='lp-input-group'>
                    <input
                      type='tel'
                      id='phone'
                      className="mt-2"
                      required
                      minLength={10}
                      name="phone"
                      value={phoneNumber}
                      onChange={handlelpPhoneChange}
                    ></input>
                    <label for=''>
                      <i className='fa-solid fa-mobile'></i>Number
                    </label>
                  </div>
                  <div className='lp-input-group'>
                    <input
                      type='text'
                      id='Companyname'
                      className="mt-2"
                      name="company"
                      required
                    />
                    <label for=''>
                      <i className='fa-solid fa-building'></i> Company
                    </label>
                  </div>
                  <button type="submit" className="p-0 lp-submit-btn">
                    <i className='fa-solid fa-paper-plane'></i> Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={`loginResult-popup ${showResult ? 'show' : ''}`}>
          <div className="box1"><div className="result text-white">Message sent successfully</div></div>
        </div>

      <Footer />
    </div>
    </>
  )
}
export default business_landingpage;