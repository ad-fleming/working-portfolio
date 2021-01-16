import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks, 
    NavBtn,
    ResumeLink} from './NavbarElements'


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Alex Fleming</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="focus"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Focus</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    {/* <ResumeLink href="https://github.com/ad-fleming/updated-portfolio/raw/52ba77ca24f1fd8e36fc5d349cebf54fac89a17e/Alexander%20Fleming%20Resume%20Oct-2020.pdf" download="download">Download My Resume</ResumeLink> */}
                    <ResumeLink href="https://github.com/ad-fleming/working-portfolio/raw/main/Alexander%20Fleming%20Resume%202021.pdf" download="download">Download My Resume</ResumeLink>
                    </NavBtn>
                </NavbarContainer>                
            </Nav>
        </>
    )
}

export default Navbar
