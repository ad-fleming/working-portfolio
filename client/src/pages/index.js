import React, {useState} from 'react';
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo,homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer/index'
// import ContactOptions from '../components/ContactOptions';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Portfolio {...homeObjThree} />
            <InfoSection {...homeObjFour}/>
            {/* <ContactOptions /> */}
            <Footer />
        </>
    )
}

export default Home;
