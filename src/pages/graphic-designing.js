import {motion} from 'framer-motion'
import Head from "next/head";
import graphicdesignbanner from "../images/resources/graphic-design-banner.jpg";
import Image from "next/image";
import Menu from '@/Components/Navbar';
import Breadcrumbs from '@/Components/Breadcrumbs';
import AccordionFaq from '@/Components/Accordion';
import ServiceSideMenu from '@/Components/ServiceSideMenu';
import Footer from '@/Components/Footer';
import MobileMenu from '@/Components/MobileMenu';



const GraphicDesigning = () => {
  const Faq = [
    {
      eventkey: 0,
      title: "What type of design services do you offer?",
      desc: "We offer poster design, brochure design, visiting card design, and logo design services.",
    },
    {
      eventkey: 1,
      title: "How long does it take to complete a design project?",
      desc: "The time it takes to complete a design project depends on the complexity of the project and the number of revisions required. Our team will provide you with an estimated timeline for completion when you place your order.",
    },
    {
      eventkey: 2,
      title: "What is the process for ordering a design project?",
      desc: "The process for ordering a design project begins with a consultation with our team to discuss your design needs and preferences. We will then provide you with a quote for the project and, once the project is approved, begin the design process.",
    },
    {
      eventkey: 3,
      title: "How many revisions are included in the design process?",
      desc: "The number of revisions included in the design process depends on the project and will be discussed during the initial consultation. We strive to ensure that our clients are completely satisfied with the final design and will work with you to make any necessary revisions.",
    },
    {
      eventkey: 4,
      title: "How do I receive the final design files?",
      desc: "The final design files will be delivered to you in the format of your choice (e.g. JPG, PNG, PDF, etc.).",
    },
  ];
  return (
    <motion.div  initial={{opacity:0, x: 100 }}
    animate={{ opacity:1, x: 0 }}
    exit={{ opacity:0, x: 100}}
    transition={{ duration: 1 }}>
      <Head>
      <title>Professional Graphics Design Service Company | Way WeDesign</title>
       
       <meta   name="description" content="Check out for Professional Graphics  Design Service Company in Kerala. Get our graphics design service includes logo design,posterdesign, etc. Contact now !" />
       <meta   name="robots" content="index, follow" />
       <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <link   rel="canonical" href="https://waywedesign.com/graphic-designing" />
       <meta   property="og:locale" content="en_US" />
       <meta   property="og:type" content="website" />
       <meta   property="og:title" content="Professional Graphics Design Service company | Way WeDesign" />
       <meta   property="og:description" content="Check out for Professional Graphics  Design Service Company in Kerala. Get our graphics design service includes logo design,posterdesign, etc. Contact now !" />
       <meta   property="og:url" content="https://waywedesign.com/graphic-designing" />
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
       "image": "https://waywedesign.com/assets/images/logo-wwd.png",
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
      <MobileMenu />

      <Breadcrumbs pageurl="graphic-designing" subtitle="GRAPHIC DESIGNING" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={graphicdesignbanner}
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">GRAPHIC DESIGNING</h1>
                  <p className="service-details__text ">
                    We offer professional graphic design services for all your
                    marketing and branding needs. Our team of experienced
                    designers creates visually appealing and effective designs
                    to help you stand out in a competitive market. Our services
                    include:
                  </p>
                </div>
                <div className="service-details__benefits">
                  <div className="row">
                    <div cl ass="col-xl-6">
                      <p className="service-details__benefits-text">
                        <ul>
                          <li>
                            <h6 className="service_list">Poster Design</h6>
                            <p>
                              Our posters are designed to grab the attention of
                              your target audience and convey your message
                              effectively. We create posters that are not only
                              visually appealing but also communicate your brand
                              values and messaging.
                            </p>
                          </li>
                          <li>
                            <h6 className="service_list">Brochure Design</h6>
                            <p>
                              Our brochures are designed to give a comprehensive
                              overview of your products and services. We create
                              brochures that are visually appealing, easy to
                              read, and effectively communicate your brand
                              message.
                            </p>
                          </li>
                          <li>
                            <h6 className="service_list">Visiting Card Design</h6>
                            <p>
                              Our visiting cards are designed to make a lasting
                              impression on your clients and customers. We
                              create visiting cards that are professional,
                              visually appealing, and effectively communicate
                              your brand values and messaging
                            </p>
                          </li>
                          <li>
                            <h6 className="service_list">Logo Design</h6>
                            <p>
                              Our logos are designed to reflect the unique
                              identity of your brand. We create logos that are
                              visually appealing, memorable, and effectively
                              communicate your brand values and messaging.
                            </p>
                          </li>
                        </ul>
                        Our goal is to provide you with high-quality graphic
                        design services that meet your needs and exceed your
                        expectations. Contact us today to learn more about how
                        we can help you achieve your marketing and branding
                        goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  <h3 className="service-details__title ">FAQ</h3>

                  {Faq.map((data) => {
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

export default GraphicDesigning;
