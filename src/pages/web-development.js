import Breadcrumbs from '@/Components/Breadcrumbs'
import Menu from '@/Components/Navbar'
import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion';
import ServiceSideMenu from '@/Components/ServiceSideMenu';
import WebTools from '@/Components/WebTools';
import webBanner from "../images/resources/web-development-page-banner.jpg"
import Image from 'next/image';
import Footer from '@/Components/Footer';
import MobileMenu from '@/Components/MobileMenu';
const WebDevelopment = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
  >
    <Head>
    <title>  Web Development Company | Web Development Service | Web Services</title>
        <meta   name="description" content="We are award-wining web design & development company in Kochi, Kerala. We specialize in web design, and SEO-friendly websites with 100% satisfaction.
" />
        <meta   name="robots" content="index, follow" />
	      <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	      <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	      <link   rel="canonical" href="https://waywedesign.com/web-development" />
	      <meta   property="og:locale" content="en_US" />
	      <meta   property="og:type" content="website" />
	      <meta   property="og:title" content="Web Development Company | Web Development Service | Web Services" />
	      <meta   property="og:description" content="We are award-wining web design & development company in Kochi, Kerala. We specialize in web design, and SEO-friendly websites with 100% satisfaction.
" />
	      <meta   property="og:url" content="https://waywedesign.com/web-development" />
	      <meta   property="og:site_name" content="waywedesign.com" />
	      <meta   property="article:publisher" content="https://www.facebook.com/waywedesign.com/" />
	      <meta   property="article:modified_time" content="2020-09-01T08:16:17+00:00" />
	      <meta   name="twitter:card" content="summary_large_image" />
	      <meta   name="twitter:creator" content="@waywedesign.com" />
	      <meta   name="twitter:site" content="@waywedesign.com" />
    </Head>

    <Menu/>
    <MobileMenu />

    <Breadcrumbs  pageurl="web-development" subtitle="WEB DEVELOPMENT"/>
    <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={webBanner}
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">WEB DEVELOPMENT</h1>
                  <p className="service-details__text ">
                    A website can be created for either personal or professional
                    purposes. Technology has made web development a convenient
                    process. The growing number of websites and the increased
                    use of the internet are indicators of this. As the
                    businesses grow, they increasingly recognize the necessity
                    for access to a professional web service provider to find
                    solutions for their online company development demands.
                    That’s where we come in. Our web development services aid in
                    the creation of all types of web-based software and ensure
                    that web users have a positive experience. We professionally
                    design, redesign, and support customer-facing and enterprise
                    web apps to achieve high conversion an adoption rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <ServiceSideMenu />
            </div>
          </div>
        </div>
        <div className="pt-4">

        <WebTools/>
        </div>

      </section>
    <Footer/>
  </motion.div>
  )
}

export default WebDevelopment