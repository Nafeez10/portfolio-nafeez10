import menuSvg from './menu-svg.svg'
import homeSvg from './home-svg.svg'
import profilePic from './profilePic.jpeg'
import homeSecPic from './home-sec-pic.png'
import linkedinLogo from './linkedin-logo.svg'
import whatsappLogo from './whatsapp-logo.svg'
import githubLogo from './github-logo.svg'
import resumeSvg from './resume-svg.svg'
import arrowSvg from './arrow-svg.svg'
import sendSvg from './send-svg.svg'
import medalSvg from './medal-svg.svg'
import suitcaseSvg from './suitcase-svg.svg' 
import emailSvg from './email-svg.svg'
import linkArrowSvg from './link-arrow-svg.svg'
import closeSvg from './close-svg.svg'
import userSvg from './user-svg.svg'
import filesSvg from './files-svg.svg'
import skillsSvg from './skills-svg.svg'
import contactSvg from './contacts-svg.svg'
import darkModeSvg from './darkmode-svg.svg'
import lightModeSvg from './lightmode-svg.svg'
import linkSvg from './link-svg.svg'
import hirelyImg from './hirely.png'
import hirelyImg1 from './hirely-1.png'
import hirelyImg2 from './hirely-2.png'
import hirelyImg3 from './hirely-3.png'
import hirelyImg4 from './hirely-4.png'
import hirelyImg5 from './hirely-5.png'
import hirelyImg6 from './hirely-6.png'
import coinChroniclesImg1 from './coinChronicles-1.png'
import coinChroniclesImg2 from './coinChronicles-2.png'
import coinChroniclesImg3 from './coinChronicles-3.png'
import coinChroniclesImg4 from './coinChronicles-4.png'
import coinChroniclesImg5 from './coinChronicles-5.png'
import coinChroniclesImg6 from './coinChronicles-6.png'
import coinChroniclesImg7 from './coinChronicles-7.png'
import coinChroniclesImg8 from './coinChronicles-8.png'
import coinChroniclesImg9 from './coinChronicles-9.png'
import nafeezResume from './resume.pdf';


export type currentPageType = "Home" | "About" | "Projects" | "Skills" | "Contact" ;

export type navLabelType = {
    label : currentPageType,
    icon: string
}

export const navLabel : navLabelType[] = [
    {
        label:"Home",
        icon:homeSvg
    },
    {
        label:"About",
        icon: userSvg
    },
    {
        label:"Skills",
        icon: skillsSvg
    },
    {
        label:"Projects",
        icon: filesSvg
    },
    {
        label:"Contact",
        icon: contactSvg
    }
]

const hirleyImages = [ hirelyImg, hirelyImg1, hirelyImg2, hirelyImg3, hirelyImg4, hirelyImg5, hirelyImg6 ]

const coinChroniclesImages = [ coinChroniclesImg9, coinChroniclesImg8, coinChroniclesImg7, coinChroniclesImg6, coinChroniclesImg5, coinChroniclesImg4, coinChroniclesImg3, coinChroniclesImg2, coinChroniclesImg1]

export const projectInfo = [
    {
        id: 1,
        projectName: "Hirely.",
        images: hirleyImages,
        projectTechStack:["React JS", "Typescript", "Tailwind Css", "Redux Toolkit", "Firebase"],
        description: "Hirely is a social media web app that allows users to create and publish posts, including articles, images, and YouTube videos with a preview feature. Built with React.js, TypeScript, and Firebase, it offers a seamless, interactive user experience with real-time updates and secure authentication.",
        githubRepoUrl:"https://github.com/Nafeez10/Hirely",
        liveDemoUrl:"https://hirely.web.app"
    },
    {
        id: 2,
        projectName: "Coin Chronicles",
        images: coinChroniclesImages,
        projectTechStack:["React JS", "Typescript", "Material UI", "Redux Toolkit", "RTK Query"],
        description: "Coin Chronicles is a cryptocurrency information viewer web app that provides real-time data on over 950+ cryptocurrencies. It features interactive charts and a modern, responsive design, allowing users to track market trends with ease while offering an engaging and visually appealing experience.",
        githubRepoUrl:"https://github.com/Nafeez10/coinchronicles",
        liveDemoUrl:"https://coinchronicles.web.app"
    }

]

export const contactPageLinks = [
    {
        id:1,
        name:"Email",
        icon:emailSvg,
        content:"mohamednafees14@gmail.com",
        linkUrl:"mailto:mohamednafees14@gmail.com?subject=Hi%20Nafees"
    },
    {
        id:2,
        name:"Whatsapp",
        icon: whatsappLogo,
        content:"+91 9095739759",
        linkUrl:"https://wa.me/+919095739759?text=Hi%20Nafees"
    },
    {
        id:3,
        name:"Linkedin",
        icon: linkedinLogo,
        content:"Mohamed Nafees",
        linkUrl:"https://www.linkedin.com/in/nafeez10"
    },
]


export {
    menuSvg,
    homeSvg,
    profilePic,
    homeSecPic,
    linkedinLogo,
    whatsappLogo,
    githubLogo,
    resumeSvg,
    arrowSvg,
    sendSvg,
    medalSvg,
    suitcaseSvg,
    emailSvg,
    linkArrowSvg,
    closeSvg,
    userSvg,
    skillsSvg,
    contactSvg,
    darkModeSvg,
    lightModeSvg,
    linkSvg,
    nafeezResume
}