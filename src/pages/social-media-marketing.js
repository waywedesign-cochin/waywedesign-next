import { motion } from "framer-motion";
import smmBanner from "../images/resources/smm-banner.jpg"
import AccordionFaq from "@/Components/Accordion";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Menu from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import seoBanner from "../images/resources/seo-banner.jpg"
import Head from "next/head";
import Image from "next/image";
const SMM = () => {
  const SmmFaq = [
    {
      eventkey: 0,
      title: "What is Social Media Marketing?",
      desc: "Social Media Marketing is the process of promoting a brand, product, or service through social media platforms. It involves creating and sharing content, engaging with followers, and running advertisements to reach and connect with a target audience.",
    },
    {
      eventkey: 1,
      title: "Why is Social Media Marketing important?",
      desc: "Social Media Marketing is important because it allows businesses to reach a large and engaged audience, increase brand awareness, drive traffic and sales, and build relationships with customers.",
    },
    {
      eventkey: 2,
      title: "Which social media platforms should a business use?",
      desc: "The social media platforms a business should use depend on their target audience and goals. Some of the most popular platforms include Facebook, Instagram, Twitter, LinkedIn, and YouTube.",
    },
    {
      eventkey: 3,
      title: "How often should a business post on social media?",
      desc: "The frequency of posting on social media depends on the platform and the target audience, but it is generally recommended to post at least once a day on most platforms.",
    },
    {
      eventkey: 4,
      title:
        "How do you measure the success of a social media marketing campaign?",
      desc: "The success of a social media marketing campaign can be measured using metrics such as engagement rate, reach, impressions, website traffic, and conversions.",
    },
    {
      eventkey: 5,
      title: "Can social media marketing replace other forms of advertising?",
      desc: "Social media marketing can complement other forms of advertising, but it may not replace them entirely. It is important to have a well-rounded marketing strategy that includes a variety of channels and tactics to reach a target audience effectively.",
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
      <title>Social Media Marketing Agency | Social Media Marketing Services</title>
       
       <meta   name="description" content="Social media marketing services,Way WeDesign  is a best  Social Media Markeitng Agency   focused on enhancing brand  visibility through targeted strategies." />
       <meta   name="robots" content="index, follow" />
       <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <link   rel="canonical" href="https://waywedesign.com/social-media-marketing" />
       <meta   property="og:locale" content="en_US" />
       <meta   property="og:type" content="website" />
       <meta   property="og:title" content="Social Media Marketing Agency | Social Media Marketing Services" />
       <meta   property="og:description" content="Social media marketing services,Way WeDesign  is a best  Social Media Markeitng Agency   focused on enhancing brand  visibility through targeted strategies." />
       <meta   property="og:url" content="https://waywedesign.com/social-media-marketing" />
       <meta   property="og:site_name" content="WayWeDesign" />
       <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
       <meta   property="article:modified_time" content="2023-06-05T08:16:17+00:00" />
       <meta   name="twitter:card" content="summary_large_image" />
       <meta   name="twitter:creator" content="@waywedesign" />
       <meta   name="twitter:site" content="@waywedesign" />

      </Head>
        <Menu/>
      <Breadcrumbs
        pageurl="social-media-marketing"
        subtitle="SOCIAL MEDIA MARKETING "
      />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={smmBanner}
                    alt="SOCIAL MEDIA MARKETING"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">
                    SOCIAL MEDIA MARKETING (SMM)
                  </h1>
                  <p className="service-details__text ">
                    As more and more brands are uplifting with social media
                    advertising, you should understand how to use social media
                    for marketing and advertising to potential customers and
                    expand your conversion. The main objective of social media
                    advertising is to generate new clients and increase your
                    sales easily. Social Media Marketing (SMM) is an asset to
                    every business and it has opened up a whole new world of
                    opportunities for entrepreneurs and audiences to connect
                    with each other. </p>  <p className="service-details__text ">

                    A global community of 350 million people is using Social
                    Media. 21% grows by every year. The best way to find your
                    potential customers is through social media and are you
                    using Social Media effectively?
                    </p>  <p className="service-details__text ">
                    Social media marketing isn’t difficult, it’s all about the
                    action, engaging with your audience, and having a
                    conversation. A crazy world of business is Social Media.
                    It’s the best live platform to meet the whole world and to
                    make your business more and more social. We give a shout for
                    your business to serve the thirsty-consumer community who is
                    spending 3 hours daily online. Guaranteeing to deliver an
                    increased Brand Identity, Online reputation, and huge
                    consumer base. As a reliable social media marketing in
                    Kochi, we are your short code for a long success. Yes, we
                    make you learn the art of overpowering a cut-throat online
                    competition!
                    </p>  <p className="service-details__text ">
                    You can trust on Waywedesign for your social media
                    presentation.  </p>  <p className="service-details__text ">
                    Social Media Marketing involves reaching out to your
                    audience through the platforms like Facebook, Instagram
                    Twitter, Linked In, Pinterest, YouTube and various other
                    platforms. It has proved to be the most cost-effective and
                    it makes the communication cool and fast with your
                    customers. Social Media doesn't only give you a wide
                    coverage but it also helps in growing visibility, generating
                    traffic, leads, and conversions. However, most importantly
                    creating an engagement with your audience is the essential
                    factor in social media. Discover the best platforms to
                    invest your money for Ads and increase your sales.
                    </p>  <p className="service-details__text ">
                    Maybe you are wondering what your social media agency is
                    doing from month-month. At Waywedesign, we collaborate with
                    your in-house team to ensure your social platforms playing a
                    major role in building a brand. At the end of the day,
                    reporting is important when it comes to social media
                    marketing.
                    </p>  <p className="service-details__text ">
                    Highlighting your brand through social media will help
                    improve your company's reputation and goodwill. Our social
                    media marketing methods usually have 3-6 month targets and
                    schedules. We tend to work closely with marketing
                    departments to know whaimport {Head} from 'react-Head';
                    t campaigns are being planned and implemented. We will find
                    which platforms are right for you and we run campaigns at an
                    affordable rate as well as the precise targeting.
                   
                  </p>
                </div>
                <br />
                <h3 className="service-details__title ">FAQ</h3>
                {SmmFaq.map((data) => {
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

export default SMM;
