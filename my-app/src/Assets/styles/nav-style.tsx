import styled from "styled-components";

export const Nav = styled.nav `
    width: 100vw;
    height: 15vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #0f52ba;
    @media screen and (max-width: 320px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 481px) and (max-width: 499px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    @media screen and (min-width: 1441px) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
`;