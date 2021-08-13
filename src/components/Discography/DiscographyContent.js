import styled from "styled-components";
import Link from "react-router-dom";


export const DiscoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
  padding: 5rem 0 2rem 0;
`;

export const MusicCardContainer = styled.div``;

export const MusicCard = styled.div`
    min-height:400px;
    background:green;
    position relative;
    border-radius:.5rem;
    background-image: url(${props => props.bgImg});
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
   overflow:hidden;
    
`;

export const MusicTitleContainer = styled.div`
  display: flex;
  background: #000;
  color:#FFA700;
  border-bottom-right-radius:.5rem;
  border-bottom-left-radius:.5rem;
  position:absolute;
  width:100%;
  padding:1rem 1.5rem;
  bottom:0;
  justify-content:space-between;
  align-items:center;
`;

export const MusicTitle = styled.p`
  font-size:1.2rem;
`;


export const PlayIcon = styled.img`
width:2.5rem;
`;

export const BgTitle = styled.h1`
 
  margin:18rem 5rem 10rem 5rem;
  
  color:#fff;
  font-size:2rem;
  @media(min-width:768px){
    font-size:5rem;
    margin:18rem 0 10rem 0;
  }
`
