import styled from 'styled-components';
import aboutImg from '../../assets/abtImage.jpg';

export const AboutSectionContainer = styled.section`
  height:auto;
  background:#1A022B;
  width:100%;
  padding:2rem 0 5rem 0;

`


export const AboutContent = styled.div`

 margin:0 auto;
 padding-top:4rem;
 width:100%;
 display:flex;
 flex-direction:column;
 grid-gap:2rem;
 grid-template-columns:1fr;


 @media(min-width: 1200px){
  padding-top:5rem;
  flex-direction:row;
  height:100%;
 
 }

`
export const AboutImgContainer = styled.div`
background: linear-gradient(
  rgba(16, 5, 80, 0.37), 
  rgba(16, 5, 80, 0.37)
), url(${aboutImg}) no-repeat center;
  
    background-size:cover;
    padding-top:42%;
    order:2;
    height:50vh;
    width:100%;
    @media(min-width:1100px){
      order:1;
      flex:1;
      background: url(${aboutImg}) no-repeat center;
      height:auto;
      
      background-size:contain;
    }

    `;

export const AboutTextContent = styled.div`
    color:#fff;
    text-align:left;
    width:100%;
    height:auto;
    order:1;
    flex:1;
`;

export const AboutHeading = styled.h2`
    font-size:2rem;
    margin:2rem 0;
    
`;

export const AboutText = styled.p `
    font-size: 18px;
    line-height:3rem;

`

export const BtnContainer = styled.div`
display:flex;
flex-direction:column;
a{
  margin-left:0;
  font-size:.9rem;
}
@media(min-width:400px){
  flex-direction:row;
  width:100%;
  flex-wrap:wrap;
}
@media(min-width:1100px){
  justify-content:space-between;
  width:60%;
}
`






 

