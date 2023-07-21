import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import { request } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import ServiceSideMenu from '@/Components/ServiceSideMenu';
import Menu from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import LatestPost from '@/Components/LatestPost';
import { motion } from "framer-motion";


const BlogDetail = () => {
  const ptag = {
    textAlign: "justify",
  };

  const [blog, setBlog] = useState({});
  const router = useRouter(); 
  const { slug } = router.query; 
  console.log(slug, "in blog detail")
  useEffect(() => {
    const fetchPost = async () => {
      const { post } = await request(
        "https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master",
        `{
            post(where:{slug: "${slug}"}){
              createdAt
              datePublished
              coverPhoto {
                id
                url
              }
              id
              publishedAt
              slug
              title
              author {
                name
              }
              content {
                raw
              }
              smalldesc
            }
          }`
      );
      setBlog(post);
    };
    fetchPost();
  }, [slug]);
  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}>    
    <Menu/>
    {blog?.coverPhoto && blog.coverPhoto.url && (
  <section className="news-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="news-details__left">
          <div className="news-details__img">
            <img src={blog.coverPhoto.url} alt="cover photo" />
            <div className="news-details__date-box">
              <p>{blog.datePublished}</p>
            </div>
          </div>
          <div className="news-details__content">
            <ul className="list-unstyled news-details__meta">
              <li><a href="news-details.html"><i className="far fa-user-circle" /> by {blog.author.name}</a></li>
            </ul>
            <h3 className="news-details__title" >{blog.title}</h3>
            {/* <p className="news-details__text-1"  >{blog.content.text}</p> */}
            <RichText style={ptag} content={blog.content.raw.children}/>
          </div>
          <div className="news-details__bottom">
            {/* <p className="news-details__tags">
              <span>Tags</span>
              <a href="#">Software</a>
              <a href="#">cyber</a>
            </p> */}
            <div className="news-details__social-list">
              <a href=""><i className="fab fa-twitter" /></a>
              <a href=""><i className="fab fa-facebook" /></a>
              <a href=""><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          {/* <div className="news-details__pagenation-box">
            <ul className="list-unstyled news-details__pagenation clearfix">
              <li>What is Holding Back the IT <br /> Solution Industry?</li>
              <li>What is Holding Back the IT <br /> Solution Industry?</li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="col-xl-4 col-lg-5">
        <div className="sidebar">
          <div className="sidebar__single sidebar__search">
            {/* <form action="#" className="sidebar__search-form">
              <input type="search" placeholder="Search here" />
              <button type="submit"><i className="icon-magnifying-glass" /></button>
            </form> */}
          </div>
         <LatestPost/>
          <ServiceSideMenu/>
          {/* <div className="sidebar__single sidebar__tags">
            <h3 className="sidebar__title">Tags</h3>
            <div className="sidebar__tags-list">
              <a href="#" className="thm-btn sidebar__tags-btn">Software</a>
              <a href="#" className="thm-btn sidebar__tags-btn">cyber</a>
              <a href="#" className="thm-btn sidebar__tags-btn">IT</a>
              <a href="#" className="thm-btn sidebar__tags-btn">Computing</a>
              <a href="#" className="thm-btn sidebar__tags-btn">Consulting</a>
              <a href="#" className="thm-btn sidebar__tags-btn">Business</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>
)}
<Footer/>

</motion.div>


  )
}

export default BlogDetail