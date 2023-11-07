import Link from 'next/link'
import React from 'react'

const DiscoverMore = () => {
  return (
    <div>
        {/*Share The Joy Start*/}
        <section className="share-the-joy">
          <div className="share-the-joy__inner">
           
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="share-the-joy__left">
                    <h2 className="share-the-joy__title">
                    We offer end-to-end solutions to grow and manage your digital presence.

                    </h2>
                    <Link href="contact" className="share-the-joy__btn thm-btn">
                      Contact Us
                    </Link>
                    <div className="share-the-joy__shape-1">
                      <img
                        src="/assets/images/share-the-joy-shape-1.png"
                        alt="joy shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="share-the-joy__right">
                    <div className="share-the-joy__image-box">
                      <div
                        className="share-the-joy__image wow fadeInRight"
                        data-wow-duration="1500ms"
                      >
                        
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/*Share The Joy End*/}

    </div>
  )
}

export default DiscoverMore