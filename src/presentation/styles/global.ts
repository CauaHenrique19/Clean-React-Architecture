import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: var(--primary-font-color)
    }
    :root{
        --primary-color: #7971EA;
        --dark-primary-color: #4d4899;
        --danger-color: #DA0037;
        --dark-danger-color: #b5002e;
        --warning-color: #E7A117;
        --dark-warning-color: #ba8111;
        --background-color: #222831;
        --primary-font-color: white;
        --border-color: rgba(128, 128, 128, 0.26);
    }
    body{
        background-color: var(--background-color);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 150px 20px 150px;
`

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1.1rem;
`