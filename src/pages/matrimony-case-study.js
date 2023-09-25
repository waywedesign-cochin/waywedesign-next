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
const Matrimony = () => {
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

      <Breadcrumbs pageurl="case-study/matrimony" subtitle="matrimony" />

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
                    A Recently Launged Matrimonial site for Malayalee  with the mission to increase their Brand Awareness and App Downloads                </p>
                  <br />

                </div>
                <h3 className="text-center">Client Background</h3>                <br />

                <p className="service-details__text text-justify">Our client, a well-known entrepreneur from Trissur, was eager to expand his business ventures. He decided to create a new matrimony app with a focus on connecting Malayalee people worldwide. The goal of the app was to change how people find their life partners. Their main objectives were to get more people to download the app and to make more people aware of the brand.</p>
                <br />
                <h3 className="text-center ">Objective</h3>
                <br />

                <p className="service-details__text text-center">The main objective of the customer was to reach out to all malayees community around the globe.
                  <br />Drive more  app downloads and become a  well-recognized brand in this field of Matrimonial Sites.
                </p>                <br />


                <h3 className="text-center">Challenges We Faced</h3><br />
                <p><b>Brand Awareness: </b>Introducing a new matrimony site exclusively for Malayalees worldwide, including India, UAE, Canada, USA, and Australia, in a highly competitive field with over 100 established competitors is a significant challenge for brand awareness.</p>
                <p><b>Market Penetration: </b> Establishing a foothold in highly competitive markets with established players required careful planning.</p>
                <p><b>Brand Consistency: </b> Maintaining brand consistency with its unique identity while remaining relevant to Malayalee culture</p>

                <br />
                <h3 className="text-center">Solutions</h3>
                <br />
                <p><b>Localized Marketing: </b>Customize marketing campaigns for each country by considering the unique cultural characteristics and preferences of Malayalees. </p>
                <p><b>Country-Specific Features: </b>We can adjust the app's functions to meet the specific requirements of users in each country. For instance, users can set their partner search preferences based on their preferred regions.</p>
                <p><b>User Support: </b> Chatbot service offers instant assistance primarily through mobile devices, with a strong focus on WhatsApp, one of the most commonly used messaging platforms.</p>
                <br />
                <h3 className="text-center"> Our  Customized Service for Them</h3>
                <br />
                <div>
                 <div class="row">
                  <div className="col-md-3 my-2 text-center">
                    <Image className="caseStudyIcon"  src={seo}/>
                    <p className="text-center">SEO</p>
                  </div>
                  <div className="col-md-3 my-2 text-center">
                    <Image className="caseStudyIcon"  src={smm}/>
                    <p className="text-center">Social Media Marketing</p>
                  </div>
                  <div className="col-md-3 my-2 text-center">
                    <Image className="caseStudyIcon" src={gads}/>
                    <p className="text-center">Google Ads
</p>
                  </div>
                  <div className="col-md-3 my-2 text-center">
                    <Image className="caseStudyIcon" src={chat}/>
                    <p className="text-center">Chatbot Services
</p>
                  </div>
                 </div>
                
                </div>
              </div>
            </div>
            
          </div>
                  <br/>
                  <h5><b>SEO:</b> Boosting Visibility and Engagement:</h5><br/>
                  <p>Our journey begins with search engine optimization (SEO), a critical element in ensuring our platform reaches the right audience. By optimizing our website and content, we've enhanced its visibility in search engines</p><br/>
                  <h5><b>Instagram/Facebook Ads:</b> Targeted Marketing at Its Best</h5><br/>
                  <p>With the targeted marketing of  Instagram and Facebook ads, we've effectively engaged the Malayalee community, raising awareness about the matrimonial site and encouraging user registration, participation  of Malayalee community.</p><br/>
                  <h5><b>Google Ads: </b>Focused on Driving App Downloads</h5><br/>
                  <p>When it came to Google ads, our primary goal was to boost  the app downloads . Our well crafted  Google Ads  Campaign drived more app downloads from all over the world</p>
                  <br/>
                  <h5><b>Chatbot Services:</b> Instant Assistance, Always</h5><br/>
                  <p>Chatbot services for instance assistance and personalised registration support</p>

        </div>
                  {/* results  section start */}
                  <section class=" results">
                  <div className="container ">
                    <div class="row">
                    <h3 className="titleIcon">The Results</h3>

                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>2000+</h3>
                          <p className="text-center">Registrations</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>1000+</h3>
                          <p className="text-center">App Download</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>+137</h3>
                          <p className="text-center">Instagram Enagement</p>
                        </div>
                    </div>
                    <div className="col-md-3 py-2">
                        <div className="resultCard">
                          <h3>10 Lakh+</h3>
                          <p className="text-center">Brand Visibility</p>
                        </div>
                    </div>

                  </div>
                  </div>
                  </section>
                  {/* results  section end */}
                  <br/>
                  <div className="container">
                  <br/>
                  <p><b>Global User Base:</b> Within three months, the app successfully expanded its user base to multiple countries, including India, the United States, Canada, the United Kingdom, and Australia.</p>
                    <p><b>App Downloads: </b>The localized marketing strategies led to an increase of 60% in international app downloads.</p>
                    <p><b>Brand Recognition: </b>This matrimony became a recognizable brand in each target country, with a 50% increase in brand mentions and positive reviews on international platforms.</p>
                    </div>
      </section>
      <Footer />
    </motion.div>
  )
}

export default Matrimony