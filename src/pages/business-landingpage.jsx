import React, { useRef, useState, useEffect } from 'react'
import Footer from '@/Components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '@/styles/landing/logoround.png'

export const business_landingpage = () => {
    const contact_form = useRef();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [isValidEmail, setIsValidEmail] = useState(false)
    const handleEmailChange = (e) => {
      e.preventDefault()
      setIsValidEmail(emailRegex.test(e.target.value));
      setEmail(e.target.value)
    }
  
    const handlePhoneChange = (e) => {
      e.preventDefault()
      setPhoneNumber(e.target.value)
    }
    const handleNameChange = (e) => {
      e.preventDefault()
      setName(e.target.value)
    }
  
    const handleCompanyChange = (e) => {
      e.preventDefault()
      setCompany(e.target.value)
    }
  const resetForm = () =>{
    setCompany(e.target.value);
    setPhoneNumber(e.target.value);
    setEmail(e.target.value);
    setName(e.target.value);
  
  }
    const [ showPopUp, setShowPopUp ] = useState( true );
    const [ showResult, setShowResult ] = useState( false );
    const [ isVisible, setIsVisible ] = useState( false );
    function openForm() {
      setIsVisible( true )
    }
  
    function closeForm() {
      setIsVisible( false );
    }
    // const [isScrolled, setIsScrolled] = useState(false);
  
  
    const sendEmail = ( e ) => {
      e.preventDefault();
      console.log('1234 landingPage',email,isValidEmail)
      emailjs
        .sendForm(
          "service_wccf4ri",
          "template_earca72",
          form.current,
          "G79luOLoWDIpanYzY"
        )
        .then(
          ( result ) => {
            form.current.reset();
            setShowResult(true);
            document.querySelector(".result").style.display = "block";
            document.querySelector( ".result" ).innerHTML =
              "Message sent successfully!"; // shows success message
            setTimeout( () => {
              setShowResult(false);
              document.querySelector( ".result" ).style.display = "none"; // hides success message after 2 seconds
            }, 3000 );
          },
          ( error ) => {
            setShowResult(false);
            document.querySelector(".result").style.display = "block";
            document.querySelector( ".result" ).innerHTML =
              "Failed to send message. Please try again."; // shows error message
          }
        );
    };


    const [isScrolled, setIsScrolled] = useState(false);


    return (
        <div>
            <Head>
                <title>
                    Customize  High-Quality Landing Pages for Business
                </title>
                <meta
                    name='description'
                    content='Get professional landing pages for your business. Boost your marketing efforts with the Smart Landing Page Builder. Maximize online conversions'
                />
            </Head>
            <div>
                <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
                    <div className="logo-container1">
                        <Image
                            src={logo}
                            alt='logo'
                            width={125}
                        />

                    </div>
                    <nav>
                        <ul>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Our Strategies</Link></li>
                            <li><Link href="#">Our Solutions</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                    </nav>
                    {isScrolled ? <button className="seoaudit seoauditButton" onClick={() => openForm()}>Create Your Landing Page</button>
                        : <div className="seoaudit seoauditButton" />
                    }
                </header>
                <div className='hero-section'>
                    <div className='hero-container-left'>
                        <div className='content-carousel'>
                            <Slider
                                slidesToShow={1}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
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
                    <div className='hero-container-right'>
          <div className='form'>
            <h5>Schedule a Consultation</h5>
            <form
                method="post"
                 ref={contact_form} 
                 onSubmit={sendEmail}
                  className="comment-one__form contact-form-validated"
                  >
            <div className='contact-hero1-form'>
               <div className='input-group'>
                  <input
                   
                    id='fullName'
                    className="mt-2"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
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
                  minLength={10}
                  value={email}
                  name="email"
                  onChange={handleEmailChange}
                  
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
                  required
                  minLength={10}
                  value={phoneNumber}
                  name="phone"
                  onChange={handlePhoneChange}
                  >
                  </input>
                <label
                  for=''
                  className='ms-2 text-white'>
                  <i className='fa-solid fa-mobile'></i> Number
                </label>
              </div>
              <div className='input-group'>
                <input
             
                  id='Companyname'
                  className="mt-2"
                  name="company"
                  value={company}
                  onChange={handleCompanyChange}
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
          </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default business_landingpage;