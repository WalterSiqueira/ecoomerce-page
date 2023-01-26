import styled from 'styled-components';

export const CartContainerComponent = styled.button `
    width: 20vw;
    height: 6vh;
    margin: 4vh 3vw 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: white;
    border: none;
    border-radius: 0.8vh;
    @media screen and (max-width: 320px) {
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
    }
    @media screen and (min-width: 481px) and (max-width: 499px) {
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
        margin: 5vh 3vw 0 0;
        width: 15vw;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        margin: 5vh 3vw 0 0;
        width: 10vw;
    }
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
        margin: 5vh 3vw 0 0;
        width: 10vw;
    }
    @media screen and (min-width: 1441px) {
        margin: 5vh 3vw 0 0;
        width: 10vw;
    }
`;
