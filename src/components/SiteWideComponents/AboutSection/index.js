import React from 'react';
import { ButtonLink } from '../Header/HeaderElements';
import {Container  } from "../NavBar/NavbarElements";
import { HashLink } from 'react-router-hash-link';

import { SectionContainer, AboutContent, AboutImgContainer, 
  AboutTextContent, AboutHeading,
   AboutText, BtnContainer } from './AboutElements';


const HomeAboutSection = () => {
  return (
    <>
      <SectionContainer>
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
              <ButtonLink to="/about">More About Me</ButtonLink>
              <ButtonLink >
                <HashLink
                className="contact"
                 exact 
                  to="/home#contact"
                >
                  Contact
                </HashLink></ButtonLink>
            </BtnContainer>
          
          </AboutTextContent>
        </AboutContent>
        </Container>

      </SectionContainer>

    </>
  )
}

export default HomeAboutSection;
