import Menu from "@/Components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import { motion } from "framer-motion";
import Image from "next/image";
import hrmService from "../images/resources/hrm-service.jpg";
import Footer from "@/Components/Footer";
import Head from "next/head";

const Outsourcing= () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
  >
    <Head>
      <title>Outsourcing- Way WeDesign</title>
      <meta name="description" content="Outsourcing" />
    </Head>
    <Menu/>
    <Breadcrumbs pageurl="outsourcing" subtitle="Outsourcing" />

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
                <h1 className="service-details__title">Outsourcing</h1>
                <p className="service-details__text ">
                We have seen a paradigm shift in traditional staffing solutions where companies are currently on the lookout for more economical ways of staffing, particularly outsourcing. Organizations that have people working on multiple projects and in numerous industries at the same time are looking for an efficient way to plan for workforce needs and measure team performance.
                Comprehending what drives our outsourcing customers is essential to the success of our business relationships. Providing quality candidates and a wealth of resources is what make our “managed staffing” program dynamic. Evaluating KPI's (Key Performance Indicators) that are important to our clients dramatically enhances their productivity levels by assigning the right people to job tasks.
                We follow an intensive recruitment process to ensure that the best talent is delivered to you.<br></br>
                <b>1: SOURCING</b><br></br>
                Our team's top-notch networking and large pool of candidates for IT and related services will give you a chance to diversify your team keeping in mind maximum efficiency and talent.<br></br>
               <b> 2: SCREENING, FILTERING AND SHORLISTING</b><br></br>
                Our staffing specialists have hands-on understanding of industry operations and requirements for IT and related services. This ensures we validate the credentials of candidates in a highly professional manner. We set up interviews with HR professionals and domain experts, who are readily available deal with any concerns or queries that arise during the interview process.<br></br>
                <b>3: SCHEDULING AN INTERVIEW</b><br></br>
                  After the candidate has been shortlisted at our end of the recruitment process, we will schedule an interview date with you based on mutual availability.

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

export default Outsourcing