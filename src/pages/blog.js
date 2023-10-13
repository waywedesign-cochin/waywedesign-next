import React,{useEffect,useState} from "react";
import { motion } from "framer-motion";
import {post} from './api/api';
import Head from "next/head";
import Menu from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Breadcrumbs from "@/Components/Breadcrumbs";
import BlogCard from "@/Components/BlogCard";
import  MobileMenu  from '@/Components/MobileMenu';

const Blog = () => {
  const [posts, setPosts] = useState();
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    post().then(res=>{
      setPosts(res)
      setLoading(false);
    
      }).catch(e =>{
  console.log(e)
})
  },[])
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
        <Menu/>
        <MobileMenu />

      <Head>
      <title>Way WeDesign Blogs | Digital Marketing Trends, Tips & Insights</title>
        <meta name="description" content="Way WeDesign - Your trusted digital marketing partner offering SEO, social media ads, web development, and more. Contact us for exceptional IT/ITES solutions.
" />
         <meta   name="robots" content="index, follow" />
  <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link   rel="canonical" href="https://waywedesign.com/blog" />
  <meta   property="og:locale" content="en_US" />
  <meta   property="og:type" content="website" />
  <meta   property="og:title" content="Way WeDesign Blogs | Digital Marketing Trends, Tips & Insights" />
  <meta   property="og:description" content="Way WeDesign - Your trusted digital marketing partner offering SEO, social media ads, web development, and more. Contact us for exceptional IT/ITES solutions." />
  <meta   property="og:url" content="https://waywedesign.com/contact" />
  <meta   property="og:site_name" content="WayWeDesign" />
  <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
  <meta   property="article:modified_time" content="2023-06-05T08:16:17+00:00" />
  <meta   name="twitter:card" content="summary_large_image" />
  <meta   name="twitter:creator" content="@waywedesign" />
  <meta   name="twitter:site" content="@waywedesign" />
      </Head>
 
      <Breadcrumbs pageurl="Blog" subtitle="BLOG" />
       {!loading && <>
       <BlogCard  item={posts.posts}/> 
       </>}
       <Footer/>
    </motion.div>
  );
};

export default Blog;
