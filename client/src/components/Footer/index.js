import React from 'react';
import {GiSmartphone} from 'react-icons/gi';
import {FaLinkedin, FaGithub} from 'react-icons/fa';

import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLinkEx, FooterLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer id='footer'>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Me</FooterLinkTitle>
                            <FooterLinkEx href="#" target="_blank" aria-label="Phone Number">
                                <GiSmartphone/> (678)-735-1137
                            </FooterLinkEx>
                            <FooterLinkEx href="https://www.linkedin.com/in/alexanderfleming0919/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin /> LinkedIn
                            </FooterLinkEx>
                            <FooterLinkEx href="https://github.com/ad-fleming" target="_blank" aria-label="Github">
                                <FaGithub /> GitHub
                            </FooterLinkEx>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer
