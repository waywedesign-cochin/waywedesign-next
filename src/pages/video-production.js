import { motion } from "framer-motion";
import Head from 'next/head'
import videoproduction from "../images/resources/Video-production.jpg"
import Image from 'next/image'
import Menu from "@/Components/Navbar";
import Breadcrumbs from "@/Components/Breadcrumbs";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import Footer from "@/Components/Footer";

const VideoProduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Video Production - Way WeDesign</title>
        <meta name="description" content="video Production Company in Kochi" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://waywedesign.com/video-production" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Video Production" />
        <meta
          property="og:description"
          content="video Production Company in Kochi"
        />
        <meta
          property="og:url"
          content="https://waywedesign.com/video-production"
        />
        <meta property="og:site_name" content="waywedesign.com" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/waywedesign.com/"
        />
        <meta
          property="article:modified_time"
          content="2020-09-01T08:16:17+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@waywedesign.com" />
        <meta name="twitter:site" content="@waywedesign.com" />
      </Head>
        <Menu/>
      <Breadcrumbs pageurl="video-production" subtitle="Video Production" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={videoproduction}
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">Video production</h1>
                  <p className="service-details__text ">
                    Video production involves the entire process of creating a
                    video, from pre-production to post-production. </p>  <p className="service-details__text ">
                    In pre-production, the digital marketing company works with
                    the client to determine the goals of the video, identify the
                    target audience, and develop a creative concept. This may
                    involve creating a storyboard or script, casting actors or
                    selecting presenters, scouting locations, and planning the
                    shoot. </p>  <p className="service-details__text ">
                    During production, the digital marketing company is
                    responsible for capturing the footage and audio needed to
                    create the final video. This may involve using
                    professional-grade cameras, lighting, and sound equipment,
                    as well as directing actors or presenters and coordinating
                    with any additional crew members. </p>  <p className="service-details__text ">
                    Post-production involves editing the raw footage, adding
                    special effects, music, and other elements, and creating a
                    final product that meets the client's goals and
                    expectations. This may include color correction, sound
                    mixing, and the addition of graphics or animation. </p>  <p className="service-details__text ">
                    The digital marketing company may also provide additional
                    services, such as distribution and promotion of the final
                    video. This may involve publishing the video on social media
                    platforms, creating a landing page on the client's website,
                    or promoting the video through email marketing or other
                    digital advertising channels. </p>  <p className="service-details__text ">
                    Overall, video production is a complex process that requires
                    a high level of expertise and experience. A digital
                    marketing company that specializes in video production can
                    provide the resources and expertise needed to create
                    high-quality, engaging videos that effectively communicate
                    the client's message and achieve their marketing goals.
                  </p>
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

export default VideoProduction;
