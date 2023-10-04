import Footer from "@/Components/Footer";
import MobileMenu from "@/Components/MobileMenu";
import Menu from "@/Components/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const caseStudies = () => {
  return (
    <>
      
      <Head>
        <title>
          Best Digital Marketing Company in Bangalore, India | IT/ITES Providers{" "}
        </title>
        <meta
          name="description"
          content="Looking for the best digital marketing company in Bangalore? Look no further! Our team of experts is here to take your online presence to new heights"
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
          href="https://waywedesign.com/best-digital-marketing-company-bangalore"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content=" Best Digital Marketing Company in Bangalore | IT/ITES Providers"
        />
        <meta
          property="og:description"
          content="Looking for the best digital marketing company in Bangalore? Look no further! Our team of experts is here to take your online presence to new heights"
        />
        <meta
          property="og:url"
          content="https://waywedesign.com/best-digital-marketing-company-bangalore"
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
      <Menu />
      <MobileMenu />
      <section>
        <div className="caseStudy-flex">
          <div className="case-study-card one">
            <div className="overlay text-center">
              <Link href="/engineering-consultancy-case-study">
              <div class="center">
                <h2 className="text-white ">
                  <b>+235%</b>
                </h2>
                <p className="text-white text-center">Ad Sales
</p>
              </div>
              <div className="translated-content">
                <h5 className="text-white text-center">
                  <b>Engineering Consultancy
</b>
                </h5>
              </div>
              </Link>
            </div>
          </div>
          <div className="case-study-card two">
            <div className="overlay text-center">
              <Link href="/interior-design-case-study">
              <div class="center">
                <h2 className="text-white ">
                  <b>+360%</b>
                </h2>
                <p className="text-white text-center">Website Development
</p>
              </div>
              <div className="translated-content">
                <h5 className="text-white text-center">
                  <b>Interior Design</b>
                </h5>
              </div>
              </Link>
            </div>
          </div>
          <div className="case-study-card three">
            <div className="overlay text-center">
              <Link href="/matrimony-case-study">
              <div class="center">
                <h2 className="text-white ">
                  <b>+137</b>
                </h2>
                <p className="text-white text-center">Paid Marketing
</p>
              </div>
              <div className="translated-content">
                <h5 className="text-white text-center">
                  <b>Matrimony</b>
                </h5>
              </div>
              </Link>
            </div>
          </div>
          <div className="case-study-card four">
            <div className="overlay text-center">
              <Link href="/background-verification-company-case-study">
              <div class="center">
                <h2 className="text-white ">
                  <b>+291%</b>
                </h2>
                <p className="text-white text-center">Organic Traffic
</p>
              </div>
              <div className="translated-content">
                <h5 className="text-white text-center">
                  <b>Background Verification Company</b>
                </h5>
              </div></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default caseStudies;
