import styled, { createGlobalStyle } from "styled-components";

type InputContainerProps = {
    inRow: Boolean
}

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: content-box;
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

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1.1rem;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

export const InputContainer = styled.div<InputContainerProps>`
    width: ${p => p.inRow ? 50 : 100}%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.inRow === false && 15}px;

    :first-child{
        margin-right: 10px;
    }
`

export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 1.5rem;
`

export const Input = styled.input`
    height: 45px;
    background-color: initial;
    outline: none;
    border: 1px solid var(--border-color);
    padding: 0 20px;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 300;

    transition: border-color 0.3s;

    :focus{
        border-color: var(--primary-color);
    }
`

export const TextArea = styled.textarea`
    background-color: initial;
    outline: none;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 300;
    resize: none;
    height: 300px;

    transition: border-color 0.3s;

    :focus{
        border-color: var(--primary-color);
    }
`

export const Select = styled.select`
    height: 45px;
    background-color: initial;
    outline: none;
    border: 1px solid var(--border-color);
    padding: 0 20px;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 300;

    transition: border-color 0.3s;

    :focus{
        border-color: var(--primary-color);
    }
`