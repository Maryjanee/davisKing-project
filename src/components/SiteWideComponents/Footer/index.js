import React from 'react';
import { SectionContainer } from '../../SiteWideComponents/AboutSection/AboutElements';
import { NavbarLogo } from '../NavBar/NavbarElements';
import {FooterItemsContainer,FooterLinksContainer, 
  FooterLink,FooterNav,FooterNavItem, FooterSocialLinks, 
  FooterSocialMediaIcon, FooterSocialMediaIconContainer,CopyrightInfoContainer,
  CopyRightIcon, CopyRightMessage } from '../../SiteWideComponents/Footer/FooterElements';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';
import youtube from '../../../assets/youtube.svg';
import copyright from '../../../assets/copyright.svg';


const Footer = () => {
  return (
    <>
    <SectionContainer className="footer-section">
     <FooterItemsContainer>
       <NavbarLogo to="/">davisKING</NavbarLogo>

       <FooterLinksContainer>
         <FooterNav>
           <FooterNavItem>
             <FooterLink to="/">
               Home
             </FooterLink>
           </FooterNavItem>
           <FooterNavItem>
             <FooterLink to="/about">
               About
             </FooterLink>
           </FooterNavItem>

           <FooterNavItem>
             <FooterLink to="/discography">
               Discography
             </FooterLink>
           </FooterNavItem>
           <FooterNavItem>
             <FooterLink to="/contact">
               Contact
             </FooterLink>
           </FooterNavItem>

         </FooterNav>
         <FooterSocialLinks>
                <FooterSocialMediaIconContainer>
                    <FooterSocialMediaIcon  src={facebook}/>
                </FooterSocialMediaIconContainer>

              <FooterSocialMediaIconContainer>
                  <FooterSocialMediaIcon src={instagram}/>
              </FooterSocialMediaIconContainer>

              <FooterSocialMediaIconContainer>
                  <FooterSocialMediaIcon src={twitter}/>
              </FooterSocialMediaIconContainer>

              <FooterSocialMediaIconContainer>
                  <FooterSocialMediaIcon src={youtube}/>
              </FooterSocialMediaIconContainer>
         </FooterSocialLinks>
      
       </FooterLinksContainer>
       <CopyrightInfoContainer>
         <CopyRightIcon src={copyright} alt="copyright-icon"/>
         <CopyRightMessage>
            2021 davisKing {" "} All rights reserved .
         </CopyRightMessage>
       </CopyrightInfoContainer>
     </FooterItemsContainer>
    </SectionContainer>
      
    </>
  )
}

export default Footer
