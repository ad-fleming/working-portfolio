export const homeObjOne = {
    id: 'about',
    buttonTarget: 'focus',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Alex Fleming',
    headline: "Fullstack MERN Developer",
    description: "Thanks for visiting! I'm a recent graudtate of the Georgia Tech Coding Bootcamp looking to leverage a diverse and customer-centric work history to deliver quality web experiences. I strive to bring innovative ideas to life through collaborative, user-focused design and responsive development.",
    buttonLabel: "My Focus",
    imgStart: false,
    img: require('../../images/portfolio-img.jpg').default,
    alt: 'Alex Fleming Headshot',
    dark: false,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'focus',
    buttonTarget: 'portfolio',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Area of Focus',
    headline: "Here's What I'm Working On!",
    description: "Currently, I am focused on developing applications and honing my skills in the MERN stack. Here you can keep up to date as I take on more challanging and exciting projects! Don't forget to visit my contact page where you can find links to my GitHub and LinkedIn!",
    buttonLabel: "My Projects",
    imgStart: true,
    img: require('../../images/svg-1.svg').default,
    alt: 'portfolio',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'portfolio',
    buttonTarget: 'contact',
    buttonLabel: "Contact",
    dark: false,
    primary: true,
    darkText: false

}

export const homeObjFour = {
    id: 'contact',
    buttonTarget:'footer',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact',
    headline: "Let's Talk!",
    description: "I'm always interested in hearing about new opportunities, stories and advice! Please reach out to me with any questions regarding my work, or even just to chat! Together, we can do great things!",
    buttonLabel: "Get In Touch",
    imgStart: false,
    img: require('../../images/contact.svg').default,
    alt: 'Alex Fleming Headshot',
    dark: false,
    primary: false,
    darkText: true
}
