import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarLink,
  SidebarWrap,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {isOpen && (
        <SidebarContainer isOpen={isOpen}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrap>
            <SidebarMenu>
              <SidebarLink to="/" onClick={toggle}>
                Home
              </SidebarLink>
              <SidebarLink to="/about" onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to="/discography" onClick={toggle}>
                Discography
              </SidebarLink>
              <SidebarLink to="contact" onClick={toggle}>
                Contact
              </SidebarLink>
            </SidebarMenu>
          </SidebarWrap>
        </SidebarContainer>
      )}
    </>
  );
};

export default Sidebar;
