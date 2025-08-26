import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './landing-page/home/HomePage';
import SignUp from './landing-page/signup/SignUp.jsx'
import AboutPage from './landing-page/about/AboutPage.jsx'
import SupportPage from './landing-page/support/SupportPage.jsx';
import Navbar from './landing-page/Navbar.jsx';
import Footer from './landing-page/Footer.jsx';
import NotFound from './landing-page/NotFound.jsx';
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
