import Footer from '@/Components/Footer'
import MobileMenu from '@/Components/MobileMenu'
import Menu from '@/Components/Navbar'
import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion";
import webillustration from "../images/web-illustration.png";
import webicon from "../images/app-development-icon.png";
import security from "../images/security.png";
import design from "../images/design.png";
import support from "../images/support.png";
import cms from "../images/cms.png";
import seo from "../images/seo.png";
import Image from 'next/image'


const webDevelopmentCompanyKochi = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <Head>
          <title>SEO Transformation for a Background Verification Company
            - Case Study</title>
          <meta name="description" content="SEO Transformation for a Background Verification Company
" />
        </Head>
        <Menu />
        <MobileMenu />
        <div className="webDevelopmentCompanybgImage"></div>
        <section className='webDevelopmentCompany'>
          <div className="container py-4">
            <div className="row">
              <div className="col-md-6 align-self-center ">
                <h1 className="text-light  webDevelopmentCompanyBannerTitle">WEB DESIGNING KOCHI</h1>
                <p className="text-light">We have the technical skills and experience for delivering modern and SEO-friendly websites</p>
                <button className='btn btn-danger btn-lg'>Learn More</button>
              </div>
              <div className="col-md-6 align-self-center">
                <Image className="bannerImagewebDevelopmentCompany" src={webillustration} />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5">
          <div className="container">
            <h3 className="py-2 text-center">WEB DESIGN & DEVELOPMENT</h3>
            <p>In the age of data-driven business, only a solid online presence can help you achieve your organizational goals and the edge over your competitors. We are a team of web designers that love taking on challenges! We are ready to work with you to provide alluring and responsive website solutions with the collaboration of our design and development team. We excel at preparing the notes and then working on your needs, to deliver a successful web design. Our expert Kochi team is stocked with the passion, knowledge, and experience needed to get the work done and is assured to deliver a wide range of website design and development services across the world.
            </p>
            <p>The substantial industry experience, the team of web development experts, and the customer-centric approach make us the No.1 web designing company in Kochi. In our web development company, we follow a series of strategic schemes that refine your objectives and target into a methodic, feasible development plan. We deliver the websites according to our client's requirements and we build them with a suitable programming language or from theme-based websites like WordPress, Wix, etc.
            </p>
          </div>
        </section>
        {/* service area start */}
        <section className="py-5 webDevelopmentCompanyServiceArea">
          <div className="container">
          <h3 className="py-5 text-center ">Our Popular Services</h3>
          <div className="row">
            <div className='col-md-6 webDevelopmentCompanyServiceCard br-first'>
              <div className='row'>
                <div className='col-md-4 text-center align-self-center '>
                  <div className="imageBorder">

                  <Image className="webDevelopmentCompanyServiceCardIcon" src={webicon}/>
                  </div>
                </div>
                <div className='col-md-8'><h5 className="py-2">Mobile Responsive Website</h5>
                <p>Our Specialized team has adopted the mobile-friendly web design and development methodology.
</p></div>
              </div>
            </div>
            <div className='col-md-6 webDevelopmentCompanyServiceCard br-second'>
              <div className='row'>
                <div className='col-md-4 text-center align-self-center '>
                  <div className="imageBorder">

                  <Image className="webDevelopmentCompanyServiceCardIcon" src={seo}/>
                  </div>
                </div>
                <div className='col-md-8'><h5 className="py-2">SEO Friendly</h5>
                <p>Appear on Search Engines with high-quality Snippets and faster loading time than your competitors’ websites.
</p></div>
              </div>
            </div>
            <div className='col-md-6 webDevelopmentCompanyServiceCard br-first'>
              <div className='row'>
                <div className='col-md-4 text-center align-self-center '>
                  <div className="imageBorder">

                  <Image className="webDevelopmentCompanyServiceCardIcon" src={security}/>
                  </div>
                </div>
                <div className='col-md-8'><h5 className="py-2">High Security Website</h5>
                <p>Make your website safe, protective and automatic scans on your website.
</p></div>
              </div>
            </div>
            <div className='col-md-6 webDevelopmentCompanyServiceCard br-second'>
              <div className='row'>
                <div className='col-md-4 text-center align-self-center '>
                  <div className="imageBorder">

                  <Image className="webDevelopmentCompanyServiceCardIcon" src={cms}/>
                  </div>
                </div>
                <div className='col-md-8'><h5 className="py-2">Content Management System</h5>
                <p>Your website shall be developed by WordPress & Divi Page Builder.
</p></div>
              </div>
            </div>
            <div className='col-md-6 webDevelopmentCompanyServiceCard br-center'>
              <div className='row'>
                <div className='col-md-4 text-center align-self-center '>
                  <div className="imageBorder">

                  <Image className="webDevelopmentCompanyServiceCardIcon" src={design}/>
                  </div>
                </div>
                <div className='col-md-8'><h5 className="py-2">Unique Design</h5>
                <p>Our team develop custom designs based on the unique visual ideas of our clients
</p></div>
              </div>
            </div>
            <div className='col-md-6 webDevelopmentCompanyServiceCard '>
              <div className='row'>
                <div className='col-md-4 text-center align-self-center '>
                  <div className="imageBorder">

                  <Image className="webDevelopmentCompanyServiceCardIcon" src={support}/>
                  </div>
                </div>
                <div className='col-md-8'><h5 className="py-2">After Support</h5>
                <p>We are there to help and support you with your queries and further updates to the website.
</p></div>
              </div>
            </div>
          </div>
          </div>
        </section>
        {/* service area end */}
        {/* designing and redesigning  start */}
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-center py-3">Website Designing
</h3>
                <p className="text-justify py-2">Having a high-end website is not enough to attract the audience to it and further to the business. The website should be arresting, appealing, and compelling to make an impact. A well-defined and designed website will give your business a unique identity and will help your business to stand out on the web. We adept web designers and Photoshop experts to conjure a design that addresses your business and target audience with impeccable preciseness. Our web designs render your website dynamic and unrivaled with our affordable, bespoke services. Our professional in-house web designers and developers are brushing up their skills and leveraging the advanced and greatest technologies to help our clients achieve their online sales goals. At Waywedesign, we stay genuine to our ethics that effective website and eCommerce solutions combine a great web design, user experience, cutting-edge technology, and integrated web marketing.
</p>
              </div>
              <div className="col-md-6">
                <h3 className="text-center py-3">Web Re-Designing
</h3>
                <p className="text-justify py-2">Do you have a prosaic, derivative, spiritless website that doesn't make your wish true? Fret not, you can still avail of our exemplary services to revamp and refine the outlook of your website. Our design experts could analyze your website, zero in on its issues, and hardwire excellent solutions to upgrade it consuming less time, cost, and effort. Our erudite, committed and responsive designing team will enable your business to yield immense results from the website. We make stunning product/service pages for attracting the audience for conversion. Your business is assured to grow leaps and meet the sales goals once our design goes live.

</p>
              </div>
            </div>
          </div>
        </section>
        {/* designing and redesigning  end */}

        <Footer />
      </motion.div>
    </>
  )
}

export default webDevelopmentCompanyKochi