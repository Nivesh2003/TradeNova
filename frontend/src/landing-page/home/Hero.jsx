import React from 'react'

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="./public/images/tradeNova.png" alt="hero-image" className='mb-5' height={'650px'} width={'800px'}/>
        <h1 className='mt-5'>Ready to Nova-fy Your Trades?</h1>
        <p>Experience a platform designed for modern traders.</p>
        <button className="rounded">Create an account</button>
      </div>
    </div>
  )
}

export default Hero