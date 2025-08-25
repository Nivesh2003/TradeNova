import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="container p-5">
      {/* Hero section */}
      <div className="row text-center">
        <img data-aos="fade-up" src="/images/homeHero.png" alt="hero-image" className='hero-img mb-4'/>
        <h1 data-aos="fade-up" className='mt-4'>Ready to Nova-fy Your Trades?</h1>
        <p data-aos="fade-up">Experience a platform designed for modern traders.</p>
        <button data-aos="fade-up" className="btn btn-sm btn-green fs-5 rounded p-2 mx-auto">Create an account</button>
      </div> 

      {/* Award section */}
      <div className="row mt-5 align-items-center">
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-up">
          <img src="/images/award.png" className="img-fluid" alt="Award" />
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <h2 className='mb-3' style={{fontSize:'30px'}}>Award-Winning Trading Experience</h2>
          <p className='mb-4'>Recognized for innovation and trust, TradeNova brings you a platform where smart technology meets seamless trading.</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Lightning-fast trade execution</li>
                <li>Advanced analytics & insights</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Seamless multi-device experience</li>
                <li>Secure & reliable platform</li>
              </ul>
            </div>
          </div>
          <div className="mt-3" data-aos="fade-up">
            <img src="/images/pressLogos.png" alt="Press Logos" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
