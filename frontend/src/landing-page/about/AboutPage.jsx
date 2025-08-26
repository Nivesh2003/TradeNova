import React from 'react'
import '../../index.css'
function AboutPage() {
  return (
    <>
  <div className="container-fluid">
      <div className="row">
      <div className="top-section">
      {/* Coins rolling animation using CSS circles */}


      {/* Heading */}
      <h1 className="top-heading">
        Trade Smarter, Not Harder <br />
        <div className="coin coin2"></div>
        Welcome to Your Modern Trading Playground
      </h1>

      {/* Optional tagline */}
      <p className="top-subtext">
        Innovative tools, seamless experience, and insights at your fingertips.
      </p> 
      <div className="coin coin3"></div>
      </div>
      <div className="coin coin1" style={{marginTop:'300px'}}></div>
    </div> {/* Top section ends*/}

    

  </div>
    </>
  )
}

export default AboutPage