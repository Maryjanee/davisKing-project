import React from "react";
import Iframe from "react-iframe";
import { SectionContainer } from "../SiteWideComponents/AboutSection/AboutElements";
import { Container } from "../SiteWideComponents/NavBar/NavbarElements";
import {
  VideoContainer,
  VideoDescriptionContainer,
} from "./FeaturedVideoContent";

const FeaturedVideo = () => {
  return (
    <>
      <SectionContainer>
        <Container>
          <VideoContainer>
            <VideoDescriptionContainer>
              <h3 className="about-title">Featured Video</h3>
              <p>
                GBEYO is a Yoruba phrase that means ‘to show forth’ or ‘to
                manifest’. This new video, directed by ace cinematographer,
                Yinka Obebe of Redbox Studios takes you way back to the 70s yet
                still garnished with pure creativity, it is a colorful old
                school concept. The lyrics sung on a groovy beat projects the
                certainty of an eventual manifestation of the sons of God
                (Romans 8:19).
              </p>
            </VideoDescriptionContainer>
            <Iframe
             src="https://www.youtube.com/embed/NYltrPlx4Ek"
             width="100%"
             height="400px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              frameBorder="0"
            />
            ;
          </VideoContainer>
        </Container>
      </SectionContainer>
    </>
  );
};

export default FeaturedVideo;
