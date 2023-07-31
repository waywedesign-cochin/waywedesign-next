import { motion } from "framer-motion";
import Head from "next/head";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Menu from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import FeatureTab from "@/Components/FeatureTab";
import AccordionFaq from "@/Components/Accordion";
import googleads from "../images/resources/google-ads.jpg";
import { Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/Components/MobileMenu";



const GoogleAds = () => {
  const GoogleAdsFaq = [
    {
      eventkey: 0,
      title: "What is Google Ads? ",
      desc: "Google Ads is an online advertising platform that allows businesses to create and display advertisements on Google search results pages, websites, and other online properties within Google's network.",
    },
    {
      eventkey: 1,
      title: "What types of Google Ads services do you offer? ",
      desc: "We offer a range of Google Ads services, including Search Ads, Display Ads, Video Ads, Shopping Ads, and more. Our team can help you choose the best ad types for your business goals.",
    },
    {
      eventkey: 2,
      title: "How can Google Ads help my business? ",
      desc: "Google Ads can help your business reach potential customers who are searching for products or services similar to what you offer. By targeting relevant audiences and using data-driven insights, you can increase website traffic, generate leads, and drive sales.",
    },
    {
      eventkey: 3,
      title: "How much does Google Ads cost?",
      desc: " The cost of Google Ads varies depending on factors such as ad type, targeting, and competition. Our team can help you create a customized advertising strategy that fits within your budget.",
    },
    {
      eventkey: 4,
      title: "When will I see results from Google Ads?",
      desc: "Results from Google Ads can vary depending on your business goals and advertising strategy. Our team will work with you to set realistic expectations and continually optimize your campaigns for maximum results.",
    },
    {
      eventkey: 5,
      title: "How do I get started with Google Ads?",
      desc: "To get started with Google Ads, you will need to create an account and set up your advertising campaigns. Our team can guide you through the process and help you create a winning advertising strategy.",
    },
  ];

  const googleAdsService = [
    {
      title: "Search Ads",
      desc: "These are text-based ads that appear on Google's search engine results pages (SERPs) when users search for specific keywords. These ads are highly targeted and can help businesses reach potential customers who are actively searching for products or services like theirs.",
    },
    {
      title: "Display Ads",
      desc: "Visual advertisements known as display ads run on websites connected to Google's display network.. These ads can be static or animated, and can include images, videos, and other media. Display ads are an effective way to build brand awareness and target potential customers who may be interested in your products or services.",
    },
    {
      title: "Video Ads",
      desc: "Video ads are ads that appear on YouTube and other video-sharing websites within the Google Display Network. These ads can be skippable or non-skippable and can be used to showcase products or services, drive engagement, or increase brand awareness.",
    },
    {
      title: "Shopping Ads",
      desc: "Shopping ads appear on Google's search engine results pages and within Google Shopping. These ads feature product images, descriptions, and pricing information and are highly effective for driving online sales for e-commerce businesses.",
    },
    {
      title: "Remarketing",
      desc: "Businesses can target customers who have previously interacted with their website or advertisements by using remarketing. This strategy can help businesses stay top-of-mind with potential customers and increase the likelihood of conversions.",
    },
    {
      title: "Mobile Ads",
      desc: "Mobile ads are specifically designed for mobile devices and can include text, display, and video ads. Mobile ads are a great way to reach users on-the-go and can be highly effective for businesses with mobile apps or mobile-friendly websites.",
    },
    {
      title: "Local Ads",
      desc: "Local ads are designed to help businesses promote their products or services to customers in their local area. These ads can appear on Google Maps and within Google's local search results",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
        <Menu/>
        <MobileMenu />

      <Head>
      <title>Google Ads(Google AdWords) Management | Google Ads Agency</title>
       
       <meta   name="description" content="We Specialized in powerful Google Ads strategies for optimal results. Drive website traffic, generate leads, and boost sales with our expert Google Ads services" />
       <meta   name="robots" content="index, follow" />
       <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <link   rel="canonical" href="https://waywedesign.com/google-ads" />
       <meta   property="og:locale" content="en_US" />
       <meta   property="og:type" content="website" />
       <meta   property="og:title" content="Google Ads(Google AdWords) Management | Google Ads Agency" />
       <meta   property="og:description" content="We Specialized in powerful Google Ads strategies for optimal results. Drive website traffic, generate leads, and boost sales with our expert Google Ads services" />
       <meta   property="og:url" content="https://waywedesign.com/google-ads" />
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

      <Breadcrumbs pageurl="google-ads" subtitle="GOOGLE ADS/PPC" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={googleads}
                    alt="GOOGLE ADS/PPC"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">GOOGLE ADS/PPC</h1>
                  <p className="service-details__text ">
                    Waywedesign is a leading digital marketing company dedicated
                    to helping businesses reach their sales goals and connect
                    with more potential customers through the power of Google
                    Ads. Our team of Google Ads specialists will manage your Pay
                    Per Click (PPC) campaign to help drive relevant traffic to
                    your website.
                  </p>{" "}
                  <p className="service-details__text ">
                    The first step in building a successful campaign is thorough
                    keyword research. Our experts will identify the keywords
                    that are most likely to be used by consumers searching for
                    your products or services, ensuring that your ads reach the
                    right audience. Our specialists will closely monitor the PPC
                    campaigns of your competitors, and use this information to
                    craft a strategy that will help you outrank them and
                    generate more leads.
                  </p>
                  <p className="service-details__text ">
                    At Way Wedesign, we are dedicated to delivering results and
                    keeping you informed every step of the way. Our specialists
                    will provide a monthly report and consultation, so you can
                    stay updated on the progress and performance of your
                    campaign. Whether you're just starting out or looking to
                    improve your existing Google Ads strategy, we have the
                    expertise to help you succeed.
                  </p>
                  <h3 className="service-details__title ">
                    Professional Google Ads Management PPC Services
                  </h3>
                  <p className="service-details__text ">
                    The Google Display Network, which includes more websites,
                    and Google's search engine results pages, all feature
                    advertisements created and shown through the Google Ads
                    online advertising platform. Businesses can use Google
                    AdWords to target potential customers who are looking for
                    similar goods or services and show them advertisements when
                    they are most likely to act or make a purchase.
                  </p>
                  <p className="service-details__text ">
                    Our Google Ads services offer a range of ad types, including
                    text, display, video, and shopping advertisements, which may
                    be customized to meet the unique marketing objectives and
                    financial constraints of your company. We assist companies
                    in optimizing their campaigns for the best outcomes and a
                    higher return on investment for their advertising spend by
                    utilizing our knowledge in Google Ads management.
                  </p>
                  <p className="service-details__text ">
                    Using Google AdWords, companies can target potential clients
                    who are looking for similar products or services and enhance
                    their online visibility. Businesses can improve the
                    efficiency of their marketing initiatives by using robust
                    tools for measuring ad success and analyzing customer
                    behavior.
                  </p>
                  <p className="service-details__text ">
                    We are dedicated to giving our clients outstanding service
                    and achieving quantifiable outcomes as a top Google Ads
                    agency. Our Google Ads services can help you meet your
                    marketing objectives and expand your business online,
                    whether you're trying to increase leads, sales, or brand
                    awareness.
                  </p>
                  <h3 className="service-details__title ">
                    Transform Your Digital Advertising with Our Google Ads
                    Services
                  </h3>
                  {googleAdsService.map((item, index) => {
                    return (
                      <Card className="my-2" key={index}>
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Body>
                          <blockquote className="blockquote mb-0">
                            <p className="text-justify">{item.desc}</p>
                          </blockquote>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </div>
                <h3 className="service-details__title ">
                  Our Proven Process and Approach to Boosting Your ROI
                </h3>
                <FeatureTab />

                <br />
                <h3 className="service-details__title ">FAQ</h3>
                {GoogleAdsFaq.map((data) => {
                  return (
                    <AccordionFaq
                      eventkey={data.eventkey}
                      title={data.title}
                      desc={data.desc}
                    />
                  );
                })}
              </div>
              <h3 className="service-details__title">Why We are the Right Choice for you
</h3>
<p className="service-details__text ">At Way WeDesign, we believe that our approach to Google Ads management sets us apart from other agencies. Listed below are just a few reasons why you should choose us:
</p>
<p className="service-details__text "><b style={{color:"#000"}}>Unique Value Proposition:</b> We take a data-driven approach to every Google Ads campaign we manage, ensuring that our clients see real results that impact their bottom line. Our team's expertise in research, strategy, and optimization sets us apart from other agencies, and we pride ourselves on delivering measurable results that exceed our clients' expectations.
</p>
<p className="service-details__text "><b style={{color:"#000"}}>Team Expertise: </b> Our team is made up of experienced Google Ads professionals who have a proven track record of success. We hold industry certifications and stay up-to-date on the latest trends and best practices to ensure that our clients get the best possible results from their campaigns. Whether you need help with Search Ads, Display Ads, Video Ads, or other ad types, we have the skills and knowledge to help you achieve your marketing goals.
</p>
<p className="service-details__text "><b style={{color:"#000"}}>Commitment to Service:</b> We are committed to providing exceptional service to every client we work with. From our initial consultation to ongoing campaign management and reporting, we strive to make the process as seamless and transparent as possible. We believe in open communication, collaboration, and a strong work ethic that puts our clients' needs first.
<br/><br/>And we are passionate about helping businesses grow through effective Google Ads management. To know how we can help you achieve your marketing goals and take your business to the next level by contacting us today.
</p>
<div className="py-4">
<Link href="/contact" className="about-one__btn thm-btn">
                  Contact Us
                </Link>
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

export default GoogleAds;
