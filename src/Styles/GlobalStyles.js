import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:  border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding: 0;
        margin: 0;
        background: linear-gradient(90deg, #CFD9DF 0%, #E2EBF0 100%);
        overflow-x: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 1025px) {
            min-height: 100vh;
        }
}
    }

    .text { 
        font-size: 2.4rem;
        font-family: 'Roboto', sans-serif;
        &--dark {
            color: #000
        }

        &--light {
            color: #fff
        }

        &--light-grey {
            color: #C4C4C4;
        }

        &--small {
            font-size: 1.8rem;
        }

        &--large {
            font-size: 3.6rem;
        }
    }
`
