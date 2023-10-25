import Footer from "@/Components/Footer"
import MobileMenu from "@/Components/MobileMenu"
import Menu from "@/Components/Navbar"
import Head from "next/head"


const PrivacyPolicy =()=>{
    return(
        <>
        <Head>
        <title> Privacy Policy | Way WeDesign</title>
       <meta   name="description" content="Waywedesign is a social media marketing company in Kochi that helps new businesses make the right connections. Grow your business with ROI-driven services." />


       <meta   name="robots" content="index, follow" />
       <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
       <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

       <link   rel="canonical" href=" https://waywedesign.com/privacy-policy" />


       <meta   property="og:locale" content="en_US" />
       <meta   property="og:type" content="website" />
       <meta   property="og:title" content=" Social Media Marketing Company Kochi | #1 Social Media Services" />
       <meta   property="og:description" content="Waywedesign is a social media marketing company in Kochi that helps new businesses make the right connections. Grow your business with ROI-driven services.
" />
       <meta   property="og:url" content="https://waywedesign.com/privacy-policy" />
       <meta property="og:image"   content="https://waywedesign.com/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Fsmm-second.66ceaf43.jpg?url=%2F_next%2Fstatic%2Fmedia%2Fsmm-second.66ceaf43.jpg&w=3840&q=75" />
     <meta property="og:image:width" content="1024" />
       <meta property="og:image:height" content="1024" />
       <meta property="og:image:alt" content="Privacy Policy" />
       <meta property="og:image:type" content="image/png" />
       <meta   property="og:site_name" content="WayWeDesign" />

       <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
       <meta   property="article:modified_time" content="2023-06-05T08:16:17+00:00" />
       <meta   name="twitter:card" content="summary_large_image" />
       <meta   name="twitter:creator" content="@waywedesign" />
       <meta   name="twitter:site" content="@waywedesign" />

          </Head>
        <Menu />
        <MobileMenu />
        <div className="container">
        <p className="pt-4">Way WeDesign is entrusted to safeguarding your privacy. By entering our site, you agree to the terms of our privacy policy to collect, use, and disclose your personal data when you use our Service.</p>
        <p>
Your data will be used to study and improve our services methods. By using the Service, you agree to collect and use of information in accordance with this policy. We collect following types of information such as your name, email address, telephone number, address, cookies and data usage for better service interpretation and that information will be kept private and confidential.
</p>
<p><b>Use of Data:</b> We collect information on how the Service were accessed and used. Usage of Data may include information such as your computer's Internet IP, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on our pages, unique device identifiers and other diagnostic data.</p>
<p><b>Cookies & Tracking: </b>We use cookies and similar tracking technologies to track your activity and hold certain information. Cookies are sent to your browser and stored on your device. We use them for various purposes, provide and maintain the Service, notify about changes in our Service, allow you to participate in interactive features of our Service when you choose to do so, provide customer care and support etc..</p>
<p className="pb-4"><b>Security:</b>All necessary steps are taken to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or any countries without our consent. Your data is important to us and is 100% secure.  </p>
</div>
<Footer/>
        </>
    )
}

export default PrivacyPolicy