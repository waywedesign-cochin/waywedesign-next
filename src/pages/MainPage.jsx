import React from 'react'
import Home from './Home'
import Menu from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import  MobileMenu  from '@/Components/MobileMenu';
import Head from 'next/head';
import PhoneIcon from '@/Components/FlottingButton';
const MainPage = () => {
  return (
    <div>
      <Head>
      <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="icon" href="/assets/images/logo.png" />
  <link rel="apple-touch-icon" href="/assets/images/logo.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  <title>Leading Digital Marketing providers & Best Digital Marketing Company in Kochi</title>
  <meta   name="description" content="Best IT/ITES provider & Digital Marketing company in Kochi. We offer services including digital marketing, SEO, SMM, web development, graphic designing & more." />
  <meta   name="robots" content="index, follow" />
  <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link   rel="canonical" href="https://waywedesign.com" />
  <meta   property="og:locale" content="en_US" />
  <meta   property="og:type" content="website" />
  <meta   property="og:title" content="Leading Digital Marketing providers & Best Digital Marketing Company in Kochi" />
  <meta   property="og:description" content="Best IT/ITES provider & Digital Marketing company in Kochi. We offer services including digital marketing, SEO, SMM, web development, graphic designing & more." />
  <meta   property="og:url" content="https://waywedesign.com" />
  <meta property="og:image" content="https://waywedesign.com/assets/images/logo-wwd.png" />
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
         <Home/>   
        <Footer/>
        <PhoneIcon/>
      
    </div>
  )
}

export default MainPage