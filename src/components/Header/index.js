import React from 'react'
// import { HeaderBackground, HeaderText, 
//   HeaderImg, HeaderImgContainer, ButtonLink } from './HeaderElements';
import { HeaderBackground, HeaderTextContainer, ButtonLink} from './HeaderElements';
import {Container} from '../NavBar/NavbarElements'
const Header = () => {
  return (
    <HeaderBackground>
    
      <Container>
      <HeaderTextContainer>
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
    </HeaderBackground>
      
  )
}

export default Header;
