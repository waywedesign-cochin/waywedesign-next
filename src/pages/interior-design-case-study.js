

import Head from "next/head";
import { motion } from "framer-motion";
import Menu from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Image from "next/image";
import smm from "../background-images/case-studies/SMM.png"
import gads from "../background-images/case-studies/google-ads.png"
import web from "../background-images/case-studies/webdevelopment.png"
import MobileMenu from "@/Components/MobileMenu";
const InteriorDesign = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Interior Design - Case Study</title>
        <meta name="description" content="Erp Crm Solution" />
      </Head>
      <Menu />
      <MobileMenu />

      <Breadcrumbs pageurl="/interiror-design-case-study
" subtitle="Interior Design" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="">
                <div className="service-details__img text-justify">
                  {/* <Image
                    style={{ width: "70%" }}
                    src={erpsolutions}
                    alt="erpcrm solutions"
                  /> */}
                </div>
                <div className="service-details__content">
                  <h3 className="text-center">Client</h3>
                  <br />
                  <p className="service-details__text text-center ">
                  A progressive company in the field of interior design approached us with a mission of getting more visibility and online presence.
              </p>
                  <br />

                </div>
                <h3 className="text-center">Client Background</h3>                <br />

                <p className="service-details__text text-justify">Despite the remarkable nature of their creative endeavors, their presence in the digital realm was virtually non-existent. The absence of a website and an online platform hindered their ability to exhibit their portfolio, engage with prospective clients, and establish their industry expertise.

</p>
                <br />
                <h3 className="text-center ">Objective</h3>
                <br />

                <p className="service-details__text text-justify"><b>Showcase Portfolio and Services:</b> One of the main goals is to showcase a carefully selected collection of finished projects. This enables potential clients to observe the company's work quality and style.         </p>      
                <p className="service-details__text text-justify"><b>Establish Credibility:</b>  Establishing trust is of utmost importance in the interior design sector. The company's website should effectively communicate its professionalism, expertise, and successful track record by showcasing client testimonials, certifications, awards, and case studies       </p>      
                <p className="service-details__text text-justify"><b>Show Personality and Branding:</b>  The website ought to mirror the brand identity of the company, encompassing its distinctive design style and personality.        </p>      
                          <br />


                <h3 className="text-center">Challenges We Faced</h3><br />
                <p className="text-justify"><b>Limited recognition: </b>Interior design companies that are new to the industry often face challenges in establishing their brand recognition and reputation. It takes time to build trust and credibility in order to gain a foothold in the market.</p>
                <p className="text-justify"><b>Online presence:</b> Having a strong online presence is essential in the modern digital era. It involves the creation and management of a website and the optimization for search engines.</p>

                <br />
            
                <h3 className="text-center"> Our  Customized Service for Them</h3>
                <br />
                <div>
                 <div class="row">
                  
                  <div className="col-md-4 my-2 text-center">
                   
                  </div>
                  <div className="col-md-4 my-2 text-center">
                    <Image className="caseStudyIcon" src={web}/>
                    <p className="text-center">Website Development
</p>
                  </div>
                 
                 </div>
                
                </div>
              </div>
            </div>
            
          </div>
                  <p><b>Website Design:</b><br/>
                  Designed a responsive website that is mobile-friendly to cater to the increasing number of users accessing websites through smartphones and laptops. The website features user-friendly navigation, high-quality visuals, optimized speed, enhanced security, analytics, and tracking capabilities.</p>

        </div>
                  {/* results  section start */}
                  <section class=" results">
                  <div className="container ">
                    <div class="row">
                    <h3 className="titleIcon">The Results</h3>

                    <div className="col-md-4 py-2">
                        <div className="newresultCard">
                          <h3>Online Visibility</h3>
                          <p className="text-justify">After the launch of the new website and implementation of digital marketing strategies, Reflectionz witnessed a significant boost in its online visibility.</p>
                        </div>
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="newresultCard">
                          <h3>Positive client Testimonials</h3>
                          <p className="text-justify">Reflectionz received an influx of positive client testimonials, which conveyed a profound sense of satisfaction and admiration for their work. The online presence not only successfully attracted clients, but also left them thoroughly delighted.</p>
                        </div>
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="newresultCard">
                          <h3>Growth in Client Base</h3>
                          <p className="text-justify">The enhanced online presence of Reflectionz led to a significant expansion in their clientele. The launch of their website resulted in a remarkable increase in the number of new clients acquired.</p>
                        </div>
                    </div>
                   

                  </div>
                  </div>
                  </section>
                  
      </section>
      <Footer />
    </motion.div>
  )
}

export default InteriorDesign