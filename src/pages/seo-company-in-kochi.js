import React from 'react'

const seoCompanyInKochi = () => {
  return (
    <>
            {/* <!--====== Hero Section Start ======--> */}
       <section className="hero-section-three rel z-2 pt-235 rpt-150 pb-130 rpb-100">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-11">
        <div className="hero-content-three rpt-15 rmb-75">
          <h1 className="mb-15 wow fadeInUp delay-0-2s">We’re Advanced analytics software solutions</h1>
          <p className="wow fadeInUp delay-0-4s">Sit amet consectetur adipiscing elit seddo eiusmod tempode dunt ut labore et dolore magna aliqua suspendisse</p>
          <form className="newsletter-form mt-40" action="#">
            <div className="newsletter-email wow fadeInUp delay-0-6s">
              <input type="email" placeholder="Enter Email Address" required />
              <button type="submit">Get Free Trial <i className="fas fa-arrow-right" /></button>
            </div>
            <div className="newsletter-radios wow fadeInUp delay-0-8s">
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="hero-wekly" name="example1" defaultChecked />
                <label className="custom-control-label" htmlFor="hero-wekly">Wekly Updates</label>
              </div> 
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="hero-monthly" name="example1" />
                <label className="custom-control-label" htmlFor="hero-monthly">Monthly Updates</label>
              </div> 
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="hero-image-three overlay wow fadeInLeft delay-0-4s">
          <img src="assets/images/hero/hero-three.jpg" alt="Hero" />
        </div>
      </div>
    </div>
  </div>
  <img className="dots-shape" src="assets/images/shapes/dots.png" alt="Shape" />
  <img className="tringle-shape" src="assets/images/shapes/tringle.png" alt="Shape" />
  <img className="close-shape" src="assets/images/shapes/close.png" alt="Shape" />
</section>

        {/* <!--====== Hero Section End ======--></img> */}
    
    </>
  )
}

export default seoCompanyInKochi