import styled from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const Container = styled.div `
width: 90%;
max-width: 1250px;
margin: 0 auto;
`

export const Nav = styled.nav `
  background:transparent;
  font-size:1rem;
  position:fixed;
  top:0;
  width:100%;
  z-index:10;
  display:flex;
  justify-content:center;
 

  @media screen and (max-width:960px){
    transition: 0.8 all ease
  }

`

export const NavbarContainer = styled.div `
  display: flex;
  justify-content:space-between;
  height: 80px;
  z-index:1;
  width:100%;
  padding:.6rem 0;
  align-items:center;
 
`

export const NavbarLogo = styled(LinkS)`
color:#fff;
cursor:pointer;
font-size:1.5rem;
display:flex;
font-weight:bold;
text-decoration:none;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 768px){
  display:block;
  font-size:1.8rem;
  cursor:pointer;
  color:white;
  align-items:center;
}
`

export const NavMenu = styled.ul `
  display: flex;
  align-items:center;
  list-style:none;
  text-align:center;
  margin-right:-22px;

  @media screen and (max-width: 768px){
    display:none;
  }
`

export const NavItem = styled.li `
  height: 5rem;
`

export const NavLink = styled(LinkR)`
display:flex;
align-items:center;
color:#fff;
text-decoration:none;
padding:0 2.5rem;
height: 100%;
cursor:pointer;

&.hover {
 border-bottom: 3px solid green;
}
`