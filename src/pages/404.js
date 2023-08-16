import Footer from "@/Components/Footer";
import MobileMenu from "@/Components/MobileMenu";
import Menu from "@/Components/Navbar";
import Link from 'next/link'

export default function Custom404() {
    return( 
    <>
    <Menu/>
    <MobileMenu />

    <div className="container text-center">
        
        <div >
        <img style={{marginTop:"100px"}} width="50%" src="/assets/images/404.png" alt="" />

        </div>
        <Link  href="/" className="about-one__btn thm-btn mb-2">
                  Back to Home
                </Link>
    </div>
    <Footer/>
    </>)
  }