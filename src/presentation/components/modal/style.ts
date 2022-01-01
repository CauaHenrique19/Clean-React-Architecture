import styled from "styled-components";
import { Button, ButtonsContainer } from "../../styles/global";

type ModalContentProps = {
    width: number;
}

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.295);
    z-index: 10;
    position: absolute;
`

export const ModalContent = styled.div<ModalContentProps>`
    width: ${p => p.width || 500}px;
    height: fit-content;

    border-radius: 5px;
    border: 1px solid var(--border-color);

    background-color: var(--background-color);
`

export const HeaderModal = styled.header`
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    border-bottom: 1px solid var(--border-color);

    h1{
        font-weight: 300;
    }
`

export const CloseButton = styled(Button)`
    width: 35px;
    height: 35px;

    background-color: initial;

    :hover{
        background-color: rgba(0, 0, 0, 0.295);
    }

    i{
        font-size: 1.5rem
    }
`

export const ModalWrapper = styled.div`
    height: 90%;
    padding: 15px;
`

export const ButtonsModalContainer = styled(ButtonsContainer)`
    margin-top: 10px;
`

export const SubmitButton = styled(Button)`
    width: 100%;
    height: 45px;

    background-color: var(--primary-color);
    margin-right: 10px;

    :hover{
        background-color: var(--dark-primary-color);
    }
`

export const CancelButton = styled(Button)`
    width: 100%;
    height: 45px;

    background-color: var(--danger-color);

    :hover{
        background-color: var(--dark-danger-color);
    }
`