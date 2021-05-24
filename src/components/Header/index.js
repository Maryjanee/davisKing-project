import React from 'react'
// import { HeaderBackground, HeaderText, 
//   HeaderImg, HeaderImgContainer, HeaderLink } from './HeaderElements';
import { HeaderBackground, HeaderTextContainer, HeaderLink} from './HeaderElements';
import {Container} from '../NavBar/NavbarElements'
import Navbar from '../NavBar' ;
const Header = () => {
  return (
    <HeaderBackground>
      <Navbar/>
      <Container>
      <HeaderTextContainer>
        <h1>Davis King</h1>
        <p>A gospel singer and writer with a
           specific <br/>
           mandate to teach people through music as <br/> inspired by God.
        </p>
        <HeaderLink to="/discography">
          Get Music
        </HeaderLink>
        
      </HeaderTextContainer>
      </Container>
    </HeaderBackground>
      
  )
}

export default Header;
