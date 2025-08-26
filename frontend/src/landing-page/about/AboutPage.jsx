import React, { useEffect } from 'react'
import '../../index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="top-section">

            {/* Falling coins */}
            <div className="coin coin1"></div>
            <div className="coin coin2"></div>
            <div className="coin coin3"></div>

            {/* Heading */}
            <h1 className="top-heading">
              Trade Smarter, Not Harder <br />
              Welcome to Your Modern Trading Playground
            </h1>

            {/* Tagline */}
            <p className="top-subtext">
              Innovative tools, seamless experience, and insights at your fingertips.
            </p>
          </div>
        </div>
        {/* NEw row */}
        <div className="row mt-2 p-5">
          <div className="col-6 p-5" data-aos='fade-right'>
            <h3 className='fs-4'>Why TradeNova?</h3>
            <p className='text-muted'>I created TradeNova as a way to combine my passion for technology with the world of trading. While exploring stock platforms, I noticed that most of them felt either too complex for beginners or too plain for modern traders. That’s when the idea clicked—to build something clean, intuitive, and engaging.</p>
            <h3 className='fs-4'>Our Aim</h3>
            <p className='text-muted'>TradeNova isn’t just another project—it’s my attempt to create a platform that simplifies trading while still feeling powerful. My goal is to design an experience that’s visually appealing, easy to use, and educational for anyone who wants to explore financial markets.</p>
             <h3 className='fs-4'>What This Project Means</h3>
            <p className='text-muted'>
            For me, this application is more than just code; it’s a learning journey. It represents how I can take an idea, apply what I’ve learned in frontend and backend development, and shape it into something real. Through TradeNova, I aim to showcase not just features, but the dedication and creativity that go into building a modern web application.</p>
          </div>
          <div className="col-6 p-5">
            <img src="/images/about-i.png" alt="" className='img-fluid' data-aos='fade-left'/>
          </div>
        </div>

        {/* New row */}
        <div className="row mt-4 border-top">
          <h1 className='fs-1 text-center top-heading' >Creator</h1>
        </div>
        <div className="row mt-2 p-5">
          <div className="col-6 p-5 text-center">
          <img src="/images/nivesh.jpeg" alt="" className='img-fluid w-50' style={{borderRadius:'100%'}} data-aos='fade-right'/>
          <h4 className='text-muted fw-light mt-3'>Nivesh Chaudhary</h4>
          </div>
          <div className="col-6 p-5">
            <p data-aos='fade-left'>Nivesh is a passionate developer with a love for building creative and impactful web applications. 
              With a strong foundation in frontend and backend development, he not only designed the user interface of TradeNova 
              but also built the core functionality from scratch.</p>
            <p data-aos='fade-left'>Driven by curiosity and a desire to learn by doing, Nivesh took this project as an opportunity to 
              combine modern design with practical development skills. TradeNova reflects his dedication to crafting smooth user experiences, 
              exploring innovative ideas, and continuously growing as a developer.</p>
              <p data-aos='fade-left'>Contact him <a href="" style={{textDecoration:'none',color:'green',fontWeight:'bold'}}>LinkedIn</a> <a href="" style={{textDecoration:'none',color:'green',fontWeight:'bold'}}>Instagram</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
