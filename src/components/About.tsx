import { medalSvg, profilePic, suitcaseSvg } from "../assets"

const About = () =>{

    return(
        <>
            <section  className='w-full min-h-screen h-sc reen flex justify-center items-center max-md:mt-10 '>
                <div className="w-[80%] max-sm:w-full max-sm:px-10  ">
                    <h2 className="text-center text-5xl logo-font ">About Me</h2>
                    <p className="text-sm text-center mt-2 text-neutral-500 tracking-wide font-[500]" >My Introduction</p>
                    <div className=" flex max-lg:flex-col max-lg:gap-10 items-center g ap-10 mt-10">
                        <div className="w-[30%] max-md:w-[50%] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition duration-500 border-anime border-[5px] dark:border-neutral-700 border-neutral-500 ">
                            <img className="w-full" src={profilePic} alt="" />
                        </div>
                        <div className="borde r-2 w-[70%] max-lg:w-full flex flex-col justify-cen ter items-center ">
                            <div className=" bor der-2 px-10 w-full flex items-center justify-center gap-5">
                                <div className=" p-5 gap-1 flex flex-col justify-center items-center w-32 dark:border-neutral-700 border-2 rounded-lg">
                                    <img className=" w-6 brightness-0 dark:brightness-100" src={medalSvg} alt="" />
                                    <h3 className=" font-[500] text-[.9rem] tracking-wide ">Experience</h3>
                                    <p className="text-[.75rem] tracking-wide font-[500] text-neutral-500 ">Fresher</p>
                                </div>
                                <div className=" p-5 gap-1 flex flex-col justify-center items-center grow dark:border-neutral-700 border-2 rounded-lg">
                                    <img className=" w-6 brightness-0 dark:brightness-100" src={suitcaseSvg} alt="" />
                                    <h3 className=" font-[500] text-[.9rem] tracking-wide ">Profession</h3>
                                    <p className="text-[.75rem] tracking-wide font-[500] text-neutral-500 text-nowrap">Front-End Developer</p>
                                </div>
                            </div>
                            <p className="w-[90%] max-lg:w-full text-center mt-10">
                                Front-end developer proficient in React.js, TypeScript, and Redux Toolkit, including RTK Query. Experienced in creating user interfaces with Material UI and Tailwind CSS. Proficient in utilizing Firebase for authentication and data management. Eager to contribute to innovative development teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About