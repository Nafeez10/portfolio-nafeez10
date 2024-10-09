import { githubLogo, homeSecPic, linkedinLogo, nafeezResume, resumeSvg, whatsappLogo, } from "../assets";

const Home = () =>{

    const forwardLink = [
        {
            id: 1,
            icon: whatsappLogo,
            url: "https://wa.me/+919095739759?text=Hi%20Nafees"
        },
        {
            id: 2,
            icon: linkedinLogo,
            url: "https://www.linkedin.com/in/nafeez10"
        },
        {
            id:3,
            icon: githubLogo,
            url: "https://github.com/Nafeez10"
        }
    ]

    return(
        <>
            <section className="w-full h-screen bord er-2" >
                <div className="flex justify-center items-center w-full h-full ">
                    <div className=" grid w-[75%] gap-5 bord er-2 max-lg:mt-16 max-lg:gap-7 max-lg:small-home-cont-grid lg:lg-home-cont-grid ">
                        <div className="home-links-anime flex max-lg:flex-row flex-col gap-5 lg:mr-10 r-2 forward-links-cont " >
                            {
                                forwardLink.map( link =>(
                                    <a key={link.id} className=" opacity-0 contact-link w-6 block dark:brightness-75 dark:hover:brightness-100 brightness-[30%] hover:brightness-0 transition " href={link.url} target="_blank" >
                                        <img className=" w-full" src={link.icon} alt="" />
                                    </a>
                                ))
                            }
                        </div>
                        <div className="home-text-anime opacity-0 flex flex-col gap-8 lg:gap-10 borde r-2 my-home-info w-[60 %] max-lg:text-center  " >
                            <h2 className=" text-5xl logo-font  ">Nafeez 👋</h2>
                            <div className=" lg:w-[90%] flex items-center gap-2.5 relative">
                                <span className="block w-full h-[1px] bg-black dark:bg-neutral-700 "></span>
                                <h3 className=" absolute bg-white dark:bg-black top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-2 text-nowrap ">Front-End Developer</h3>
                            </div>
                            <p className=" max-sm:text-justify">
                                I'm a Front-end developer skilled in React.js, TypeScript, Redux Toolkit, and RTK Query. Experienced in Material UI, Tailwind CSS, and Firebase for authentication and data management.
                            </p>
                            <a href={nafeezResume} target="_blank" rel="noopener noreferrer" className=" transition hover:-translate-y-1 shadow-sm hover:box max-lg:mx-auto w-32 rounded-full px-4 py-2 dark:bg-neutral-50 dark:text-black bg-black text-white">
                                <button className="flex mx-auto gap-2 items-center justify-between">
                                    <img className=" dark:brightness-0 w-7" src={resumeSvg} alt="" />
                                    Resume
                                </button>
                            </a>
                        </div>
                        <div className=" opacity-0 home-img-anime max-md:w-[70%] md:w-[50%] lg:w-full overflow-hidd en transition rounded-2xl border-2 dark:border-neutral-700 home-img img-hover-effect ">
                            <img className=" animate-[pop-in_.5s] w-full min-h-40 transition" src={homeSecPic} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;