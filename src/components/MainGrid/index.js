import styled from 'styled-components'

const MainGrid = styled.main`
   display: grid;
   grid-gap: 0.75em; 	//espaçamento entre os boxes
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   max-width: 500px;
   padding-top: 1em;

.profileArea {
   display: none;
   
   img {
      border-radius: 20px;
   }
   @media(min-width: 860px) {
      display: block;
   }	
}

@media(min-width: 860px) {
   display: grid;
   grid-template-areas: "profileArea welcomeArea profileRelationsArea";
   grid-template-columns: 160px 1fr 312px;
   max-width: 1110px;
}
`;

export default MainGrid
