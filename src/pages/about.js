import Breadcrumbs from '@/Components/Breadcrumbs'
import Menu from '@/Components/Navbar'
import KnowAbout from '@/Components/about/KnowAbout'
import AboutSlider from '@/Components/Home/AboutSlider'
import Footer from '@/Components/Footer'
import { motion } from "framer-motion";
import Head from 'next/head'
import  MobileMenu  from '@/Components/MobileMenu';


const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}>
      <Head>
      <title>About Us - Way WeDesign</title>
       
       <meta   name="description" content="Way WeDesign: Your Trusted Digital Marketing Company in Kochi" />
       <meta   name="robots" content="index, follow" />
       <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <link   rel="canonical" href="https://waywedesign.com/about" />
       <meta   property="og:locale" content="en_US" />
       <meta   property="og:type" content="website" />
       <meta   property="og:title" content="ITES and Digital Marketing Services | Digital Marketing Company" />
       <meta   property="og:description" content="Way WeDesign: Your Trusted Digital Marketing Company in KochiWe provide ITES and digital marketing services, including web development, SEO, social media marketing, and more. Contact us today to learn more!" />
       <meta   property="og:url" content="https://waywedesign.com/about" />
       <meta property="og:image" content="https://waywedesign.com/static/media/logo.0246eede34e149467296.png" />
       <meta property="og:image:width" content="1024" />
       <meta property="og:image:height" content="1024" />
       <meta property="og:image:alt" content="Digital Marketing Company in Kochi" />
       <meta property="og:image:type" content="image/png" />
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
        <Menu/>
        <MobileMenu />

        <Breadcrumbs  pageurl="about" subtitle="About"/>
        <KnowAbout />
        <AboutSlider/>
        <Footer/>
    </motion.div>
  )
}

export default About