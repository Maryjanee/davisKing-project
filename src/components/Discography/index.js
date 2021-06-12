import React from "react";
import { SectionContainer } from "../SiteWideComponents/AboutSection/AboutElements";
import { Container } from "../SiteWideComponents/NavBar/NavbarElements";
import { DiscoGrid, MusicCard, MusicArt, MusicTitleContainer, MusicTitle, PlayIcon } from "./DiscographyContent";
import PlayBtn from '../../assets/play-button.svg'
import Olufe from "../../assets/olufe.jpg";
import Gbeyo from "../../assets/gbeyo.png";
import Kaa from "../../assets/kaa.jpg";
import Juwosoke from "../../assets/juwosoke.jpg";
import Sil from "../../assets/sil.jpg";
import Bmd from "../../assets/bmd.jpg";


const DicographySection = () => {
  return (
    <main>
      <SectionContainer>
        <Container>
          <DiscoGrid>
            <MusicCard bgImg={Olufe}>
              <MusicTitleContainer>
                <MusicTitle>Olufeakanmi</MusicTitle>
                <PlayIcon src={PlayBtn}/>
              </MusicTitleContainer>
            </MusicCard>
            <MusicCard bgImg={Gbeyo}>
              <MusicTitleContainer>
                <MusicTitle>Gbeyo</MusicTitle>
                <PlayIcon src={PlayBtn}/>
              </MusicTitleContainer>
            </MusicCard>
            <MusicCard bgImg={Juwosoke}>
              <MusicTitleContainer>
                <MusicTitle>Juwosoke</MusicTitle>
                <PlayIcon src={PlayBtn}/>
              </MusicTitleContainer>
            </MusicCard>
            <MusicCard bgImg={Sil}>
              <MusicTitleContainer>
                <MusicTitle>So In Love</MusicTitle>
                <PlayIcon src={PlayBtn}/>
              </MusicTitleContainer>
            </MusicCard>
            <MusicCard bgImg={Bmd}>
              <MusicTitleContainer>
                <MusicTitle>Brighten My Day</MusicTitle>
                <PlayIcon src={PlayBtn}/>
              </MusicTitleContainer>
            </MusicCard>
            <MusicCard bgImg={Kaa}>
              <MusicTitleContainer>
                <MusicTitle>Kaa</MusicTitle>
                <PlayIcon src={PlayBtn}/>
              </MusicTitleContainer>
            </MusicCard>
            

          </DiscoGrid>
        </Container>
      </SectionContainer>
    </main>
  );
};

export default DicographySection;
