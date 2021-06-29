import styled from 'styled-components';


export const GridContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto auto;
  


 img{
   width:100%;
   height:100%;
   object-fit:cover;
 }

 #item1{
   grid-column:1 / span 2;
  
   
 }
 #item2{
  grid-column:3 / -1;
}
#item3{
  grid-row: 2/ -1;
}
#item4{
 grid-column:2;
 grid-row:2 /-1;
}

#item5{
    grid-column:3;
     grid-row:2;
 }
#item6{
  grid-column:3;
  grid-row:3;
}
#item7{
  grid-column:4;
     grid-row:2 / -1;
 }
 #item8{
  grid-column: 5;
  grid-row: 2;
 }
 #item9{
  grid-column: 5;
  grid-row: 3;
 }

`;