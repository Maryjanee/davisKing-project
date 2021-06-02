import {Link as LinkR} from "react-router-dom";
import styled from "styled-components";

export const Heading = styled.h2 `
    font-size:2rem;
    color:white;
    width: 90%;
    margin: 0 auto;

`

export const FeaturedGrid = styled.div `
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap:.5rem;
  grid-auto-flow:dense;
  padding:1rem;
  padding:5rem 0 2rem 0;
`

export const FeaturedLink = styled(LinkR)`
    min-height:200px;
`

export const FeaturedImage = styled.img`
    width:100%;
`

