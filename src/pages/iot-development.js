import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import iotDevelopment from "../images/resources/IotDevelopment.jpg"
import Menu from "@/Components/Navbar";
import Breadcrumbs from "@/Components/Breadcrumbs";
import AccordionFaq from "@/Components/Accordion";
import ServiceSideMenu from "@/Components/ServiceSideMenu";
import Footer from "@/Components/Footer";


const IotDevelopment = () => {
  const IotDevelopmentFaq = [
    {
      eventkey: 0,
      title: "What is software development?",
      desc: "Software development is the process of designing, coding, testing, and maintaining software applications",
    },
    {
      eventkey: 1,
      title: "What is a platform?",
      desc: "A platform is a set of hardware and software technologies that support the development and execution of software applications",
    },
    {
      eventkey: 2,
      title: "What is the difference between software and platform?",
      desc: "Software refers to a specific application or program, while a platform refers to the underlying technology that supports the development and execution of software.",
    },
    {
      eventkey: 3,
      title: "What are the popular software development methodologies?",
      desc: "Agile, Waterfall, Scrum, Kanban, and Lean are popular software development methodologies.",
    },
    {
      eventkey: 4,
      title: "What is Agile development?",
      desc: "Agile development is a iterative and flexible approach to software development that emphasizes collaboration, customer involvement, and rapid iteration.",
    },
    {
      eventkey: 4,
      title: "What is Scrum in software development?",
      desc: "Scrum is an Agile framework for managing and completing complex projects. It emphasizes collaboration, flexibility, and continuous improvement.",
    },
    {
      eventkey: 4,
      title: "What are the popular software development platforms?",
      desc: "Popular software development platforms include Windows, Linux, macOS, Android, and iOS.",
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
        <Menu/>
      <title>IOT Development Service providing comany| IOT Development Services</title>
       
       <meta   name="description" content="Way WeDesign is a popular IoT development company that helps new businesses and enterprises around the world establish innovative IoT Development Services." />
       <meta   name="robots" content="index, follow" />
       <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <link   rel="canonical" href="https://waywedesign.com/iot-development" />
       <meta   property="og:locale" content="en_US" />
       <meta   property="og:type" content="website" />
       <meta   property="og:title" content="IOT Development Service providing comany| IOT Development Services" />
       <meta   property="og:description" content="Way WeDesign is a popular IoT development company that helps new businesses and enterprises around the world establish innovative IoT Development Services." />
       <meta   property="og:url" content="https://waywedesign.com/iot-development" />
       <meta   property="og:site_name" content="WayWeDesign" />
       <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
       <meta   property="article:modified_time" content="2023-06-05T08:16:17+00:00" />
       <meta   name="twitter:card" content="summary_large_image" />
       <meta   name="twitter:creator" content="@waywedesign" />
       <meta   name="twitter:site" content="@waywedesign" />
      </Head>
      
      <Breadcrumbs pageurl="iot-evelopment" subtitle="IOT DEVELOPMENT" />

      <section className="service-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="service-details__right">
                <div className="service-details__img">
                  <Image
                    src={iotDevelopment}
                    alt="digital-marketing"
                  />
                </div>
                <div className="service-details__content">
                  <h1 className="service-details__title">IOT DEVELOPMENT</h1>
                  <p className="service-details__text ">
                    Our embedded device development services include the latest
                    technology and best practices to ensure high quality
                    products for our customers. We have a team of professionals
                    with industrial experience in the latest technologies to
                    help our customers transform their innovative ideas into
                    distinct products. We also provide support and development
                    services for embedded products and real-time operating
                    systems-based products with high accuracy.
                  </p>
                </div>
                <div className="service-details__benefits">
                  <div className="row">
                    <div cl ass="col-xl-6">
                    <div className="service-details__benefits-text">
  <ul>
    <li>
      <h6 className="service_list"> IOT PROJECTS</h6>
    </li>
    <li>
      <h6 className="service_list">HOME AUTOMATION</h6>
    </li>
    <li>
      <h6 className="service_list">PCB DESIGNING</h6>
    </li>
  </ul>
</div>
                    </div>
                  </div>
                </div>

                <div className="pb-3">
                  {IotDevelopmentFaq.map((data) => {
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

export default IotDevelopment;
