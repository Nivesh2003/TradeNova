import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Stats() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="container mt-4 p-5">
      <div className="row p-5">
        <div className="col-md-6 p-5">
          <h2 data-aos="fade-up">Trust with confidence</h2>
          <h4 data-aos="fade-up" className='text-muted'>Customer-first always</h4>
          <p className="mb-5 text-muted" data-aos="fade-up">TradeNova puts your trading priorities first. Thousands of traders trust our platform for fast, secure, and transparent investments.</p>

          <h2 data-aos="fade-up">No spam or gimmicks</h2>
          <h4 data-aos="fade-up" className='text-muted'>Clean and focused experience</h4>
          <p className="mb-5 text-muted" data-aos="fade-up">No unnecessary notifications, pop-ups, or gimmicks. Our platform keeps it simple so you can trade efficiently.</p>

          <h2 data-aos="fade-up">The TradeNova ecosystem</h2>
          <h4 data-aos="fade-up" className='text-muted'>More than a trading platform</h4>
          <p  className="mb-5 text-muted" data-aos="fade-up">We provide a complete ecosystem with insights, analytics, and tools that adapt to your trading style.</p>

          <h2 data-aos="fade-up">Maximize your investments</h2>
          <h4 data-aos="fade-up" className='text-muted'>Smart tools for smarter trades</h4>
          <p className="mb-5 text-muted" data-aos="fade-up">Features like advanced analytics, alerts, and portfolio insights help you make the most of your money.</p>
        </div>
        <div className="col-6 p-3">
          <img data-aos="fade-up" src="images/ecosystem.png" alt="" className='img-fluid mt-3'/>
        </div>
      </div>
    </div>
  )
}

export default Stats