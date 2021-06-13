import styled from 'styled-components';
import { Link } from "react-router-dom";


export const ConfirmationContainer = styled.section`
    height:100vh;
    width:100vw;
    background-image: ${props => props.bgGradient},
    url(${props => props.bgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    overflow:hidden;
    display:flex;
    justify-content: center;
    align-items:center;

    *{
      margin:1rem 0;
    }
`

export const ConfirmationCard = styled.div`
    width: 90%;
    max-width: 500px;
    margin: 0 auto; 
    background: #1a022b !important;
    padding:1rem 1.5rem;
    border-radius:.5rem;
    background:#000;
`

export const ConfirmationHeading = styled.h1`
    color:#fff;
    font-size:1.5rem 
`

export const LinkBackHome = styled(Link)`
    color: #FEA700;
    font-size:1rem; 
    
`

export const ConfirmationText = styled.p`
    color: #fff;
    font-size:1.1rem;
`

