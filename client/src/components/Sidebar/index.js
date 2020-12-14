import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarResumeRoute
} from './SidebarElements'
// import { ResumeLink } from '../Navbar/NavbarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="focus" onClick={toggle}>My Focus</SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                <SidebarResumeRoute href="https://github.com/ad-fleming/updated-portfolio/raw/52ba77ca24f1fd8e36fc5d349cebf54fac89a17e/Alexander%20Fleming%20Resume%20Oct-2020.pdf" download="download"> Download My Resume</SidebarResumeRoute>
                </SideBtnWrap>
            </SidebarWrapper> 
        </SidebarContainer>
    );
};

export default Sidebar;
