import React from 'react';
import '../../index.css';
function Hero() {
  return (
    <div className="container p-5">
      {/* Hero section */}
      <div className="row text-center">
        <img src="public/images/tradeNova.png" alt="hero-image" className='img-fluid mb-5' height={'650px'} width={'800px'}/>
        <h1 className='mt-5'>Ready to Nova-fy Your Trades?</h1>
        <p>Experience a platform designed for modern traders.</p>
        <button className="btn btn-sm btn-green fs-5 rounded p-2 mx-auto">Create an account</button>
      </div> 
      {/* Hero end */}
      {/* Award start */}
      <div className="row">
        <div className="col-6">
          <img src="public/images/award.png" className="img-fluid mt-5 mb-5" alt="" />
        </div>
        <div className="col-6"></div>
      </div>
      {/* Award end */}
    </div>
  )
}

export default Hero