import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { request } from 'graphql-request';
import Link from "next/link";
import Head from "next/head";
import Breadcrumbs from '@/Components/Breadcrumbs';
import Menu from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import MobileMenu from '@/Components/MobileMenu';
import lead from '@/pages/lead-generation'


const Careers = () => {
  const [jobPost, setJobPost] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await request(
        'https://api-ap-south-1.hygraph.com/v2/clhhc2dwb0yb901t98vga8v5n/master',
        `{
            jobs{
              jobCategory
              jobLocation
              jobDescription {
                html
              }
              jobTitle
              jobType
              link
            }
          }
        `
      );
      setJobPost(response.jobs);
    };

    fetchPosts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Menu />
      <MobileMenu />

      <Head>
        <title>Careers - Way WeDesign</title>
        <meta name="description" content="Careers" />
      </Head>

      <Breadcrumbs pageurl="careers" subtitle="CAREERS" />
      <div className="container">
        <div className="row">
          {jobPost && jobPost.map((post, index) => {
            const slugLink = `/careers/${post.link}`; // Update this line
            return (
              <div className="col-md-4 py-3">
                <div className="card p-4" index={index}>

                  <h5><b>{post.jobTitle}</b></h5>
                  <br></br>
                  <h6>{post.jobCategory}</h6>
                  <br></br>
                  <h6>{post.jobType}</h6>
                  <br></br>
                  <h6>{post.jobLocation}</h6>
                  <br></br>
                  <Link href={slugLink} >More Details <i className="fas fa-long-arrow-alt-right"></i></Link>
                </div>


              </div>

            )

          })}

        </div>

      </div>
      <Footer />
    </motion.div>
  );
};

export default Careers;
