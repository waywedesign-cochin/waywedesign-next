import React,{useState } from 'react'

const FeatureTab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <div>
        <div className=" featureTabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Discovery Phase
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Keyword Research
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Ad Creation
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Landing Page Optimization
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Campaign Management
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          Reporting and Analysis
        </button>
       
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         
          <p>
          We begin by doing a thorough discovery phase during which we find out about the client's business, target market, and marketing objectives. In order to understand their target audience and develop a thorough strategy that is in line with their company objectives, we review the available data and analytics.

          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
          <p>
          We perform thorough keyword research to identify relevant keywords and phrases that potential customers are using to search for products or services similar to the client's business.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          
          <p>
          Our skilled team of copywriters and designers produce interesting and attractive advertisements that capture the interest of potential clients and motivate them to take action..
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          
          <p>
          We optimize the client's landing pages to ensure they are relevant to the ad and provide a seamless user experience. This helps increase the chances of visitors converting into leads or customers.
          </p>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          
          <p>
          To guarantee that campaigns are optimized for the best outcomes, our staff continuously evaluates and modifies them based on data and performance indicators. We automate and streamline our operations using cutting-edge technology and tools, which frees up our time so we can devote it to providing our clients with excellent outcomes.
          </p>
        </div>
        <div
          className={toggleState === 6 ? "content  active-content" : "content"}
        >
          
          <p>
          We provide regular reports and analysis to clients, so they can see the impact of their Google Ads campaigns and how they are contributing to their overall business goals. We also provide insights and recommendations for future campaigns based on data and performance metrics.          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default FeatureTab