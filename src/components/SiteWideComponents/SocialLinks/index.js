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
      <SocialMediaIconContainer>
        <SocialMediaIcon src={facebook} />
      </SocialMediaIconContainer>

      <SocialMediaIconContainer>
        <SocialMediaIcon src={instagram} />
      </SocialMediaIconContainer>

      <SocialMediaIconContainer>
        <SocialMediaIcon src={twitter} />
      </SocialMediaIconContainer>

      <SocialMediaIconContainer>
        <SocialMediaIcon src={youtube} />
      </SocialMediaIconContainer>
    </SocialLinks>
  );
};

export default SocialMedia;
