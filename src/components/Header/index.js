import React from 'react'
import headerImg from '../../assets/headerimg.jpg'
import { ImageBackground, HeaderTextContainer, ButtonLink} from './HeaderElements';
import {Container} from '../NavBar/NavbarElements'
const Header = () => {
  return (
    <ImageBackground bgImg={headerImg}>
    
      <Container>
      <HeaderTextContainer >
        <h1>Davis King</h1>
        <p>A gospel singer and writer with a
           specific
           mandate to teach people through music as inspired by God.
        </p>
        <ButtonLink to="/discography">
          Get Music
        </ButtonLink>
        
      </HeaderTextContainer>
      </Container>
    </ImageBackground>
      
  )
}

export default Header;
