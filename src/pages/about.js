import Breadcrumbs from '@/Components/Breadcrumbs'
import Menu from '@/Components/Navbar'
import KnowAbout from '@/Components/about/KnowAbout'
import AboutSlider from '@/Components/Home/AboutSlider'
import Footer from '@/Components/Footer'

const About = () => {
  return (
    <div>
        <Menu/>
        <Breadcrumbs  pageurl="about" subtitle="About"/>
        <KnowAbout />
        <AboutSlider/>
        <Footer/>
    </div>
  )
}

export default About