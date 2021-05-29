import React from 'react';
import {FaBars} from 'react-icons/fa';

import { Container, Nav, NavbarContainer, NavbarLogo, MobileIcon, NavItem, NavMenu, NavLink} from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
   <>
   <Nav>
   <Container>
     <NavbarContainer>
       <NavbarLogo to="/">davisKING</NavbarLogo>
       <MobileIcon onClick={toggle}>
         <FaBars/>
       </MobileIcon>
       <NavMenu>
           <NavItem>
             <NavLink to="/home" >Home</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/about" >About</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="/discography" >Discography</NavLink>
           </NavItem>
           <NavItem>
             <NavLink to="contact">Contact</NavLink>
           </NavItem>
         </NavMenu>
     </NavbarContainer>
     </Container> 
   </Nav>
   </>
  )
}

export default Navbar
