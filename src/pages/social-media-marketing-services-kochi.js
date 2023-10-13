import Footer from "@/Components/Footer";
import MobileMenu from "@/Components/MobileMenu";
import Menu from "@/Components/Navbar";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import webillustration from "../images/smm-banner.png";
import serviceSmm from "../images/smm-first.jpg";
import secondSmm from "../images/smm-second.jpg";

import Image from "next/image";

const SmmCompanyKochi = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        <Head>
          <Head>
            <title>
             Best SMM Company in Cochin | SMM  Company in Kochi
            </title>

            <meta
              name="description"
              content="We are award-wining web design & development company in Kochi, Kerala. We specialise in web design, and SEO-friendly websites with 100% satisfaction."
            />
            <meta name="robots" content="index, follow" />
            <meta
              name="googlebot"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta
              name="bingbot"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <link
              rel="canonical"
              href="https://waywedesign.com/seo-company-in-kochi"
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Best Seo Company Kochi"
            />
            <meta
              property="og:description"
              content="Visit the Best Web Develpoment company in kochi and Web Design company in kochi"
            />
            <meta
              property="og:url"
              content="https://waywedesign.com/web-development-company-in-kochi"
            />
            <meta property="og:image" content="" />
            <meta property="og:image:width" content="1024" />
            <meta property="og:image:height" content="1024" />
            <meta
              property="og:image:alt"
              content="Web Design and Development  Company in Kochi"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:site_name" content="WayWeDesign" />
            <meta
              property="article:publisher"
              content="https://www.facebook.com/waywedesign"
            />
            <meta
              property="article:modified_time"
              content="2023-06-05T08:16:17+00:00"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@waywedesign" />
            <meta name="twitter:site" content="@waywedesign" />

            <script type="application/ld+json">
{
`{
  "@context": "http://schema.org", 
  "@type": "WebPage",
   "name": "Best Web Design and Development Company Kochi", 
   "description": "Visit the Best Web Develpoment company in kochi and Web Design company in kochi",
    "url": "https://waywedesign.com/web-development-company-in-kochi"
}`
}

</script>
 
          </Head>
        </Head>
        <Menu />
        <MobileMenu />
        <section className="SmmCompanyKochi">
          <div className="container py-4">
            <div className="row">
              <div className="col-md-6 align-self-center ">
                <h1 className="text-light  webDevelopmentCompanyBannerTitle">
                Social Media Marketing Services, Kochi
                </h1>
                <p className="text-light">
                BEST SOCIAL MEDIA MARKETING AGENCY IN KOCHI THAT OFFER RESULTS, NOT SIMPLY CONCEPTS

                </p>
                <button className="btn btn-danger btn-lg">Learn More</button>
              </div>
              <div className="col-md-6 align-self-center">
                <Image
                  className="bannerImagewebDevelopmentCompany"
                  src={webillustration}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5">
          <div className="container">
            {/* <h3 className="py-2 text-center">WEB DESIGN & DEVELOPMENT</h3> */}
            <p>
            As more and more brands are elevating with social media advertising, you should understand how to use social media for marketing and advertising to potential customers and expand your conversion. The main objective of social media advertising is to generate new clients and increase your sales easily. Social Media Marketing (SMM) is an asset to every business and it has opened up a whole new world of opportunities for entrepreneurs and audiences to connect with each other. Social Media Marketing involves reaching out to your audience through platforms like Facebook, Twitter, Linked In, Pinterest, and various other platforms. It has proved to be the most cost-effective and it makes the communication easy and swiftly with your customers. Social Media doesn't only give you a wide coverage but it also helps in growing visibility, generating traffic, leads, and conversions. However, most importantly creating an engagement with your audience is the essential factor in social media. Discover the best platforms to invest your money for Ads and increase your sales. Contact Kochi's best social media marketing team today

            </p>
           
          </div>
        </section>
        
        {/* designing and redesigning  start */}
        <section className="py-4">
          <div className="container">
            <div className="row py-3">
                <div className="col-md-6">
                    <h3 className="py-2">We Create and Manage Effective Social Media Marketing Campaigns</h3>
                    <p>
                    Social media is a joint marathon for every brand. We know the best way to run social media marketing for your business. The main motive of Social media marketing is to drive more traffic to the website, engagements and generate leads that can later be transformed into a customer. We have a team of Social Media Management experts and Marketing Professionals to help you with your online space. We will identify the best platforms for your business. The tools we use will provide strategic insights and analytics. As a full-service digital marketing company, Waywedesign will help you build a collective strategy to increase engagement and brand awareness, attracting the right audience with online marketing and advertising.

                    </p>
                </div>
                <div className="col-md-6 align-self-center text-center">
                    <Image style={{width:"100%",height:"100%"}} src={serviceSmm} alt="smm services" />
                </div>
            </div>
            <div className="row py-2">
            <div className="col-md-6 align-self-center text-center">
                    <Image class="rounded" style={{width:"100%",height:"100%",objectFit:"cover"}} src={secondSmm} alt="smm services" />
                </div>
                <div className="col-md-6">
                    <h3 className="py-2">Engage With Your Target Audience</h3>
                    <p>
                    A global community of 350 million people is using Social Media. 21% grows every year. The best way to find your potential customers is through social media and Are you using Social Media effectively?
<br/>Social media marketing isn’t difficult, it’s all about the action, engaging with your audience, and having a conversation. A crazy world of business is Social Media. It’s the best live platform to meet the whole world and to make your business more and more social. We give a shout for your business to serve the thirsty-consumer community who is spending 3 hours daily online. Guaranteeing to deliver an increased Brand Identity, Online reputation, and huge consumer base. As a reliable social media marketing in Kochi, we are your shortcode for a long success. Yes, we make you learn the art of overpowering a cut-throat online competition!

                    </p>
                </div>
               
            </div>
          </div>
        </section>
        {/* designing and redesigning  end */}
        <section>
            <div className="container">
                <div className="row">
                    <h3 className="py-2">Boost the Traffic to Your Website From Your Social Media Platforms
</h3>
<p>In today’s marketing, having a social media presence is an important factor in driving traffic to your website. Waywedesign will work on behalf of you to execute our strategy so that you never have to concern about marketing or promoting your businesses on social media accounts. Our internet marketing company can manage all of your social media accounts, likewise as your website and your blog to examine if there is something you are missing that may assist you to make out. We can focus your business on increasing engagement, lead generation, traffic to the website, or brand awareness while promoting your business on social media.
</p>
               
<h6 className="fs-2 py-4">Professional Social Media Company in Kochi You Can Rely on

</h6>
             <p>
             Maybe you are wondering what your social media agency is doing from month-month. At Waywedesign, we collaborate with your in-house team to ensure your social platforms playing a major role in building a brand. At the end of the day, reporting is important when it comes to social media marketing.
<br/>Highlighting your brand through social media will help improve your company's reputation and goodwill. Our social media marketing methods usually have 3-6 month targets and schedules. we tend to work closely with marketing departments to know what campaigns are being planned and implemented. We will find which platforms are right for you and we run campaigns at an affordable rate as well as the precise targeting.

                
                </p>  
                </div>
            </div>

        </section>

        <Footer />
      </motion.div>
    </>
  );
};

export default SmmCompanyKochi;
