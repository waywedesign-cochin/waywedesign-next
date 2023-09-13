import { request } from 'graphql-request';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Menu from '@/Components/Navbar';
import MobileMenu from '@/Components/MobileMenu';
import Footer from '@/Components/Footer';
import ServiceSideMenu from '@/Components/ServiceSideMenu';
import LatestPost from '@/Components/LatestPost';
import Script from 'next/script';

const BlogDetail = ({ blog }) => {
  const ptag = {
    textAlign: 'justify',
  };

  const router = useRouter();
  const { slug } = router.query;

  const hasMeta = blog && blog.meta;

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
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="icon" href="./assets/images/logo.png" />
  <link rel="apple-touch-icon" href="./assets/images/logo.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  <title>{blog.title}</title>
  <meta   name="description" content={ blog.smalldesc} />
  <meta   name="robots" content="index, follow" />
  <meta   name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta   name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

  <link   rel="canonical" href={blog && `https://waywedesign.com/blog/${blog.slug}`} />

  <meta   property="og:locale" content="en_US" />
  <meta   property="og:type" content="website" />
  <meta   property="og:title" content={blog.title}/>
  <meta   property="og:description" content={blog && blog.smalldesc} />
  <meta   property="og:url" content={blog && (`https://waywedesign.com/blog/${blog.slug}`)} />
  <meta   property="og:site_name" content="WayWeDesign"  />
  <meta   property="og:image" content={blog?.coverPhoto && blog.coverPhoto.url && (blog.coverPhoto.url)}  />
  <meta   property="article:publisher" content="https://www.facebook.com/waywedesign" />
  <meta   property="article:modified_time" content={blog.datePublished} />
  <meta   name="twitter:card" content="summary_large_image" />
  <meta   name="twitter:creator" content="@waywedesign" />
  <meta   name="twitter:site" content="@waywedesign" />
  <Script type="application/ld+json">
  {`{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://waywedesign.com/blog/${blog.slug}"
    },
    "headline": "${blog.title}",
    "description": "${blog && blog.smalldesc}",
    "image": "${blog?.coverPhoto && blog.coverPhoto.url}",
    "author": {
      "@type": "Organization",
      "name": "WayWeDesign",
      "url": "https://waywedesign.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Way WeDesign",
      "logo": {
        "@type": "ImageObject",
        "url": "https://waywedesign.com/assets/images/logo-wwd.png"
      }
    },
    "datePublished": "${new Date(blog.datePublished).toISOString()}",
    "dateModified": "${new Date(blog.datePublished).toISOString()}"
  }`}
</Script>


        </Head>
     

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
                 <h1 className="news-details__title" >{blog.title}</h1>
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

      <Footer />
    </motion.div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const { post } = await request(
    'https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master',
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

  return {
    props: {
      blog: post,
    },
  };
}

export default BlogDetail;
