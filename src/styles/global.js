import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        --primary-color: #101d47;
        --white: #fff;
    }

    body {
        font-family: "Inter", sans-serif; 
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    body, input, button {
        font-size: 1rem;
    }

    a {
        display: block;
        text-decoration: none;
    }

    button, input, strong {
        display: block;
    }

    button {
        cursor: pointer;
        border: none;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    .modal-overlay {
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.7);
    }

    .modal-content {
        position: absolute;
        width: 500px;
        background: #101d47;

        box-shadow: -6px 8px 7px -3px rgba(0, 0, 0, 0.5);
        border-radius: 4px;/*  */
        border: 1px solid #fff;
        padding: 2rem 1.5rem;
    }

   @media (max-width: 1080px) {
        .modal-content {
             width: 700px;
        }
    }

    @media (max-width: 768px) {
        .modal-overlay {
            align-items: flex-end;
        }
        .modal-content {
            height: calc(100vh - 50px);
            width: 100%;
        }
    }


    .slide-in-fwd-center {
	    -webkit-animation: slide-in-fwd-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.  940) both;
	    animation: slide-in-fwd-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-in-fwd-center {
        0% {
            -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-fwd-center {
        0% {
            -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            opacity: 1;
        }
    }

`;
