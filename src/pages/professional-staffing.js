import React from 'react'
import { motion } from "framer-motion";
import Head from 'next/head';
import Image from 'next/image';
import hrmService from "../images/resources/hrm-service.jpg";
import Menu from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Breadcrumbs from '@/Components/Breadcrumbs';
import ServiceSideMenu from '@/Components/ServiceSideMenu';

const ProfessionalStaffing= () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
  >
    <Head>
      <title>Professional Staffing - Way WeDesign</title>
      <meta name="description" content="Professional Staffing" />
    </Head>
    <Menu/>
    <Breadcrumbs pageurl="professional-staffing" subtitle="Professional Staffing" />

    <section className="service-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="service-details__right">
              <div className="service-details__img">
                <Image
                  src={hrmService}
                  alt="ProfessionalStaffing"
                />
              </div>
              <div className="service-details__content">
                <h1 className="service-details__title">Professional Staffing</h1>
                <p className="service-details__text ">
                Industries across the globe resort to different strategies when it comes to attracting the right talent. As the economy is growing, there is also a huge gap in demand and supply of core talent, especially in niche areas. Our professional staffing segment specifically caters to bridging the inadequacies your organization might have at meeting the growing demands of your business. Our team focuses on providing the best fit primarily focusing on skill fulfillment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <ServiceSideMenu />
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </motion.div>
  )
}

export default ProfessionalStaffing