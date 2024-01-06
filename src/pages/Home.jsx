import PartnerSlider from '@/Components/Home/PartnerSlider'
import FeatureOne from '@/Components/Home/FeatureOne'
import AboutOne from '@/Components/Home/AboutOne'
import CustomService from '@/Components/Home/CustomService'
import DiscoverMore from '@/Components/Home/DiscoverMore'
import AboutSlider from '@/Components/Home/AboutSlider'
import BlogHome from '@/Components/Home/BlogHome'
import HomeCta from '@/Components/Home/HomeCta'
import ToolsUsed from '@/Components/Home/ToolsUsed'
import BannerVideo from '@/Components/Home/BannerVideo'
import { motion } from "framer-motion";



const Home = () => {
  return (
    <> 
    

        <BannerVideo/>
        <PartnerSlider/>
        <FeatureOne/>
        <AboutOne/>
        <CustomService/>
        <DiscoverMore/>
        <AboutSlider/>
        <BlogHome/>
        <HomeCta/>
        <ToolsUsed/>
    </>
  )
}

export default Home