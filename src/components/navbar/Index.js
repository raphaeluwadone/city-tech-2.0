import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnWrapper } from './navbarElements'
import Logo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'


function Navbar({ toggle }) {
    const location = useLocation()
    let showBtn = `${location.pathname == '/contact' ? '0' : '1'}`
    return (
        <>
         <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <img src={Logo} alt="cityTech logo"/>
                </NavLogo>
                <MobileIcon >
                    <FaBars onClick={toggle}/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">
                            About Us
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/services">
                            Our Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
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
