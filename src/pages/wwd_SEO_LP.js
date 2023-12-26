import React, { useRef, useState,useEffect } from "react";
import Footer from "@/Components/Footer";
import MobileMenu from "@/Components/MobileMenu";
import Menu from "@/Components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import seoAudit from "../styles/includes/icon 1.png";
import seoKeyword from "../styles/includes/2.png";
import seoOptimisation from "../styles/includes/3.png";
import contentStrategy from "../styles/includes/4.png";
import linkBuilding from "../styles/includes/5.png";
import report from "../styles/includes/6.png";
import software from '../styles/includes/D1.png'
import digitalMarketing from '../styles/includes/D2.png'
import cloudService from '../styles/includes/D3.png'
import UIUXDesign from '../styles/includes/D4.png'
import academy from '../styles/includes/D5.png'
import HRM from '../styles/includes/D5 (1).png'
import freeConsultation from '../styles/includes/free consultation.png'
import planOfAction from '../styles/includes/plan of action.png'
import kickStart from '../styles/includes/kickstart.png'
import aboutUs from '../styles/includes/about-02.png'
// import christmas from '../styles/includes/christmasimg.png'
import chris from '../styles/includes/christmasimg.png'
import Slider from "react-slick";
import emailjs from '@emailjs/browser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSlider from "@/Components/Home/AboutSlider";
import Link from 'next/link';
const wwd_SEO_LP = () => {
  const form = useRef();
  const sendEmail = ( e ) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sjigqr3",
        "contact_waywedesign",
        form.current,
        "uZZ825vdRXTX6_btT"
      )
      .then(
        ( result ) => {
          form.current.reset();

          document.querySelector( ".result" ).innerHTML =
            "Message sent successfully!"; // shows success message
          setTimeout( () => {
            document.querySelector( ".result" ).style.display = "none"; // hides success message after 2 seconds
          }, 3000 );
        },
        ( error ) => {
          document.querySelector( ".result" ).innerHTML =
            "Failed to send message. Please try again."; // shows error message
        }
      );
  };
  const [ showPopUp, setShowPopUp ] = useState( true );
  const [ isVisible, setIsVisible ] = useState( false );
  function openForm() {
    setIsVisible( true )
  }

  function closeForm() {
    setIsVisible( false );
  }
  const handleInputFocus = ( e ) => {
    e.target.parentElement.classList.add( 'input-filled' );
  };

  const handleInputBlur = ( e ) => {
    if ( e.target.value === '' ) {
      e.target.parentElement.classList.remove( 'input-filled' );
    }
  };
  const handleInputChange = ( e ) => {
    setFullName( e.target.value );
  };

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Define a threshold value based on your requirements
      const threshold = 100;

      // Check if the scroll position is greater than the threshold
      if (scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Head>
        <title>
          { " " }
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
      <div>
      <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo-container1">
            <Image
                src={chris}
                alt='Image 1'
                width={125}
              />
            
        </div>
        {/* <nav>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#strategy">Our Strategies</a></li>
              <li><a href="#solution">Our Solutions</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav> */}
           <nav>
      <ul>
        <li><Link href="#">Home</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#strategy">Our Strategies</Link></li>
        <li><Link href="#solution">Our Solutions</Link></li>
        <li><Link href="#contact">Contact Us</Link></li>
      </ul>
    </nav>
          {isScrolled ? <button className="seoaudit seoauditButton" onClick={()=>openForm()}>Free SEO Audit</button>
        : <div className="seoaudit seoauditButton" /> 
        }
    </header>
        <section
          className='hero1'
          id='home'>
          <div className='container1 left'>
            <div className='carousel1-hero1-container1'>
              <Slider
                slidesToShow={ 1 }
                slidesToScroll={ 1 }
                autoplay={ true }
                autoplaySpeed={ 2000 }
                dots={ false }
                arrows={ false }>
                <div>
                  <h2>
                    { " " }
                    SEO Strategies Experience Higher Level of Website Traffic{ " " }
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
              </Slider>{ " " }
            </div>
          </div>
          
          <div className='container1 right formContainer'>
          <form
                method="post"
                 ref={form} 
                 onSubmit={sendEmail}
                  className="comment-one__form contact-form-validated"
                  >
            <h5>Schedule a Consultation</h5>
            <div className='contact-hero1-form'>
              <div className='input-group'>
                <input
                  type='text'
                  id='fullName'
                  className="mt-2"
                  required
                />
                <label
                  for=''
                  className='ms-2 text-white'>
                  <i className='fa-solid fa-user'></i> Name
                </label>
              </div>
              <div className='input-group'>
                <input
                  id='email_id'
                  className="mt-2"
                  required
                />
                <label
                  for=''
                  className='ms-2 text-white'>
                  <i className='fa-solid fa-envelope'></i> Email
                </label>
              </div>
              <div className='input-group'>
                <input
                  type='tel'
                  id='phone'
                  className="mt-2"
                  required></input>
                <label
                  for=''
                  className='ms-2 text-white'>
                  <i className='fa-solid fa-mobile'></i> Number
                </label>
              </div>
              <div className='input-group'>
                <input
                  type='text'
                  id='Companyname'
                  className="mt-2"
                  required
                />
                <label
                  for=''
                  className='ms-2 text-white'>
                  <i className='fa-solid fa-building'></i> Company
                </label>
              </div>
              <button type="submit" className="p-0">
                <i className='fa-solid fa-paper-plane'></i> Submit
              </button>
            </div>
            </form>
          </div>
      
        </section>
        <section className="about-section entrance-animation visible" id="about">
        <div className="about-container1">
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    At Way WeDesign, with a rich history spanning over 5 years, we've solidified our position as a leading IT/ITES provider, serving clients worldwide.  We're not just about services; we're passionate about driving business innovation through the power of digital marketing.
Our dynamic team is at the forefront of technology, staying abreast of the latest digital marketing trends and advancements. We're dedicated to offering our clients the most effective and up-to-date strategies to boost their online presence and drive results.
Equipped with state-of-the-art facilities and technologies, we're committed to providing innovative digital marketing solutions that propel your business forward. Customer satisfaction is at the core of our approach, and we understand the importance of building strong digital relationships.
Join Way WeDesign on the journey to elevate your digital presence. We're not just a service provider; we're your partners in navigating the ever-evolving landscape of digital marketing, ensuring your success in the digital realm.

                </p>
            </div>
            <div className="about-image">
                {/* <img src="includes/about-02.png" alt="About Us Image"/> */}
                <Image
                src={ aboutUs }
                alt='Image 1'
              />
            </div>
        </div>
    </section>
        <section
          className='seo-section entrance-animation'
          id='strategy'>
          <h2>SEO STRATEGIES, BUILT WITH YOU IN MIND</h2>
          <div className='seo-container1'>
            <div className='seo-box'>
              <Image
                src={ seoAudit }
                alt='Image 1'
              />
              {/* <img src="includes/icon 1.png" alt="Image 1"/> */ }
              <h3>Technical SEO Audit</h3>
              <p>
                We use Ahrefs and Screaming Frog to analyze your website,
                checking for SEO compliance. Our specialists assess site
                elements like architecture, usability, speed, content, links,
                Google Search Console, XML sitemap, and more. This ensures
                search engine accessibility and identifies visibility obstacles.
              </p>
              <button
                className='open-button'
                onClick={ () => openForm() }>
                Get Free Proposal
              </button>
            </div>
            <div className='seo-box'>
              <Image
                src={ seoKeyword }
                alt='Image 2'
              />
              {/* <img src="includes/2.png" alt="Image 2"/> */ }
              <h3>SEO Keyword Search</h3>
              <p>
                { " " }
                Our SEO strategists use tools like SEMRush, industry insights,
                and competitive analysis to find high-search-volume keywords
                relevant to your business. Through this research, content gaps
                are identified, forming the basis for a content strategy. This
                approach aims to enhance search visibility through content
                optimization.
              </p>
              <button
                className='open-button'
                id='seobutton'
                onClick={ () => openForm() }>
                Get Free Proposal
              </button>
            </div>
            <div className='seo-box'>
              <Image
                src={ seoOptimisation }
                alt='Image 3'
              />
              {/* <img src="includes/3.png" alt="Image 3"/> */ }
              <h3>On-page SEO Optimization</h3>
              <p>
                Our SEO experts will map your relevant business keywords and
                optimise your web pages with custom-written keyword-rich Title
                Tags, Meta Descriptions, Header Tags, and image optimisation
                while keeping Google's ranking factors in mind to improve search
                visibility and traffic.
              </p>
              <button
                className='open-button'
                id='seobutton'
                onClick={ () => openForm() }>
                Get Free Proposal
              </button>
            </div>
            <div className='seo-box'>
              <Image
                src={ contentStrategy }
                alt='Image 4'
              />
              {/* <img src="includes/4.png" alt="Image 4"/> */ }
              <h3>Content Strategy</h3>
              <p>
                Our SEO content strategy starts with audience analysis and
                thorough keyword research. We craft a content plan aligned with
                real user needs. Our writing team collaborates with you to
                create and optimize website content, enhancing traffic and
                boosting domain authority.
              </p>
              <button
                className='open-button'
                id='seobutton'
                onClick={ () => openForm() }>
                Get Free Proposal
              </button>
            </div>
            <div className='seo-box'>
              <Image
                src={ linkBuilding }
                alt='Image 1'
              />
              {/* <img src="includes/5.png" alt="Image 5"/> */ }
              <h3>Off-page SEO Link Building</h3>
              <p>
                Backlinks are like votes of confidence for Google, indicating
                that your website is reputable and trusted in your niche. Our
                SEO link-building team understands what it takes to boost your
                website's credibility and visibility, which includes exploiting
                our owned and operated 130 high domain authority sites to get
                you on Google's first page.
              </p>
              <button
                className='open-button'
                id='seobutton'
                onClick={ () => openForm() }>
                Get Free Proposal
              </button>
            </div>
            <div className='seo-box'>
              <Image
                src={ report }
                alt='Image 1'
              />
              {/* <img src="includes/6.png" alt="Image 6"/> */ }
              <h3>Consulting & Monthly Reporting</h3>
              <p>
                Our SEO account manager will not simply set it and forget it.
                Your company's needs and industry evolve, and Google does as
                well, with over 500 algorithm updates per year! To ensure
                data-driven decision-making, your SEO account manager will
                provide real-time reports as well as monthly SEO results and
                analysis.
              </p>
              <button
                className='open-button'
                id='seobutton'
                onClick={ () => openForm() }>
                Get Free Proposal
              </button>
            </div>
          </div>
        </section>
        <section className="cta-section entrance-animation visible">
          <div className="cta-content">
            <h2>READY TO GROW YOUR BUSINESS?</h2>
            <h4>Connect with our digital marketing expert<br /> to boost your business and join the best agency.</h4>
            <div className="cta-buttons">
              <a href="tel:+917994643673" className="cta-button">Call - 799 464 3673</a>
              <button className="open-button" onClick={ () => setIsVisible( true ) }>Get Free Proposal</button>
            </div>
          </div>
        </section>
        <section className="background-section entrance-animation visible" id="solution">
    <h2>DISCOVER THE RIGHT SOLUTIONS FOR YOUR BUSINESS</h2>
    <div className="background-container1">
        <div className="box">
            <Image
                src={ software }
                alt='Image 1'
              />
             <h3> Software & Platform Development</h3>
            <p>Unlock the full potential of your business with customized software development solutions tailored to your unique needs and requirements</p>
        </div>
        <div className="box">
            
            <h3>
            <Image
                src={ digitalMarketing }
                alt='Image 2'
              />
            Digital Marketing</h3>
            <p>Boost your online presence and reach your target audience through our comprehensive digital marketing services.</p>
        </div>
        <div className="box">
            
            <h3>
            <Image
                src={ cloudService }
                alt='Image 1'
              />
            Cloud Service</h3>
            <p>Explore our comprehensive range of cloud services offering secure data storage, scalable computing power, and seamless application deployment</p>
        </div>
        <div className="box">
            
            <h3>
            <Image
                src={ UIUXDesign }
                alt='Image 1'
              />
            UI UX Design</h3>
            <p>Unlock the potential of your digital products with our bespoke UI/UX design services, ensuring optimal user engagement and brand loyalty</p>
        </div>
        <div className="box">
            
            <h3>
            <Image
                src={ HRM }
                alt='Image 1'
              />
            HRM</h3>
            <p>Discover our comprehensive HRM services, providing strategic talent management solutions to optimize your workforce and drive business success</p>
        </div>
        <div className="box">
            
            <h3>
            <Image
                src={ academy }
                alt='Image 1'
              />
            Digital Marketing Acacademy</h3>
            <p>Discover the secrets of successful digital marketing at our academy and gain the skills to thrive in the online world</p>
        </div>
    </div>
      </section>
      <section className="feature-section entrance-animation visible">
    <div className="feature-container">
        <h2 className="feature-h2">Our SEO  Process</h2>
        <h3 className="feature-h3">We follow a well-defined, systematic process to work with our clients.</h3>
        <div className="feature-row">
            <div className="feature-column">
                {/* <img src="includes/free consultation.png" alt="Feature 1 Icon"/> */}
                <Image
                src={ freeConsultation }
                alt='Image 1'
              />
                <h4>Book A Free Consultation</h4>
                <p>We will learn about your business, problems, objectives and your expectations</p>
            </div>
            <div className="feature-column">
                {/* <img src="includes/plan of action.png" alt="Feature 2 Icon"/> */}
                <Image
                src={ planOfAction }
                alt='Image 1'
              />
                <h4>Review The Plan of Action</h4>
                <p>We will walk you through the plan of action that will help you to achieve your goals.</p>
            </div>
            <div className="feature-column">
                {/* <img src="includes/kickstart.png" alt="Feature 3 Icon"/> */}
                <Image
                src={ kickStart }
                alt='Image 1'
              />
                <h4>Kick Start</h4>
                <p>While you focus on your business, we will kick start the marketing campaigns to grow your business online.</p>
            </div>
        </div>
    </div>
</section>
        <form
                method="post"
                 ref={form} 
                 onSubmit={sendEmail}
                  className="comment-one__form contact-form-validated"
                 
                  >
        <div
          // className='form-popup'
          className={ isVisible === true ? 'form-popup visible' : 'form-popup hidden' }
          id='myForm'>
          <div className='form-container1'>
            <div className='input-group'>
              <input
                type='text'
                id='fullName'
                className="mt-2"
                required
              />
              <label for=''>
                <i className='fa-solid fa-user'></i> Name
              </label>
            </div>
            <div className='input-group'>
              <input
                id='email_id'
                className="mt-2"
                required
              />
              <label for=''>
                <i className='fa-solid fa-envelope'></i>Email
              </label>
            </div>
            <div className='input-group'>
              <input
                type='tel'
                id='phone'
                className="mt-2"
                required></input>
              <label for=''>
                <i className='fa-solid fa-mobile'></i> Number
              </label>
            </div>
            <div className='input-group'>
              <input
                type='text'
                id='Companyname'
                className="mt-2"
                required
              />
              <label for=''>
                <i className='fa-solid fa-building'></i> Company
              </label>
            </div>
            <button type="submit">
              <i className='fa-solid fa-paper-plane'></i> Submit
            </button>
            <button
              type='button'
              className='btn cancel'
              onClick={()=>closeForm()}>
              <i className='fa-solid fa-circle-xmark'></i>&nbsp; Close
            </button>
          </div>
        </div></form>
        <form
                method="post"
                 ref={form} 
                 onSubmit={sendEmail}
                  className="comment-one__form contact-form-validated"
                 
                  >
        <div className={ `login-popup ${showPopUp ? 'show' : ''}` }>
          <div className='box'>
            {/* <img
              src='includes/christmas (1).png'
              alt=''
            /> */}
               <Image
                src={ christmas }
                alt='Image 1'
                className="logoBox"
              />
            <div className='form'>
              <h2>Schedule a Consultation</h2>
              <div className='close'><a onClick={ () => setShowPopUp( false ) }>&times;</a></div>
              <div className='form-popup-container1'>
                <div className='input-group'>
                  <input
                    type='text'
                    id='fullName'
                    className="mt-2"
                    required
                  />
                  <label for=''>
                    <i className='fa-solid fa-user'></i> Name
                  </label>
                </div>
                <div className='input-group'>
                  <input
                    id='email_id'
                    className="mt-2"
                    required
                  />
                  <label for=''>
                    <i className='fa-solid fa-envelope'></i> Email
                  </label>
                </div>
                <div className='input-group'>
                  <input
                    type='tel'
                    id='phone'
                    className="mt-2"
                    required></input>
                  <label for=''>
                    <i className='fa-solid fa-mobile'></i>Number
                  </label>
                </div>
                <div className='input-group'>
                  <input
                    type='text'
                    id='Companyname'
                    className="mt-2"
                    required
                  />
                  <label for=''>
                    <i className='fa-solid fa-building'></i> Company
                  </label>
                </div>
                <button type="submit">
                  <i className='fa-solid fa-paper-plane'></i> Submit
                </button>
              </div>
            </div>
          </div>
        </div></form>
        
      </div>
      <div className="result" />
      <Footer />
    </>
  );
};

export default wwd_SEO_LP;
