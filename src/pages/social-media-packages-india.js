import React from 'react'
import  Link  from 'next/link'

const SocialMediapackagesIndia = () => {
    return (
        <div>
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="row">
                    <h1 className=" text-center py-4">Social Media Packages
                    </h1>
                    <div className="col-md-4">
                        <div className="package" style={{ background: "#17924b" }}>
                            <div className="package_title">
                                <h2>Basic
</h2>

                            </div>
                            <div className="package_price">
                                <h1>₹10000

                                </h1>
                                <p>Per Month 
                                </p>
                            </div>
                            <div className="package_specs">
                                <h5>✓ FB Cover - 1/Month<br></br>
✓ Creatives - 6 static + 2 Motion Poster<br></br>
✓Channel - 2<br></br>
✓Description - 8<br></br>
✓ Trending Hashtags - Yes<br></br>
✓ Newsfeed - Yes<br></br>
✓ Insight Monitoring - Yes<br></br>
✓ Google Ads - Management - Yes<br></br>
✓ Google My Business (GMB) - Yes<br></br>
✓ Native Ads -Management - No</h5>
                            </div>
                            <Link href=""><button className="package-btn">Buy Now</button></Link>
                        </div>

                    </div>
                    <div className="col-md-4">
                    <div className="package" style={{ background: "#d826ef" }}>
                            <div className="package_title">
                                <h2>Intermediate
</h2>

                            </div>
                            <div className="package_price">
                                <h1>₹15000

                                </h1>
                                <p>Per Month
                                </p>
                            </div>
                            <div className="package_specs">
                                <h5>✓ FB Cover - 1/Month/Channel<br></br>
✓ Creatives - 7 static + 5 Motion Poster<br></br>
✓Channel - 3<br></br>
✓Description - 12<br></br>
✓ Trending Hashtags - Yes<br></br>
✓ Newsfeed - Yes<br></br>
✓ Insight Monitoring - Yes<br></br>
✓ Google Ads - Management - Yes<br></br>
✓ Google My Business (GMB) - Yes<br></br>
✓ Native Ads -Management - Yes</h5>
                            </div>
                            <Link href=""><button className="package-btn">Buy Now</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="package" style={{ background: "#4796e5" }}>
                            <div className="package_title">
                                <h2>Advanced

</h2>

                            </div>
                            <div className="package_price">
                                <h1>₹20000

                                </h1>
                                <p>Per Month
                                </p>
                            </div>
                            <div className="package_specs">
                                <h5>✓ FB Cover - 1/Month/Channel<br></br>
✓ Creatives - 10 static + 10 Motion Poster<br></br>
✓Channel - 3<br></br>
✓Description - 20<br></br>
✓ Trending Hashtags - Yes<br></br>
✓ Newsfeed - Yes<br></br>
✓ Insight Monitoring - Yes<br></br>
✓ Google Ads - Management - Yes<br></br>
✓ Google My Business (GMB) - Yes<br></br>
✓ Native Ads -Management - Yes</h5>
                            </div>
                            <Link href=""><button className="package-btn">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediapackagesIndia