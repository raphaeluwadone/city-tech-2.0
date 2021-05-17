import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from  'react-scroll';
import { Link as LinkR} from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 70%;
    height: 60%;
    background: #fff;
    display: grid;
    align-items: center;
    justify-items: end;
    padding-right: 30px;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')} 
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
` 

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    // background: blue;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 2fr;
    grid-template-rows: repeat(3, 80px)
    // text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px)
    }
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    padding: 15px 0;
    color: #000;
    cursor: pointer;
    // background: blue;

    &:hover {
        color: #01bf71;
        transition: 0.2 ease-in-out;
    }

    &.active {
        border-bottom: 4px solid #01bf71;
        color: white;
        font-weight: bolder;
    }
`

export const SideBtnWrapper = styled.div`

    color: #F88125;
    border: 1px solid #F88125;
    cursor: pointer;
    background: transparent;
    transition: 0.3s all ease-in-out;
    width: 152px;
    border-radius: 60px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    &:hover {
        background: #F88125;
        color: white;
    }

    &:active {
        transform: scale(.9);
        outline: 0;
    }
    &:focus {
        outline: 0;
    }


`
export const SideBtn = styled(LinkR)`
    text-decoration: none;
    color: inherit;
    font-family: "Roboto", "sans-serif";
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    &:hover {
        color: white;
    }

    &:active {
        transform: scale(.9);
        outline: 0;
    }
    &:focus {
        outline: 0;
    }
`
