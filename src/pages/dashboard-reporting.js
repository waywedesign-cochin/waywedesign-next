import  Head from "next/head";
import  Image from "next/image";
import  dashboardrepimg from "../images/resources/dashboard-reporting.jpg";
import { motion } from "framer-motion";
import Menu from "@/Components/Navbar";
import Breadcrumbs from "@/Components/Breadcrumbs";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import Footer from "@/Components/Footer";


const DashboardReporting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Dashboard Reporting - Way WeDesign</title>
        <meta name="description" content="dashBoard reporting" />
      </Head>
    <Menu/>
      <Breadcrumbs
        pageurl="dashboard-reporting"
        subtitle="DASHBOARD REPORTING"
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={dashboardrepimg}
                    alt="dashboard-reporting"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">
                    DASHBOARD REPORTING
                  </h1>
                  <p className="service-details__text ">
                    Data is constantly changing and being updated, which can
                    make it difficult to keep up with the latest trends. That’s
                    why it’s more important than ever to be in control of your
                    company’s dataimport { Head } from 'next/head';
. If you’re not, you risk falling behind your
                    competitors.
                  </p>{" "}
                  <p className="service-details__text ">
                    Way We Design’s Dashboard Reporting System enables you to
                    represent key performance indicators and relevant business
                    data in a visual and interactive way. Business users can
                    create their own dashboard reports that enable them to
                    derive actionable insights while saving costs and time.
                    Dashboard reporting is an efficient way for business users
                    to keep track of progress and identify areas that need
                    attention. By creating their own reports, businesses can
                    save money and time while still getting the insights they
                    need. A data-driven culture is key to success and using a
                    modern dashboard software is the perfect way to push your
                    business intelligence strategy to the next level.
                  </p>{" "}
                  <p className="service-details__text ">
                    BENEFITS OF INVESTING IN OUR DASHBOARD REPORTING SOFTWARE
                    ARE:
                  </p>
                </div>
                <div className="service-details__benefits">
                  <div className="row">
                    <div cl ass="col-xl-6">
                      <div className="service-details__benefits-text">
                        <p className="service-details__benefits-text">
                          <ul>
                            <li>
                              <h6 className="service_list">
                                Tracking business movements/trends
                              </h6>
                            </li>
                            <li>
                              <h6 className="service_list">
                                Info graphic representation of data
                              </h6>
                            </li>
                            <li>
                              <h6 className="service_list">Insight monitoring</h6>
                            </li>
                            <li>
                              <h6 className="service_list">
                                Faster decision making
                              </h6>
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
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

export default DashboardReporting;
