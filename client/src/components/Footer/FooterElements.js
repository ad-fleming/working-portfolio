import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: #16353C;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @meida screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: center;
    width: 160px;
    box-sizing: border-box;
    color: #F2EFEA;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    text-align: center;
`
export const FooterLinkEx = styled.a`
    color: #F2EFEA;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 18px;

    @:hover {
        color: #245151;
        transition: 0.3s ease-out
    }
`

export const FooterLink = styled(Link)`
    color: #F2EFEA;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    @:hover {
        color: #245151;
        transition: 0.3s ease-out
    }
`
