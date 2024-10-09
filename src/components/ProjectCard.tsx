import { useState } from "react";
import { githubLogo, linkSvg } from "../assets";
import CardImgCarousel from "./CardImgCarousel";
import SkillBubble from "./SkillBubble";

type propsType = {
    projectName: string;
    projectImages: string[],
    projectTechStack: string[],
    projectDescription: string
    githubRepoUrl: string,
    liveDemoUrl: string
}

const ProjectCard = ({ projectName, projectImages, projectTechStack, projectDescription, githubRepoUrl, liveDemoUrl} : propsType) =>{

    const [ showFullDesc, setShowFullDesc ] = useState<Boolean>(false);

    const descriptionOverflow = projectDescription.length > 150;

    const displayProjectDescription = (descriptionOverflow && !showFullDesc) ? `${projectDescription.slice(0,150)}` : projectDescription;

    const descriptionOverflowHandeler = () => setShowFullDesc(true);

    return(
        <>
            <div className=" transition py-5 text-white dark:bg-neutral-900 bg-neutral-800 w-[40%] max-xl:w-[50%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-full xl:h -[29rem] dark:border-neutral-700 border-2 rounded-lg">
                <h3 className=" text-center mb-5 text-2xl">
                    {
                        projectName
                    }
                </h3>
                <CardImgCarousel projectImages={projectImages} />
                <div>
                    <h4 className="text-sm text-center mt-2 text-[#ffffffc0] tracking-wide font-[500]">
                        Tech Stack
                    </h4>
                    <div className="px-2 flex gap-2 flex-wrap justify-center items-center mt-3 ">
                        {
                            projectTechStack.map( skill =>
                                <SkillBubble
                                    key={skill}
                                    skill={skill}
                                    cardBubble
                                />
                            )
                        }
                    </div>
                    <div className="px-5 mt-5 transition">
                        <p style={{transition:".3s"}} className="project-card-desc">
                            {
                                displayProjectDescription
                            }
                            {
                                (descriptionOverflow && !showFullDesc) && <button className=" inline-block hover:brightness-75 transition " onClick={descriptionOverflowHandeler}>&nbsp;...more</button> 
                            }
                        </p>
                    </div>
                    <div className=" flex px-5 justify-center gap -10 mt-5">
                        <a href={githubRepoUrl} className=" block w-[50%]" target="_blank" rel="noopener noreferrer">
                            <button className=" w-full flex justify-center items-center gap-2 px-2 py-2 hover:brightness-75 rounded-md transition ">
                                <img className="w-5" src={githubLogo} alt="" />
                                Github Repo
                            </button>
                        </a>
                        <a href={liveDemoUrl} className="block w-[50%]" target="_blank" rel="noopener noreferrer">
                            <button className=" w-full flex justify-center items-center gap-2 bg-white hover:bg-neutral-400 transition  text-black px-2 py-2 rounded-md ">
                                <img className="w-5 brightness-0" src={linkSvg} alt="" />
                                Live Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;