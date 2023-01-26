import styled from "styled-components";

export const Main = styled.div `
   width: 100vw;
   height: 100vh; 
   
   @media screen and (max-width: 320px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
   @media screen and (min-width: 321px) and (max-width: 480px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
   @media screen and (min-width: 481px) and (max-width: 499px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
   @media screen and (min-width: 500px) and (max-width: 800px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
   @media screen and (min-width: 801px) and (max-width: 1024px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
   @media screen and (min-width: 1025px) and (max-width: 1440px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
   @media screen and (min-width: 1441px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
   }
`;