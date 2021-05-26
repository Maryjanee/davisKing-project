import React from 'react';
import { CloseIcon, SidebarContainer, Icon, SidebarLink, SidebarWrap, SidebarMenu } from './SidebarElements';

const Sidebar = () => {
  return (
    <> 
    <SidebarContainer>
      <Icon>
       <CloseIcon/>
      </Icon>

      <SidebarWrap>
    <SidebarMenu>
      <SidebarLink to="/">
        Home
      </SidebarLink>
     
      
      <SidebarLink to="/">
        About
      </SidebarLink>
      <SidebarLink to="/discography">
        Discography
      </SidebarLink>
      <SidebarLink to="contact">
        Contact
      </SidebarLink>
    </SidebarMenu>
    </SidebarWrap>
      
    </SidebarContainer>

    
    </>
  )
};

export default Sidebar;
