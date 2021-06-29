import React,{useState}from 'react'
import HomeAboutSection from '../components/SiteWideComponents/AboutSection/index';
import Contact from '../components/Contact';
import Countdown from '../components/CountDownTimer/';
import Featured from '../components/FeaturedHome';
import Footer from '../components/../components/SiteWideComponents/Footer';
import Header from '../components/SiteWideComponents/Header';

import Navbar from '../components/SiteWideComponents/NavBar';
import Sidebar from '../components/SiteWideComponents/Sidebar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Header/>
      <HomeAboutSection/>
      <Featured/>
      <Countdown/>
      <Contact onClick={() => window.location.replace("/#about")}/>
      <Footer/>
      
       
    </>
  )
}

export default Home
