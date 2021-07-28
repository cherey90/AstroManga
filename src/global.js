import { createGlobalStyle, createGlobalStyled } from 'styled-components';

export const GlobalStyles = createGlobalStyle `

    * {
    margin: 0;
	padding: 0;
	box-sizing: border-box;
    }

    html {
        font-family: 'Righteous', cursive;
    }

    body {
        margin: 0px;
    }

    /* body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow: hidden;
        background-color: ${({ theme }) => theme.colorPrimary} ;
    } */

    #page-wrap {
        text-align: center;
        overflow: auto;
        top: 45%;
        position: relative;
    }
`;