import styled from 'styled-components';

export const VideoContainer = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-gap:5rem;

    @media(min-width:768px){
      grid-template-columns:repeat(2,1fr);
    }
`

export const VideoDescriptionContainer = styled.div`
    min-height:300px;


    
p{
  margin:2rem 0;
  width:98%;
  color:#fff;
  line-height:3rem;
  font-size:14px;
  @media(min-width:768px){
    width:85%;
  }
}
`
