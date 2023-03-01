import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: 'Roboto', sans-serif;
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${(props) => props.theme.background};
    }

    .myCustomToast {
        @media (max-width: 1024px) {
            width: 70%;
            right: 0;
            left: auto;
        }
    }
    `;
