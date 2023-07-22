import React,{useEffect,useState} from "react";
import { motion } from "framer-motion";
import {post} from './api/api';
import Head from "next/head";
import Menu from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Breadcrumbs from "@/Components/Breadcrumbs";
import BlogCard from "@/Components/BlogCard";
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
      <Head>
        <title>Blog - Way WeDesign</title>
        <meta name="description" content="Blog" />
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
