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
`

export const HeaderTextContainer = styled.div `
width:40%;
color:#fff;
position:absolute;
top:30%;


h1{
  font-size:4.5rem;
  letter-spacing:8px;
  padding:1rem 0;
}

p{
  font-size:25px;
  line-height:50px;
}
`

export const HeaderLink = styled(LinkR)`
  background: #FFA700;
  border-radius:4px;
  width:25%;
  padding:1rem 1.5rem;
  margin:1rem 0;
  color:#fff;
 
` 




