
import Breadcrumbs from "@/Components/Breadcrumbs";
import Footer from "@/Components/Footer";
import Menu from "@/Components/Navbar";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import datalabeling from "../images/resources/data-labeling.jpg";

const DataLabelingAndClassification = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
  >
      <Head>
        <title>Data Labeling - Way WeDesign</title>
        <meta name="description" content=" Our suite of data entry outcomes is detailed and constructed
                    to suit every enterprise" />
      </Head>
      <Menu/>

      <Breadcrumbs
        pageurl="data-labeling"
        subtitle="Data Labelling & Classification"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={datalabeling}
                    alt="data labelling"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">Data Labeling</h1>
                  <p className="service-details__text ">
                    Data is the spine of any institution. Whether you are
                    scheduling or analyzing every stage and every level of the
                    individual in the group expects data. Data as such is not of
                    any intention, even if the best of the data is accessible.
                    The data is compelled to be transformed into Information to
                    get fortunate out of it. It is presently very crucial to
                    outsource data. We fetch you strong benefits to stimulate
                    your industry to the next level. With a huge pool of highly
                    competent data entry consultants who you can bank on for
                    precision and speed. Excessive proportions of data entry
                    responsibilities can direct to spiraling expenses. But data
                    is crucial in making decision in many companies. So the
                    pressure for accurate data will proceed to thrive as your
                    industry improves. Fast-paced and qualitative digital data
                    processing treatments help us facilitate and optimize
                    economic data processing networks. We propose bespoke data
                    entry assistance to all business verticals customized
                    according to corporate demands and objectives.</p>
                    <p className="service-details__text ">

                    Our suite of data entry outcomes is detailed and constructed
                    to suit every enterprise. We are professionals at
                    facilitating your data entry strategy and business
                    executives to strengthen your business in prevailing
                    functioning. We have a sharp squad of highly equipped
                    proficient who are energetically encompassed in furnishing
                    support tasks for the data processing crew. Our data entry
                    specialists follow the key techniques to deliver entirely
                    valid and up-to-date data to global customers. We always
                    maintain our customers in the loop and motivate their
                    notions and inculcate them. We speculate ethical
                    communication to uphold the belief of transparency while
                    negotiating with clients. We promise assured results for
                    high customer contentment.
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
  );
};

export default DataLabelingAndClassification;
