import React, { useState } from "react";
import AboutHeader from "../assets/aboutpage.jpg";
import Navbar from "../components/SiteWideComponents/NavBar";
import Sidebar from "../components/SiteWideComponents/Sidebar";
import {
  HeaderTextContainer,
  ImageBackground,
} from "../components/SiteWideComponents/Header/HeaderElements";
import MainAboutSection from "../components/AboutPage";
import Footer from "../components/SiteWideComponents/Footer";
import ImageGrid from "../components/ImageGrid";
import FeaturedVideo from "../components/FeaturedVideo";
import { Container } from "../components/SiteWideComponents/NavBar/NavbarElements";
import { MainAboutHeaderContainer,MainAboutHeading, MainAboutQuote, QuoteAuthor } from "../components/SiteWideComponents/AboutSection/AboutElements";

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
      <ImageBackground bgImg={AboutHeader} bgGradient={aboutPageGradient}>
        <Container>
          <MainAboutHeaderContainer>
            <MainAboutHeading className="about-title">
             Favourite Quote
            </MainAboutHeading>
            <MainAboutQuote>
              “Music expresses that which cannot be put into words and that
              which cannot remain silent.”
            </MainAboutQuote>
            <QuoteAuthor>
              Victor Hugo
            </QuoteAuthor>
          </MainAboutHeaderContainer>
        </Container>
      </ImageBackground>
      <MainAboutSection />
      <ImageGrid />
      <FeaturedVideo />
      <Footer />
    </>
  );
};

export default About;
