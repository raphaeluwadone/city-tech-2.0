import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnWrapper } from './navbarElements'
import Logo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'


function Navbar({ toggle }) {
    const location = useLocation()
    let showBtn = `${location.pathname == '/contact' ? '0' : '1'}`
    const getNavLinkClass = (path) => location.pathname.startsWith(path) ? "active" : "";
    return (
        <>
         <Nav>
            <NavbarContainer>
                <NavLogo to="/home">
                    <img src={Logo} alt="cityTech logo"/>
                </NavLogo>
                <MobileIcon >
                    <FaBars onClick={toggle}/>
                </MobileIcon>
                <NavMenu>
                    <NavItem className={`${getNavLinkClass('/home')}`}>
                        <NavLinks to="/home">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem className={`${getNavLinkClass('/about')}`}>
                        <NavLinks to="/about">
                            About Us
                        </NavLinks>
                    </NavItem>
                    <NavItem className={`${getNavLinkClass('/services')}`}>
                        <NavLinks to="/services">
                            Our Services
                        </NavLinks>
                    </NavItem>
                    <NavItem className={`${getNavLinkClass('/blog')}`}>
                        <NavLinks  to="/blog">
                            Blog
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                    <NavBtnWrapper style={{opacity: `${showBtn}`}}>
                        <NavBtn to='./contact'>
                            Request for Quote
                        </NavBtn>
                    </NavBtnWrapper>
            </NavbarContainer>
         </Nav>     
        </>
    )
}

export default Navbar
