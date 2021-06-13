import { useState } from "react";
import DiscoHeader from "../assets/7.jpg";
import Navbar from "../components/SiteWideComponents/NavBar";
import Sidebar from "../components/SiteWideComponents/Sidebar";
import { ImageBackground } from "../components/SiteWideComponents/Header/HeaderElements";
import Footer from "../components/SiteWideComponents/Footer";
import DicographySection from "../components/Discography";
import { BgTitle } from "../components/Discography/DiscographyContent";
import { Container } from "../components/SiteWideComponents/NavBar/NavbarElements";

const Discography = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let green = "green";
  const aboutPageGradient =
    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(16, 5, 80, 0.90))";
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} bgColor={green} />
      <ImageBackground bgImg={DiscoHeader} bgGradient={aboutPageGradient}>
        <Container>
          <BgTitle>Discography</BgTitle>
        </Container>
      </ImageBackground>
      <DicographySection />
      <Footer />
    </div>
  );
};

export default Discography;
