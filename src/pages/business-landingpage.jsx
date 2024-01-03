import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "@/Components/Footer";
import emailjs from '@emailjs/browser';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import logo from '@/styles/landing/logoround.png'

const business_landingpage = () => {
    const form = useRef();
    const [isScrolled, setIsScrolled] = useState(false);
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
    const resetForm = () => {
        setCompany(e.target.value);
        setPhoneNumber(e.target.value);
        setEmail(e.target.value);
        setName(e.target.value);

    }


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

    return (
        <>
            <Head>
                <title>
                    #
                </title>
                <meta
                    name='description'
                    content='#'
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
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Our Strategies</Link></li>
                            <li><Link href="#">Our Solutions</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                        </ul>
                    </nav>
                    {isScrolled ? <button className="cta" onClick={() => openForm()}>Create Your Landing Page</button>
                        : <div className="cta" />
                    }
                </header>

                <section
                    className='first-section'
                    id='home'>
                    <div className='container1 left'>
                        <div className='carousel1-hero1-container1'>
                            <Slider
                                slidesToShow={1}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={2000}
                                dots={false}
                                arrows={false}>
                                <div>
                                    <h2>
                                        Transform Your Business with a Stunning Landing Pages
                                    </h2>
                                    <h3>
                                        Revitalize your brand with visually stunning and effective landing pages that captivate
                                    </h3>
                                </div>
                                <div>
                                    <h2> Responsive & high-converting landing pages</h2>
                                    <h3>Boost conversions with responsive and high-performing landing pages for optimal user engagement
                                    </h3>
                                </div>
                                <div>
                                    <h2> Transform Your Google AdWords Strategy with Our Services</h2>
                                    <h3>
                                        Optimize Google Ad strategy with our expert services for maximum impact and results
                                    </h3>
                                </div>
                            </Slider>
                        </div>
                        <button className="cta-button">Create Your Landing Page</button>
                    </div>
                    {/* first form */}
                    <div className='container1 right formContainer'>
                        <div className='form'>
                            <h5>Schedule a Consultation</h5>
                            <form
                                method="post"
                                ref={form}
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

                </section>
            </div>
            <Footer />
        </>

    )
}
export default business_landingpage