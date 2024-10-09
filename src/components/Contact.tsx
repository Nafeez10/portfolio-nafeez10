import { contactPageLinks, linkArrowSvg } from "../assets";
import MailForm from "./MailForm";

const Contact = () =>{

    return(
        <>
            <section className=" w-full min-h-screen flex justify-center items-center max-xl:mt-20">
                <div className="w-full borde r-2 ">
                    <h2 className="text-center text-5xl logo-font ">Contact Me</h2>
                    <p className="text-sm text-center mt-2 text-neutral-500 tracking-wide font-[500]">
                        My Contacts
                    </p>
                    <div className=" mt-10 w-full px-10 flex max-lg:flex-col max-lg:items-center justify-center gap-20 ">
                        <div className=" w-[50%] flex flex-col items-center gap-5">
                            <h3 className="text-center text-lg tracking-wide logo-font font-[500] ">
                                Reach me Via
                            </h3>
                            <div className=" flex flex-col items-center gap-5 bord er-2">
                                {
                                    contactPageLinks.map( link =>(
                                        <div key={link.id} className=" w-full dark:border-neutral-700 border-2 inline-block p-5 rounded-lg ">
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="w-7">
                                                    <img className=" brightness-0 dark:brightness-100 w-full bord er-2" src={link.icon} alt="" />
                                                </div>
                                                <h4 className="text-sm mt-2 dark:text-neutral-50 text-neutral-900 tracking-wide font-[500]">
                                                    { link.name }
                                                </h4>
                                                <p className="text-sm mt-2 text-neutral-500 tracking-wide font-[500]">
                                                    { link.content }
                                                </p>
                                                <a
                                                    className=" text-white flex items-end gap-1 text-sm mt-2 brightness-[50%] dark:hover:brightness-100 hover:brightness-0 transition duration-300 hover-move-arrow font-[300] "
                                                    href={link.linkUrl}
                                                    target="_blank"
                                                >
                                                    <span>Write me</span>
                                                    <img className=" brightne ss-0 w-4 " src={linkArrowSvg} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                        <div className=" w-[50%] max-md:w-[70%] max-sm:w-full bo rder-2">
                            <div className=" w-[70%] max-lg:w-full bor der-2">
                                <h3 className="text-center text-lg tracking-wide logo-font font-[500] ">
                                    Write me a E-Mail
                                </h3>
                                <MailForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;