import React from 'react';
import { ButtonLink } from '../Header/HeaderElements';
import { SectionContainer } from "../../components/AboutSection/AboutElements";
import { FeaturedHeading, FeaturedGrid, FeaturedLink, FeaturedImage } from "../FeaturedHome/FeaturedItems";
import Kaa from '../../assets/kaa.jpg';
import Gbeyo from '../../assets/gbeyo.png';
import Olufe from '../../assets/olufe.jpg';
import Bmd from '../../assets/bmd.jpg';

const Featured = () => {
  return (
    <>
    <SectionContainer>
      <FeaturedHeading>
        Featured Music
      </FeaturedHeading>
      <FeaturedGrid>
          <FeaturedLink>
            <FeaturedImage src={Kaa} alt="kaa-album-art"/>
          </FeaturedLink>
    
          <FeaturedLink>
            <FeaturedImage src={Gbeyo} alt="gbeyo-album-art"/>
          </FeaturedLink>

          <FeaturedLink>
            <FeaturedImage src={Bmd} alt="bmd-album-art"/>
          </FeaturedLink>

          <FeaturedLink>
            <FeaturedImage src={Olufe} alt="Olufe-album-art"/>
          </FeaturedLink> 
      </FeaturedGrid>
      <ButtonLink className="featuredBtn">More Music</ButtonLink>
    </SectionContainer>
    
    </>
  )
}

export default Featured
