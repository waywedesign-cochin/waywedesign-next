

import Head from "next/head";
import { motion } from "framer-motion";
import Menu from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Image from "next/image";
import smm from "../background-images/case-studies/SMM.png"
import gads from "../background-images/case-studies/google-ads.png"
import seo from "../background-images/case-studies/seo.png"
import chat from "../background-images/case-studies/chat.png"
import MobileMenu from "@/Components/MobileMenu";
const engineeringConsultancy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Matrimony - Case Study</title>
        <meta name="description" content="Erp Crm Solution" />
      </Head>
      <Menu />
      <MobileMenu />

      <Breadcrumbs pageurl="case-study/engineering-consultancy-case-study
" subtitle="engineering Consultancy" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="">
                <div className="service-details__img text-center">
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
                  A respected engineering consultancy specialising in power and alternative energy solutions.
              </p>
                  <br />

                </div>
                <h3 className="text-center">Client Background</h3>                <br />

                <p className="service-details__text text-center">Welde Engineering Solutions Pvt. Ltd., an engineering consultancy with 20+ years of experience, excels in delivering high-quality power and alternative energy solutions.
Objectives
</p>
                <br />
                <h3 className="text-center ">Objective</h3>
                <br />

                <p className="service-details__text text-center">The key objectives included increasing brand recognition in a competitive industry and driving direct inquiries through Google Ads.

                </p>                <br />


                <h3 className="text-center">Challenges We Faced</h3><br />
                <p className="text-center">Overcoming competition in the power and alternative energy sector, establishing initial brand recognition, and ensuring the quality of generated inquiries.
</p>

                <br />
                <h3 className="text-center">Solutions</h3>
                <br />
                <p className="text-center">Strategic utilisation of Google Ads, including Search and Call Ads, to target specific audiences, craft engaging ad content, optimise landing pages, and track call conversions for heightened brand awareness and lead generation.
</p>
                <br />
                <h3 className="text-center"> Our  Customized Service for Them</h3>
                <br />
                <div>
                 <div class="row">
                  
                  <div className="col-md-4 my-2 text-center">
                   
                  </div>
                  <div className="col-md-4 my-2 text-center">
                    <Image className="caseStudyIcon" src={gads}/>
                    <p className="text-center">Google Ads
</p>
                  </div>
                 
                 </div>
                
                </div>
              </div>
            </div>
            
          </div>
                 

        </div>
                  {/* results  section start */}
                  <section class=" results">
                  <div className="container ">
                    <div class="row">
                    <h3 className="titleIcon">The Results</h3>

                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>2000+</h3>
                          <p className="text-center">Clicks</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>50k</h3>
                          <p className="text-center">Impressions</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>500+</h3>
                          <p className="text-center">Leads</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>250+</h3>
                          <p className="text-center">Conversions</p>
                        </div>
                    </div>

                  </div>
                  </div>
                  </section>
                  {/* results  section end */}
                  <br/>
                  <div className="container">
                  <br/>
                  <p><b>Increased Brand Awareness:</b> Over the course of the campaign, Welde Engineering saw a substantial increase in brand awareness as measured by ad impressions and click-through rates. The consistent presence in search results contributed to their brand's recognition.
</p>
                    <p><b>Direct Inquiries: </b> The Call Ads generated a significant number of phone call inquiries, connecting potential customers directly with the Welde Engineering team. These inquiries translated into potential sales opportunities.
</p>
                    <p><b>Cost-Efficient Campaign:</b>  By focusing on high-intent keywords and optimizing ad spend, the campaign achieved a cost-efficient cost-per-acquisition (CPA) for new customer inquiries.
</p>
                    <p><b>Data-Driven Decisions:</b> Regular monitoring and analysis of campaign data allowed us to make data-driven decisions, refining the strategy over time to maximize results.</p>
                    </div>
      </section>
      <Footer />
    </motion.div>
  )
}

export default engineeringConsultancy