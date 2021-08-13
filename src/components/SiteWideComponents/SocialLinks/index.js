import React from "react";
import {
  SocialLinks,
  SocialMediaIconContainer,
  SocialMediaIcon,
} from "./SocialLinksContent";

import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import youtube from "../../../assets/youtube.svg";
const SocialMedia = () => {
  return (
    <SocialLinks>
      <SocialMediaIconContainer to="https://www.youtube.com/user/davisking4u/">
        <SocialMediaIcon src={facebook} />
      </SocialMediaIconContainer>

      <SocialMediaIconContainer to="https://www.youtube.com/user/davisking4u/">
        <SocialMediaIcon src={instagram} />
      </SocialMediaIconContainer>

      <SocialMediaIconContainer to="https://www.youtube.com/user/davisking4u/">
        <SocialMediaIcon src={twitter} />
      </SocialMediaIconContainer>

      <SocialMediaIconContainer to="https://www.youtube.com/user/davisking4u/">
        <SocialMediaIcon src={youtube} />
      </SocialMediaIconContainer>
    </SocialLinks>
  );
};

export default SocialMedia;
