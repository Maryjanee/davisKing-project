import styled from "styled-components";

export const FeaturedHeading = styled.h2 `
    font-size:2rem;
    color:white;
`

export const FeaturedGrid = styled.div `
  display:grid;
  grid-template-columns: repeat(autofit, minmax(240px, 1fr));
  grid-gap:1rem;
  grid-auto-flow:dense;
  padding:1rem;

  .box{
    background:green;
    min-height:140px;
  }
`

