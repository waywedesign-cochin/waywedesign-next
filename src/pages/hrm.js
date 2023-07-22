import Head from "next/head";
import Image from "next/image";
import hrmservice from "../images/resources/hrm-service.jpg";
import Footer from "@/Components/Footer";
import Menu from "@/Components/Navbar";
import Breadcrumbs from "@/Components/Breadcrumbs";
import AccordionFaq from "@/Components/Accordion";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import { motion } from "framer-motion";


const Hrm = () => {
  const HrmFaq = [
    {
      eventkey: 0,
      title: "What industries commonly hire remote employees in India?",
      desc: "Common industries that hire remote employees in India include IT, finance, customer service, and marketing.",
    },
    {
      eventkey: 1,
      title: "What are the requirements for hiring remote employees in India?",
      desc: "The requirements for hiring remote employees in India vary depending on the company and the type of role. However, common requirements include a reliable internet connection, a computer or laptop, and the necessary software and tools for the job.",
    },
    {
      eventkey: 2,
      title: "What are the best ways to manage remote employees in India?",
      desc: "The best ways to manage remote employees in India include setting clear expectations, providing regular feedback and support, and using project management tools to stay organized and on track.",
    },
    {
      eventkey: 3,
      title: "What are the challenges of hiring remote employees in India?",
      desc: "Some of the challenges of hiring remote employees in India include time zone differences, communication barriers, and difficulties in building a strong team culture.",
    },
    {
      eventkey: 4,
      title:
        "How do you ensure the quality of work from remote employees in India?",
      desc: "To ensure the quality of work from remote employees in India, it is important to establish clear expectations, provide regular feedback and support, and use performance metrics to measure success. Additionally, it is important to have a strong onboarding process to ensure that new employees have the necessary training and resources to succeed in their role.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Head>
      <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="icon" href="./assets/images/logo.png" />
  <link rel="apple-touch-icon" href="./assets/images/logo.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  <title> HRMS - HR Management Services by Way WeDesign  </title>
  <meta   name="description" content="Way WeDesign  offers HRMS including professional recruitment and hiring, training and development, and customer service satisfaction analysis  with year of experience." />
  <meta   name="robots" content="index, follow" />
  <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link   rel="canonical" href="https://waywedesign.com/hrm" />
  <meta   property="og:locale" content="en_US" />
  <meta   property="og:type" content="website" />
  <meta   property="og:title" content="HRMS - HR Management Services by Way WeDesign " />
  <meta   property="og:description" content="Way WeDesign  offers HRMS including professional recruitment and hiring, training and development, and customer service satisfaction analysis  with year of experience." />
  <meta   property="og:url" content="https://waywedesign.com/hrm" />
  <meta   property="og:site_name" content="WayWeDesign" />
  <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
  <meta   property="article:modified_time" content="2023-06-05T08:16:17+00:00" />
  <meta   name="twitter:card" content="summary_large_image" />
  <meta   name="twitter:creator" content="@waywedesign" />
  <meta   name="twitter:site" content="@waywedesign" />
  
  <script type="application/ld+json">
     {
     `{
       "@context": "https://schema.org",
       "@type": "LocalBusiness",
       "name": "Way WeDesign",
       "image": "https://waywedesign.com/static/media/logo.0246eede34e149467296.png",
       "@id": "",
       "url": "https://waywedesign.com/",
       "telephone": "+91 7994643673",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "Chalikkavattom",
         "addressLocality": " Kochi",
         "postalCode": "682028",
         "addressCountry": "IN"
       },
       "geo": {
         "@type": "GeoCoordinates",
         "latitude":  9.98737,
         "longitude": 76.32234
       },
       "openingHoursSpecification": {
         "@type": "OpeningHoursSpecification",
         "dayOfWeek": [
           "Monday",
           "Tuesday",
           "Wednesday",
           "Thursday",
           "Friday",
           "Saturday"
         ],
         "opens": "10:00",
         "closes": "18:00"
       } 
     }`
     }
     </script>

      </Head>
        <Menu/>

      <Breadcrumbs pageurl="hrm" subtitle="HRM" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={hrmservice}
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">HRM</h1>
                  <p className="service-details__text ">
                    Our talent acquisition team focus on offering the best. They
                    have a deep understanding of candidates in several verticals
                    and as specialists, know which one of them would fit right
                    into your company. Having a pool of talent helps us to
                    consistently staff projects on time, comply with client and
                    candidate needs within the mentioned budget.
                  </p>
                </div>
                <div className="service-details__benefits">
                  <div className="row">
                    <div cl ass="col-xl-6">
                      <div className="service-details__benefits-text">
                        <h4 className="service-details__benefits-title">
                          Professional Staffing
                        </h4>
                        <p className="service-details__benefits-text">
                          Industries across the globe resort to different
                          strategies when it comes to attracting the right
                          talent. As the economy is growing, there is also a
                          huge gap in demand and supply of core talent,
                          especially in niche areas. Our professional staffing
                          segment specifically caters to bridging the
                          inadequacies your organization might have at meeting
                          the growing demands of your business. Our team focuses
                          on providing the best fit primarily focusing on skill
                          fulfillment.
                        </p>
                        <br />
                        <h4 className="service-details__benefits-title">
                          Outsourcing
                        </h4>
                        <p className="service-details__benefits-text">
                          We have seen a paradigm shift in traditional staffing
                          solutions where companies are currently on the lookout
                          for more economical ways of staffing, particularly
                          outsourcing. Organizations that have people working on
                          multiple projects and in numerous industries at the
                          same time are looking for an efficient way to plan for
                          workforce needs and measure team performance.
                         </p>
                         <p className="service-details__text ">

                          Comprehending what drives our outsourcing customers is
                          essential to the success of our business
                          relationships. Providing quality candidates and a
                          wealth of resources is what make our “managed
                          staffing” program dynamic. Evaluating KPI's (Key
                          Performance Indicators) that are important to our
                          clients dramatically enhances their productivity levels by assigning
                          the right people to job tasks. We follow an intensive
                          recruitment process to ensure that the best talent is
                          delivered to you.
                          <br />
                         
                        </p>
                        <ol>
                            <li>
                              <h6 className="service_list">SOURCING</h6>
                              <p>
                                Our team's top-notch networking and large pool
                                of candidates for IT and related services will
                                give you a chance to diversify your team keeping
                                in mind maximum efficiency and talent.
                              </p>
                            </li>
                            <li>
                              <h6 className="service_list">
                                SCREENING, FILTERING AND SHORLISTING
                              </h6>
                              <p>
                                Our staffing specialists have hands-on
                                understanding of industry operations and
                                requirements for IT and related services. This
                                ensures we validate the credentials of
                                candidates in a highly professional manner. We
                                set up interviews with HR professionals and
                                domain experts, who are readily available deal
                                with any concerns or queries that arise during
                                the interview process.
                              </p>
                            </li>
                            <li>
                              <h6 className="service_list">
                                SCHEDULING AN INTERVIEW
                              </h6>
                              <p>
                                After the candidate has been shortlisted at our
                                end of the recruitment process, we will schedule
                                an interview date with you based on mutual
                                availability.
                              </p>
                            </li>
                          </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  <h3 className="service-details__title ">FAQ</h3>
                  <p className="service-details__benefits-text">
                    Are you looking for a way to attract talent and efficiently
                    staff your organization without additional expense and
                    tedious efforts? Are you searching for better ways to manage
                    your team's revenue and at the same time tackle the
                    increased manpower you would need to keep up with the
                    demands? If any of these questions fit your current company
                    needs, you're at the right place. If you're a company
                    outside India, you could consider expanding your staffing by
                    hiring remote employees in India. If you're a company in
                    India, we make sure to diligently provide top talent in
                    verticals that you aim to recruit personnel. What are the
                    benefits of hiring remote employees in India?
                    <br />
                    Hiring remote employees in India can provide cost savings,
                    access to a large pool of talented professionals, and the
                    ability to scale your workforce quickly.
                  </p>
                  <br />

                  {HrmFaq.map((data) => {
                    return (
                      <AccordionFaq
                        eventkey={data.eventkey}
                        title={data.title}
                        desc={data.desc}
                      />
                    );
                  })}
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

export default Hrm;
