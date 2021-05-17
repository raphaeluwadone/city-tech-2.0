import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

// import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
background: transparent;
height: 15vh;
width: 100%;
display: flex;
justify-content: center;
// margin-top: -30vh;
align-items: center;
font-size: 1rem;
position: absolute;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}

@media screen and (max-width: 768px){
    // background: white;
    height: 10vh;
}

@media screen and (max-width: 414px){

}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    align-items: center;
    max-width: 1400px;

    @media screen and (max-width: 768px){
        padding: 0;
        height: 40px;
    }
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        padding: 0;
        margin-left: 0;
        // height: 100%;
        // background: cyan;
        width: 180px;
        align-items: baseline;

        img {
            width: 100%;
        }
        
    }

`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
` 

export const NavItem = styled.li`
    height: 80px;
    cursor: pointer;

`

export const NavLinks = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-weight: 400;
    line-height: 28px;
    font-size: 24px;


    &.active {
        border-bottom: 4px solid #01bf71;
        font-weight: bolder;
    }
`

export const NavBtnWrapper = styled.div`

    color: #F88125;
    border: 2px solid #F88125;
    cursor: pointer;
    background: transparent;
    transition: 0.3s all ease-in-out;
    width: 19rem;
    border-radius: 60px;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;

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

@media screen and (max-width: 768px) {
    display: none;
}

`
export const NavBtn = styled(LinkR)`
    text-decoration: none;
    color: inherit;
    font-family: "Roboto", "sans-serif";
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.75625rem;

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
