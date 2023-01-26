import React from 'react';
import styled from 'styled-components';

export const Logo = styled.h1`
    width: 9vw;
    height: 7vh;
    color: white;
    margin: 3vh 0 0 0;
    padding: 0;
    font-size: 2em;

    @media screen and (max-width: 320px) {
        font-size: 2em;
        margin: 2vh 0 0 0;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 1.8em;
    }
    @media screen and (min-width: 481px) and (max-width: 499px) {
        font-size: 1.8em;
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
        font-size: 1.8em;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        font-size: 1.8em;
        width: 7vw;
    }
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
        font-size: 2em;
        margin: 2.2vh 0 0 0;
        width: 5.5vw;
    }
    @media screen and (min-width: 1441px) {
        font-size: 2em;
        width: 3vw;
    }
`;
export const Logo2 = styled.h2`
    width: 10vw;
    height: 7vh;
    color: #c3d4ee;
    margin: 3.8vh 0 0 0;
    padding: 0;

    @media screen and (max-width: 320px) {
        font-size: 1.4em;
        display: none;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 1.6em;
        display: none;
    }
    @media screen and (min-width: 481px) and (max-width: 499px) {
        font-size: 1.6em;
        display: none;
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
        font-size: 1.4em;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        font-size: 1.6em;
    }
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
        font-size: 1.6em;
        margin: 3.1vh 0 0 0;
    }
    @media screen and (min-width: 1441px) {
        font-size: 1.6em;
    }
`;
export const Logo_div = styled.div `
    width: 20vw;
    height: 7vh;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    margin: 2vh 0 0 3vw;
    @media screen and (max-width: 320px) {
        width: 20vw;
        height: 10vh;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
    }
    @media screen and (min-width: 481px) and (max-width: 499px) {
    }
    @media screen and (min-width: 500px) and (max-width: 800px) {
        width: 50vw;
        height: 10vh;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
    }
    @media screen and (min-width: 1025px) and (max-width: 1440px) {
    }
    @media screen and (min-width: 1441px) {
    }
`;