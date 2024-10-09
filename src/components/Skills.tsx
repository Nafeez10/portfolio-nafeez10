import SkillBubble from "./SkillBubble"

const Skills = () =>{

    const mySkills: string[] = [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Javascript",
        "React JS",
        "Typescript",
        "Redux",
        "RTK Query",
        "Firebase Authentication",
        "Firebase Firestore",
        "Firebase Storage",
        "Material UI",
        "Git",
        "Github"
    ]

    return(
        <>
            <section className=" w-full h-screen flex justify-center items-center " >
                <div className="p-2 flex flex-col gap-7 items-center w-full bo rder-2 border-green-500  " >
                    <div>
                        <h2 className="text-center text-5xl logo-font">Skills</h2>
                        <p className="text-sm text-center mt-2 text-neutral-500 tracking-wide font-[500]" >Technical Skills</p>
                    </div>
                    <div className=" w-[70%] max-xl:w-[80%] max-lg:w-full flex flex-col items-center gap-10 py-10 max-sm:rounded-3xl rounded-full dark:bg-neutral-900 bg-neutral-800 text-white border-2 dark:border-neutral-700 border-neutral-400 " >
                        <h3 className="text-center text-2xl logo-font underline underline-offset-4 ">Front-End Development</h3>
                        <div className="px-10 max-sm:px-4 w-[70%] max-md:w-full bor der-2 flex gap-2.5 flex-wrap justify-center ">
                            {
                                mySkills.map( skill =>(
                                    <SkillBubble key={skill} skill={skill} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;