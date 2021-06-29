import styled from 'styled-components';

import {Link as LinkR} from "react-router-dom";



export const ImageBackground = styled.div `
  width: 100%;
  height:100vh;
  background-image: ${props => props.bgGradient},
   url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow:hidden;
`


export const HeaderTextContainer = styled.div `
width:40%;
color:#fff;

margin-top:15rem;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:flex-start;


h1{
  font-size:4rem;
  letter-spacing:6px;
  padding:1rem 0;
}

p{
  font-size:1.4rem;
  line-height:50px;
  width: 80%;
}
@media screen and (max-width:768px){
  align-items:center;
  margin-top:19rem;
  width:90%;
  

  

  h1{
    font-size:2.4rem;
  }
  p{
    font-size:1rem;
    line-height:40px;
    width:80%;
    text-align:center;
  }
}
`

export const ButtonLink = styled(LinkR)`
  background: #FFA700;
  border-radius:4px;
  padding:1rem 1.5rem;
  width:10rem;
  text-align:center;
  margin:1rem 0;
  color:#fff;

  '&:active'{
    border-bottom:3px solid orange;
  }
  @media screen and (max-width:768px){
    margin:1rem auto;
  }
 
` 




