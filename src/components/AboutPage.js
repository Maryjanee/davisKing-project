import React from "react";
import { ButtonLink } from "./SiteWideComponents/Header/HeaderElements";
import { Container } from "./SiteWideComponents/NavBar/NavbarElements";
import SocialMedia from "./SiteWideComponents/SocialLinks/index";

import {
  SectionContainer,
  AboutContent,
  AboutImgContainer,
  AboutTextContent,
  AboutHeading,
  AboutText,
  BtnContainer,
} from "./SiteWideComponents/AboutSection/AboutElements";

const MainAboutSection = () => {
  return (
    <>
      <SectionContainer>
        <Container>
          <AboutContent>
            <AboutImgContainer>
            
            </AboutImgContainer>
            <AboutTextContent>
              <h2 className="about-title">Davisking Bio</h2>
              <AboutText>
                davisKING is a gospel singer and writer with a specific mandate
                to teach people through music as inspired by God. He was born
                into a family of three, sandwiched between a sister and a
                brother. He grew up listening to his father’s playlist
                comprising of songs from King Sunny Ade, Panam Percy Paul,
                Michael Jackson, Smokey Robinson etc. Davis has had it coming
                musically since his early days in the choir. He has been a
                member of several bands like the Battle Axe.
              </AboutText>
              <AboutText>
                His first recording was in 2002. He graduated as a medical
                doctor from the University of Ilorin Teaching Hospital, Nigeria.
                Even though he still practices medicine, he sings actively and
                with passion. He is unique for his versatility as he explores
                all genres of music.
              </AboutText>
              <BtnContainer>
                <ButtonLink onClick={() => window.location.replace("/#contact")}>Contact</ButtonLink>
              </BtnContainer>
              <SocialMedia/>
            </AboutTextContent>
          </AboutContent>
        </Container>
      </SectionContainer>
    </>
  );
};

export default MainAboutSection;
