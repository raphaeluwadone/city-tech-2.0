import React from 'react'
import { useLocation } from 'react-router-dom'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrapper, SideBtn } from './sidebarElements'


function Sidebar({isOpen, toggle}) {

    const location = useLocation()
    let showBtn = `${location.pathname == '/contact' ? '0' : '1'}`
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/home">
                        Home
                    </SidebarLink>
                    <SidebarLink to="./about">
                        About
                    </SidebarLink>
                    <SidebarLink to="/services">
                        Our Services
                    </SidebarLink>
                    <SidebarLink to="/blog">
                        Blog
                    </SidebarLink>
                    <SideBtnWrapper style={{opacity: `${showBtn}`}}>
                        <SideBtn to='/contact'>
                            Contact Us
                        </SideBtn>
                    </SideBtnWrapper>
                </SidebarMenu>
            </SidebarWrapper>  
        </SidebarContainer>
    )
}

export default Sidebar
