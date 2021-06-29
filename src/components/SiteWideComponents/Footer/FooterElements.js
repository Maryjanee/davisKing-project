import styled from  'styled-components';
import {Link as LinkR} from "react-router-dom";


export const FooterItemsContainer = styled.div`
  width:90%;
  margin:1rem auto;
  color:#fff;
  @media(min-width:992px){
    display:flex;
    align-items:flex-end;
    justify-content:space-between;
    
  }
`

export const FooterLinksContainer = styled.div`

 

`

export const FooterNav = styled.ul`
margin:3rem 0;
@media(min-width:992px){
  display:flex;
  margin-left:4rem;
  
}
`

export const FooterNavItem = styled.li`
@media(min-width:992px){
  margin: 0 1.5rem;
  
}
`

export const FooterLink = styled(LinkR)`
color:#fff;
margin:1.5rem 0

`

export const FooterSocialLinks = styled.div`
  display:flex;
  @media(min-width:992px){
    margin-left:8rem;
    
  }
 
 
  
`
export const FooterSocialMediaIconContainer = styled(LinkR)`
  margin:1rem 1.5rem 0 0;
  @media(min-width:992px){
    padding:0 1rem 0 1rem;
  }
`

export const FooterSocialMediaIcon = styled.img`
  width:1rem;
`
export const CopyrightInfoContainer = styled.div`
  display:flex;
  align-items:center;
  margin:2rem 0;
  @media(min-width:992px){
    margin:0;
  }
`

export const CopyRightIcon = styled.img`
    width:1rem;
`
export const CopyRightMessage = styled.p`
  font-size:.8rem;
  margin:0 0 0 1rem;

`