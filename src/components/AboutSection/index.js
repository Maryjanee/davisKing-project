import React from 'react';
import { ButtonLink } from '../Header/HeaderElements';
import {Container  } from "../NavBar/NavbarElements";

import { AboutSectionContainer, AboutContent, AboutImgContainer, 
  AboutTextContent, AboutHeading,
   AboutText, BtnContainer } from './AboutElements';


const HomeAboutSection = () => {
  return (
    <>
      <AboutSectionContainer>
        <Container>
        <AboutContent>
          <AboutImgContainer>
          </AboutImgContainer>
          <AboutTextContent>
            <AboutHeading>
              About Davis King
            </AboutHeading>
            <AboutText>
              He was born into a family of three, sandwiched between a sister 
              and a brother. He grew up listening to his father’s playlist 
              comprising of songs from King Sunny Ade, Panam 
              Percy Paul, Michael Jackson, Smokey Robinson etc.
            </AboutText>
            <BtnContainer>
              <ButtonLink>More About Me</ButtonLink>
              <ButtonLink>Contact</ButtonLink>
            </BtnContainer>
          
          </AboutTextContent>
        </AboutContent>
        </Container>

      </AboutSectionContainer>

    </>
  )
}

export default HomeAboutSection;
