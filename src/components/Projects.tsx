import { projectInfo } from "../assets";
import ProjectCard from "./ProjectCard";

const Projects = () =>{

    return(
        <>
            <section className=" w-full h-scr een min-h-screen p y-24 flex justify-center items-center" >
                <div className=" w-full bord er-2 flex flex-col items-center gap-10">
                    <div>
                        <h2 className="text-center text-5xl logo-font">Projects</h2>
                        <p className="text-sm text-center mt-2 text-neutral-500 tracking-wide font-[500]">My Works</p>
                    </div>
                    <div className="w-[70%] max-sm:w-full max-sm:px-10 flex justify-center items-start max-xl:items-center bord er-2 gap-10 max-xl:flex-col ">
                        {
                            projectInfo.map( project =>
                                <ProjectCard
                                    key={project.id}
                                    projectName={project.projectName}
                                    projectImages={project.images}
                                    projectTechStack={project.projectTechStack}
                                    projectDescription={project.description}
                                    githubRepoUrl={project.githubRepoUrl}
                                    liveDemoUrl={project.liveDemoUrl}
                                />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;