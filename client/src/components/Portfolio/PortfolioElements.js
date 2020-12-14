import styled from 'styled-components';



export const PortfolioContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0b1a1e;
    padding-bottom: 10px;

    @media screen and (max-width: 1000px) {
        height: 1250px;
    }

    @media screen and (max-width: 768px) {
        height: 1450px;
    }

    @media screen and (max-width: 480px){
        height: 1550px;
    }
`

export const PortfolioWrapper = styled.div`
    max-width: 1000px;
    max-height: 1800px;
    margin: 0 auto 32px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px 20px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const PortfolioCard = styled.div`
    background: #30343F;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 380px;
    min-height:380px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const PortfolioImage = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const PortfolioH1 = styled.h1`
    font-size: 2.5rem;
    color: #F2EFEA;
    margin-bottom: 24px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const PortfolioH3 = styled.h3`
    font-size: 1.25rem;
    color: #F2EFEA;
    margin-bottom: 12px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 1.1rem;
    }
`


export const PortfolioH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const PortfolioP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #f2efea;
`



// export const PortfolioImage = styled.img`
//     height: 160px;
//     width: 160px;
//     margin-bottom: 10px;
// `

// export const PortfolioH1 = styled.h1`
//     font-size: 2.5rem;
//     color: #F2EFEA;
//     margin-bottom: 64px;

//     @media screen and (max-width: 480px){
//         font-size: 2rem;
//     }
// `

// export const PortfolioH2 = styled.h2`
//     font-size: 1rem;
//     margin-bottom: 10px;
//     color: #F2EFEA;
// `

// export const PortfolioP = styled.p`
//     font-size: 1rem;
//     text-align: center;
//     color:#F2EFEA;
// `