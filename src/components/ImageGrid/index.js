import React from 'react'
import { SectionContainer } from '../SiteWideComponents/AboutSection/AboutElements'
import { Container } from '../SiteWideComponents/NavBar/NavbarElements';
import {GridContainer} from './ImageGridContent'
import first from '../../assets/1.jpg';
import second from '../../assets/2.jpg';
import third from '../../assets/3.jpg';
import fourth from '../../assets/4.jpg';
import fifth from '../../assets/5.jpg';
import sixth from '../../assets/6.jpg';
import seventh from '../../assets/7.jpg';
import eighth from '../../assets/8.jpg';
import ninth from '../../assets/9.jpg';

const ImageGrid = () => {
  return (
    <>
    <SectionContainer>
      <Container>
        <GridContainer>
        <div id="item1">
          <img src={first} alt="first" />
        </div>
        <div id="item2">
          <img src={second} alt="first" />
        </div>
        <div id="item3">
          <img src={third} alt="first" />
        </div>
        <div id="item4">
          <img src={fourth} alt="first" />
        </div>
        <div id="item5">
          <img src={fifth} alt="first" />
        </div>
        <div id="item6">
          <img src={sixth} alt="first" />
        </div>
        <div id="item7">
          <img src={seventh} alt="first" />
        </div>
        <div id="item8">
          <img src={eighth} alt="first" />
        </div>
        <div id="item9">
          <img src={ninth} alt="first" />
        </div>
        
       
        </GridContainer>
      </Container>
    </SectionContainer>
      
    </>
  )
}

export default ImageGrid
