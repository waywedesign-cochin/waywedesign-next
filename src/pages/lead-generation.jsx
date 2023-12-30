import React, { useEffect, useState, useRef  } from 'react';
import {useRouter} from 'next/router';
import { request } from 'graphql-request';
import { motion } from 'framer-motion';
import { RichText } from '@graphcms/rich-text-react-renderer';
import emailjs from '@emailjs/browser';
import Head from "next/head";
import  Breadcrumbs  from '@/Components/Breadcrumbs';
import  Menu  from '@/Components/Navbar';
import  Footer  from '@/Components/Footer';
import MobileMenu from '@/Components/MobileMenu';

const JobDetails = () => {

    const ptag = {
        textAlign:"justify",
 }
  const [jobPost, setJobPost] = useState({});
  const router = useRouter(); 
  const { link } = router.query;
 console.log()
  useEffect(() => {
    const fetchJob = async () => {
      const response = await request(
        'https://api-ap-south-1.hygraph.com/v2/clhhc2dwb0yb901t98vga8v5n/master',
        `
        {
          job(where: { link: "${link}" }) {
            jobCategory
            jobLocation
            jobDescription {
              raw
            }
            jobTitle
            jobType
            link
          }
        }
        `
      );
      setJobPost(response.job);
    };
    fetchJob();
  }, [link]);

  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
  >
    <Head>
      <title>Careers - Way WeDesign</title>
      <meta name="description" content="Careers" />
    </Head>
    <Menu/>
    <MobileMenu />

{jobPost&&     <Breadcrumbs pageurl={link} subtitle={jobPost.jobTitle} />
}
<div className="container">
        <div className="row">
            <div className="col-md-6">
                <br></br>
            <h2>{jobPost.jobTitle}</h2>
            <br></br>
            
  <RichText className={ptag} content={jobPost.jobDescription.raw.children}/>
            </div>
            <div className="col-md-6">
              <h3 className="pt-4">Apply For This Job</h3>
            <form
              action="/careers"

                enctype="multipart/form-data"
                name="careersForm"
                method="post"
                className="comment-one__form contact-form-validated pt-2"
                 onSubmit="true"                  
                >
                  <div className="row">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="comment-form__input-box">
                        <input
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 py-2">
                      <div className="comment-form__input-box">
                        <label htmlFor="">Upload Your Resume</label><br></br>
                        <input
                          type="file"
                          placeholder="Upload"
                          accept="application/pdf,application/msword,
                          application/vnd.openxmlformats-officedocument.wordprocessingml.document"                          name="upload"
                          required
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Write Message"
                          defaultValue={""}
                        />
                      </div>
                      <button 
                        type="submit"
                       
                        className="thm-btn comment-form__btn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
     
    </div>
    <Footer/>
    </motion.div>
  );
};

export default JobDetails;