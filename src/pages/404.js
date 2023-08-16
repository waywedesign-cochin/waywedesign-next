import Footer from "@/Components/Footer";
import Menu from "@/Components/Navbar";
import Link from 'next/link'

export default function Custom404() {
    return( 
    <>
    <Menu/>

    <div className="container text-center">
        <div>
        <img width="50%" src="/assets/images/404.png" alt="" />

        </div>
        <Link style={{marginBottom:"10px",position:'relative',bottom:'80px'}} href="/" className="about-one__btn thm-btn">
                  Back to Home
                </Link>
    </div>
    <Footer/>
    </>)
  }