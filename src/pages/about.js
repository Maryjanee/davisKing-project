import React, { useState } from "react";
import AboutHeader from "../assets/aboutpage.jpg";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { ImageBackground } from "../components/Header/HeaderElements";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let green = "green";
  const aboutPageGradient =
    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(16, 5, 80, 0.90))";
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} bgColor={green} />
      <ImageBackground
        bgImg={AboutHeader}
        bgGradient={aboutPageGradient}
      ></ImageBackground>
    </>
  );
};

export default About;
