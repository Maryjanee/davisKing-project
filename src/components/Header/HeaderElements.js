import styled from 'styled-components';
import headerImg from '../../assets/headerimg.jpg'
import {Link as LinkR} from "react-router-dom";



export const HeaderBackground = styled.header `
width: 100vw;
height:100vh;
background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(16, 5, 80, 0.90)), url(${headerImg});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
overflow:hidden;
`

export const HeaderTextContainer = styled.div `
width:40%;
color:#fff;
position:absolute;
top:30%;
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
  margin-top:8rem;
  width:90%;
  

  h1{
    font-size:2.8rem;
  }
  p{
    font-size:1rem;
    line-height:40px;
    width:80%;
    text-align:center;
  }
}
`

export const HeaderLink = styled(LinkR)`
  background: #FFA700;
  border-radius:4px;
  padding:1rem 1.5rem;
  width:10rem;
  text-align:center;
  align-self:flex-start;
  margin:1rem 0;
  color:#fff;

  &:active{
    border-bottom:3px solid orange;
  }
  @media screen and (max-width:768px){
    margin:1rem auto;
  }
 
` 




