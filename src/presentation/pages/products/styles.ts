import styled from 'styled-components';
import { Button } from '../../styles/global';

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    padding: 0 150px;
`

export const HeaderProducts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--border-color);

    h1{
        font-size: 3rem;
    }
`

export const ButtonRegisterProduct = styled(Button)`
    width: 200px;
    height: 45px;

    background-color: var(--primary-color);

    :hover{
        background-color: var(--dark-primary-color);
    }
`

export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductListItem = styled.div`
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

    border-bottom: 1px solid var(--border-color);
    transition: background-color 0.3s;

    :hover{
        background-color: rgba(0, 0, 0, 0.144);
    }

    h2{
        font-weight: 300;
        font-size: 1.2rem;
    }

    img{
        width: 50px;
        height: 50px;
    }
`

export const ButtonEdit = styled(Button)`
    width: 45px;
    height: 45px;
    background-color: var(--warning-color);
    margin-right: 10px;

    :hover{
        background-color: var(--dark-warning-color);
    }
`

export const ButtonDelete = styled(Button)`
    width: 45px;
    height: 45px;
    background-color: var(--danger-color);

    :hover{
        background-color: var(--dark-danger-color);
    }
`

export const ImagePreviw = styled.div`
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    border: 2px dashed rgba(216, 216, 216, 0.171);
    cursor: pointer;
    padding: 7px;
    

    i{
        font-size: 4rem;
    }

    h2{
        text-align: center;
        font-weight: 300;
    }

    img{
        width: 100%;
        height: 300px;
        border-radius: 10px;
    }
`