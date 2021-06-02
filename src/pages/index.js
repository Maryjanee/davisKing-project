import React,{useState}from 'react'
import HomeAboutSection from '../components/AboutSection';
import Contact from '../components/Contact';
import Countdown from '../components/CountDownTimer/';
import Featured from '../components/FeaturedHome';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar'

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
      <Contact/>
      <Footer/>
      
       
    </>
  )
}

export default Home
