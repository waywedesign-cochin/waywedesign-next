import React from 'react'
import SingleService from './SingleService';

const DigitalMarketingServices = () => {
    const MarketingServices = [
        {
          serviceTitle: "SEARCH ENGINE OPTIMIZATION (SEO)",
          serviceDesc:
            "Expose the full potential of your website with our top-rated SEO services. At Waywedesign",
          link: "search-engine-optimization",
        },
        {
          serviceTitle: "SOCIAL MEDIA MARKETING (SMM)",
          serviceDesc:
            "As more and more brands are uplifting with social media advertising, you should ",
          link: "social-media-marketing",
        },
        {
          serviceTitle: "GOOGLE ADS/PPC",
          serviceDesc:
            "Waywedesign is a leading digital marketing company dedicated to helping businesses reach their ",
          link: "google-ads",
        },
        {
          serviceTitle: "Email Marketing",
          serviceDesc:
            "Email marketing is a critical component of a successful digital marketing strategy, and a digital marketing company  ",
          link: "email-marketing",
        },
        {
          serviceTitle: "Digital Branding",
          serviceDesc:
            "We offer professional graphic design services for all your marketing and branding needs.",
          link: "graphic-designing",
        },
        {
          serviceTitle: "Video Production",
          serviceDesc:
            "Video production involves the entire process of creating a video, from pre-production to post-production.",
          link: "video-production",
        },
        {
          serviceTitle: "Content Development",
          serviceDesc:
            "Content marketing has emerged as a crucial component of digital marketing, as it allows",
          link: "content-marketing",
        },
        {
          serviceTitle: "Chatbot Marketing",
          serviceDesc:
            "Chatbot marketing boosts engagement, streamlines communication, and enhances digital strategies for successful businesses",
          link: "",
        },
        {
          serviceTitle: "Affiliate Marketing",
          serviceDesc:
            "Affiliate marketing drives business success by fostering strategic partnerships and optimizing digital campaigns.",
          link: "",
        },
      ];
  return (
    <section className="services-one">
    <div className="container">
      <div className="section-title text-center">
        <span className="section-title__tagline">
          Wide Range of Services
        </span>
        <h2 className="section-title__title">Services</h2>
      </div>
      <div className="row">
        {MarketingServices.map((data) => {
          return (
            <SingleService
              link={data.link}
              serviceTitle={data.serviceTitle}
              serviceDesc={data.serviceDesc}
            />
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default DigitalMarketingServices