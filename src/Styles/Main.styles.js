import styled from "styled-components";
import Main from "../Components/Main";

export const StyledMain= styled(Main)`
    max-width: 144rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    @media (max-width: 550px) {
        padding: 0 1rem;
    }

    form {
        @media (max-width: 1024px) {
            margin-top: 10rem;
        }
    }

    .form-text {
        margin-bottom: 1rem;
        @media (max-width: 550px) {
            text-align: center;
        }
    }

    label {
        position: absolute;
        left: -100%;
    }

    input {
        padding-left: 2rem;
        border: none;
        max-width: 40rem;
        height: 6.9rem;
        background: #EEE;
            &::placeholder {
                color: #C4C4C4;
            }

            @media (max-width: 550px) {
            width: 100%;
            }
    }

    button {
        border: none;
        background: #4182A9;
        padding: 2rem;
        cursor: pointer;
            &:hover {
                background: #5F9EC5;
            }
        
            @media (max-width: 550px) {
            width: 100%;
            }
    }

    .total-cals {
        margin: 3rem 0;
        text-align: center;
    }

    section {
        width: 100%;
    }

    .meal-container {
        display: flex;
        justify-content: center;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;
        }
    }

    .meal {
        position: relative;
        margin-left: 2rem;
        &:first-child {
            margin-left: 0;
        }

        @media (max-width: 1024px) {
                width: 100%;
                max-width: 40rem;
                margin-bottom: 5rem;
            }

        @media (max-width: 550px) {
                margin-left: 0;
            }

        &__info {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 5rem;
            width: 100%;
            display: flex;
            align-items: center;
            background: #4182A9;
        }

        &__info__title {
            padding-left: 1rem;
        }

        &__img {
            @media (max-width: 1024px) {
                width: 100%;
            }
        }
    }
`