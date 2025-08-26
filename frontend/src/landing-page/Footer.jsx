import React from 'react';

function Footer() {
  return (
    <>
    <footer style={{backgroundColor:'rgb(250,250,250)'}}>
      {/* Main Footer Container */}
      <div className="container-fluid p-4 mt-5 border-top ">
        <div className="row align-items-center" style={{marginTop:'-70px'}}>
          
          {/* Left Side - Logo */}
          <div className="col-md-6 text-center text-md-start">
            <img src="/images/logoTN.svg" alt="TradeNova Logo" style={{ width: '40%' }} />
          </div>

          {/* Right Side - Footer Links */}
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-unstyled d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-end mb-0">
              <li><a href="/about" className="text-decoration-none text-dark">About Us</a></li>
              <li><a href="/contact" className="text-decoration-none text-dark">Contact</a></li>
              <li><a href="/support" className="text-decoration-none text-dark">Support</a></li>
              <li><a href="/careers" className="text-decoration-none text-dark">Careers</a></li>
              <li><a href="/privacy" className="text-decoration-none text-dark">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full Width Bar */}
      <div className="w-100 text-center py-3" style={{ backgroundColor: '#009245', margin: 0 ,marginTop:"-100px" ,color:'white'}}>
        <p className="mb-0">Built with ☕ & 💻 by Nivesh &copy;</p>
      </div>

      {/* Social Icons Row */}
      <div className="row align-items-center my-2 mx-0">
        <div className="d-flex gap-3 justify-content-center">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin fa-lg" style={{ color: '#0A66C2' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-lg" style={{ color: '#E4405F' }}></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github fa-lg" style={{ color: '#000' }}></i>
          </a>
          <a href="mailto:yourmail@example.com">
            <i className="fas fa-envelope fa-lg" style={{ color: '#D44638' }}></i>
          </a>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
