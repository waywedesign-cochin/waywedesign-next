import React from 'react'

const GlobalPresence = () => {
  return (
    <section className='global-sec'>
        <div className="container py-4">
        <h1 className='text-white py-lg-3'>Our Presence</h1>

            <div className="row align-self-center">
               
                <div className="col-md-8">
                <div className="row ">
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center text-white py-4">
                            <h2>India</h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2>Qatar</h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2>UAE </h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2> Saudi Arabia</h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2>Australia</h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2>Canada</h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2>Singapore </h2>
                        </div>
                    </div>
                    <div className="col-md-3  py-3">
                        <div className="global-card align-items-center py-4">
                            <h2>Malaysia </h2>
                        </div>
                    </div>
                    </div>
                   
                </div>
                <div className="col-md-4">
                    <div className="contactUsCard ">
                        <h5 className="text-white">Let's help you </h5>
                        <p className="text-white">
                        We are here to help and answer any questions you may have. We look forward to hearing from you.
                        </p>
                        {/* <Link to="/contact  ">
                        <button className="btn-global">Contact Us</button></Link> */}
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GlobalPresence