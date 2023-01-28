import styled from 'styled-components';

export const ProductIndividualContainer = styled.div `
  margin: 2vh 0 0 0;
  display: grid;
  grid-template-areas:
    '. image image .'
    '. title price .'
    '. description description .'
    '. button button .';
  @media screen and (max-width: 320px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }
  @media screen and (min-width: 321px) and (max-width: 480px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }
  @media screen and (min-width: 481px) and (max-width: 499px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }
  @media screen and (min-width: 1441px) {
    grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
    grid-template-rows: 1fr 0.7fr 0.5fr 0.5fr;
  }



`;
