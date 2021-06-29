import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';


import {
  Container,
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NaviLink,
  NavLinkS,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <Container>
          <NavbarContainer>
            <NavbarLogo to="/">davisKING</NavbarLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NaviLink exact activeClassName="active" activeStyle={{ borderBottom: '4px solid #FEA700' }} to="/home">Home</NaviLink>
              </NavItem>
              <NavItem>
                <NaviLink exact activeClassName="active" activeStyle={{ borderBottom: '4px solid #FEA700' }} to="/about">About</NaviLink>
              </NavItem>
              <NavItem>
                <NaviLink exact activeClassName="active" activeStyle={{ borderBottom: '4px solid #FEA700' }} to="/discography">Discography</NaviLink>
              </NavItem>
              <NavItem>
                <HashLink
                className="contact"
                 exact 
                  to="/home#contact"
                >
                  Contact
                </HashLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
