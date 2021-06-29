import React from "react";
import headerImg from "../../../assets/headerimg.jpg";
import {
  ImageBackground,
  HeaderTextContainer,
  ButtonLink,
} from "../../SiteWideComponents/Header/HeaderElements";
import { Container } from "../NavBar/NavbarElements";
const Header = () => {
  const HomeGradient =
    "linear-gradient(rgba(0, 0, 0, 0.5),rgba(16, 5, 80, 0.90))";
  return (
    <ImageBackground bgImg={headerImg} bgGradient={HomeGradient}>
      <Container>
        <HeaderTextContainer>
          <h1>Davis King</h1>
          <p>
            A gospel singer and writer with a specific mandate to teach people
            through music as inspired by God.
          </p>
          <ButtonLink to="/discography">Get Music</ButtonLink>
        </HeaderTextContainer>
      </Container>
    </ImageBackground>
  );
};

export default Header;
