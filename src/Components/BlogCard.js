import React from 'react';
import Link from 'next/link';

const BlogCard = ({ item }) => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          {item.map((items, index) => {
            // Construct the slug link for each item
            const slugLink = `/blog/${items.slug}`;
           

            return (
              <div
                data-aos="slide-up"
                key={index}
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                {/* News One Single */}
                <div className="news-one__single">
                  <div className="news-one__img">
                    {items.coverPhoto && (
                      <img src={items.coverPhoto.url} alt="blog cover image" />
                    )}
                    {items.slug ? (
                      <Link href={slugLink}>
                        <span className="news-one__plus" />
                      </Link>
                    ) : null}
                  </div>
                  <div className="news-one__content">
                    <ul className="list-unstyled news-one__meta">
                      {items.author && (
                        <li>
                          <a>
                            <i className="far fa-user-circle" /> by{' '}
                            {items.author.name}
                          </a>
                        </li>
                      )}
                    </ul>
                    <h3 className="news-one__title">
                      {items.slug ? (
                        <Link href={slugLink}>{items.title}</Link>
                      ) : (
                        <>{items.title}</>
                      )}
                    </h3>
                    <p className="news-one__text">{items.smalldesc}</p>
                    {items.slug ? (
                      <div className="news-one__read-more">
                        <Link href={slugLink} className="news-one__read-more-btn">
                          Read More
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogCard;
