import React, { useState, useEffect } from 'react';

import  Link  from 'next/link';
import { request } from 'graphql-request';

const LatestPost =()=>{
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        'https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master',
        `
          {
            posts(first: 3, orderBy: datePublished_DESC) {
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
                html
              }
              smalldesc
            }
          }
        `
      );
      setPosts(posts);
    };
    fetchPosts();
  }, []);

 

    return(
        <div>
            <div className="sidebar__single sidebar__post">
            <h3 className="sidebar__title">Latest Posts</h3>
            <ul className="sidebar__post-list list-unstyled">
                {posts.map((blog,index)=>{
                              const slugLink = `/blog/${blog.slug}`;

                        return(
                            <li key={index}>
                            <div className="sidebar__post-image">
                              <img src={blog.coverPhoto.url} alt="blog cover photo" />
                            </div>
                            <div className="sidebar__post-content">
                              <h3>  
                                <a className="sidebar__post-content_meta"><i className="far fa-user-circle" />by {blog.author.name}</a>
                                <Link href={slugLink}>{blog.title}</Link>
                              </h3>
                            </div>
                          </li>
                        )
                })}
             
              
              
            </ul>
          </div>
        </div>
    )
}


export default LatestPost;