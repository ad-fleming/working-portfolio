import React from 'react';
import portfolio1 from '../../images/portfolio1.png'
import portfolio2 from '../../images/portfolio2.png'
import portfolio3 from '../../images/portfolio3.png'
import { BtnWrap } from '../InfoSection/InfoElements';
import {Button} from '../ButtonElement'
import {PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioCard, PortfolioImage, PortfolioH2, PortfolioH3, PortfolioP} from './PortfolioElements'
const Portfolio = ({lightBg,id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel,primary, dark, dark2}) => {

    const handleOnlyDungeonsClick = () =>{
        window.open("https://github.com/ad-fleming/OnlyDungeons2")
    }

    const handlePlaytSafeClick = () =>{
        window.open("https://github.com/ad-fleming/Project-1")
    }

    const handleTrackerClick = () =>{
        window.open("https://github.com/ad-fleming/Workout-Tracker")
    }
    return (
        <PortfolioContainer id='portfolio'>
            <PortfolioH1>My Recent Projects</PortfolioH1>
            <PortfolioH3>You can click on the displays below to visit their GitHub Repositories!</PortfolioH3>
            <PortfolioWrapper>
                <PortfolioCard onClick={handleOnlyDungeonsClick}>
                    <PortfolioImage src={portfolio1} />
                    <PortfolioH2>Only Dungeons</PortfolioH2>
                    <PortfolioP>OnlyDungeons helps the tabletop gaming community connect and find games faster.</PortfolioP>
                </PortfolioCard>
                <PortfolioCard onClick={handlePlaytSafeClick}> 
                    <PortfolioImage src={portfolio2} />
                    <PortfolioH2>Play't Safe</PortfolioH2>
                    <PortfolioP>This app helps prevent your date from dying of either allergies or boredom! Get dinner and movide ideas in one stop.</PortfolioP>
                </PortfolioCard>
                <PortfolioCard onClick={handleTrackerClick}>
                    <PortfolioImage src={portfolio3} />
                    <PortfolioH2>WorkoutTracker</PortfolioH2>
                    <PortfolioP>This MERN App helps a single user improve their workouts by providing analytics tools to track their progress.</PortfolioP>
                </PortfolioCard>
            </PortfolioWrapper>
            <BtnWrap>
                <Button to='contact' 
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                primary={primary ? 1: 0}
                dark={dark ? 1: 0}
                dark2={dark2 ? 1: 0}
                >{buttonLabel}</Button>
            </BtnWrap>
        </PortfolioContainer>
    )
}

export default Portfolio
