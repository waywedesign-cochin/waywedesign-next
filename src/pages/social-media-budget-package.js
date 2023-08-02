import React from 'react'
import  Link  from 'next/link'

const SocialMediaBudgetPackage = () => {
    return (
        <div>
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="row">
                    <h1 className=" text-center py-4">Social Media Packages
                    </h1>
                    <div className="col-md-4">
                        <div className="package" style={{ background: "#0b0fe5" }}>
                            <div className="package_title">
                                <h2>Starter</h2>

                            </div>
                            <div className="package_price">
                                <h1>₹2999
                                </h1>
                                <p>Per Month + 18% Tax
                                </p>
                            </div>
                            <div className="package_specs">
                                <h5>✓ FB Cover - 1<br></br>
                                    ✓ Creatives - 4<br></br>
                                    ✓Channel - 2<br></br>
                                    ✓Description - 4<br></br>
                                    ✓ Trending Hashtags - Yes<br></br>
                                    ✓ Insight Monitoring - No</h5>
                            </div>
                            <Link href=""><button className="package-btn">Buy Now</button></Link>
                        </div>

                    </div>
                    <div className="col-md-4">
                    <div className="package" style={{ background: "#009b77" }}>
                            <div className="package_title">
                                <h2>Intermediate
</h2>

                            </div>
                            <div className="package_price">
                                <h1>₹4999
                                </h1>
                                <p>Per Month + 18% Tax
                                </p>
                            </div>
                            <div className="package_specs">
                                <h5>✓ FB Cover - 1/Month<br></br>
✓ Creatives - 4 static + 2 Motion Poster<br></br>
✓Channel - 2<br></br>
✓Description - 6<br></br>
✓ Trending Hashtags - Yes<br></br>
✓ Insight Monitoring - Yes</h5>
                            </div>
                            <Link href=""><button className="package-btn">Buy Now</button></Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="package" style={{ background: "#ff6f61" }}>
                            <div className="package_title">
                                <h2>Advanced

</h2>

                            </div>
                            <div className="package_price">
                                <h1>₹7999
                                </h1>
                                <p>Per Month + 18% Tax
                                </p>
                            </div>
                            <div className="package_specs">
                                <h5>✓ FB Cover - 1/Month<br></br>
✓ Creatives - 6 static + 2 Motion Poster<br></br>
✓Channel - 3<br></br>
✓Description - 8<br></br>
✓ Trending Hashtags - Yes<br></br>
✓ Insight Monitoring - Yes</h5>
                            </div>
                            <Link href=""><button className="package-btn">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaBudgetPackage