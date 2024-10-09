import { ChangeEvent, useState, useRef } from "react";
import { sendSvg } from "../assets";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const MailForm = () =>{

    const formElement = useRef<HTMLFormElement | null>(null);

    const [ userName, setUserName ] = useState<string>('');
    const [ userEmail, setUserEmail ] = useState<string>('');
    const [ userMessage, setUserMessage ] = useState<string>('');
    const [ sendEmailLoading, setSendEmailLoading ] = useState<boolean>(false);
    const [ emailSentCounter, setEmailSentCounter ] = useState<number>(0);

    const userNameHandeler = (e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const userEmailHandeler = (e:ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);
    const userMessageHandeler = (e:ChangeEvent<HTMLTextAreaElement>) => setUserMessage(e.target.value);

    const resetForm = () =>{
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    }

    const sendEmailHandeler = (e:any) => {
        e.preventDefault();

        if(!userName.trim() || !userEmail.trim() || !userMessage.trim()){
            toast(
                "Fill the form to send email",
                {
                  duration: 2000,
                }
            );

            return;
        }
        
        setEmailSentCounter(emailSentCounter + 1);

        if(emailSentCounter >= 2){
            toast(
                "Hey there! If you need to send a professional message, just a quick reminder not to spam. Instead, try refreshing the page and send the email again. Thanks!",
                {
                  duration: 8000,
                }
            );
            resetForm();
            return;
        }

        if(emailSentCounter >= 5){
            toast(
                "If you need to send a professional message, please avoid spamming. Instead, refresh the page and resend the email. Thank you.",
                {
                  duration: 8000,
                }
            );
            resetForm();
            return;
        }

        setSendEmailLoading(true);
        
        emailjs
            .sendForm( import.meta.env.VITE_EMAILJS_SERVICE_KEY, import.meta.env.VITE_EMAILJS_TEMPLATE_KEY, formElement.current!, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setSendEmailLoading(false);
                    toast('Email Sent!',
                        {
                          icon: '👍',
                          style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                          },
                        }
                    );
                   
                    resetForm();
                },
                (error) => {
                    setSendEmailLoading(false);
                    const errorMessage = error.text ? error.text : "Something went wrong!"
                    toast(errorMessage,
                        {
                          icon: '😔',
                          style: {
                            borderRadius: '10px',
                            background: '#ffc6c6',
                            color: '#a21212',
                          },
                        }
                    );
                    
                    resetForm();
                },
            )
        ;
        
        
    };

    const buttonLoader = (
        <span
            className=" block h-5 w-5 border-t-2 dark:border-neutral-900 rounded-full animate-spin"
        ></span>
    )

    const buttonDisabled = sendEmailLoading ? true : false; 
    
    return(
        <>
            <form ref={formElement} onSubmit={(e)=>e.preventDefault()} className=" mt-5" action="">
                <div className=" flex flex-col gap-5">
                    <div className=" bord er-2 relative transition">
                        <input required name="user_name" value={userName} onChange={userNameHandeler} placeholder="Enter your Name" className=" dark:bg-neutral-900  rounded-lg dark:border-neutral-700 border-neutral-400 px-4 py-2 w-full border-2" type="text" />
                        <span className=" absolute transition top-0 translate-y-[-50%] left-2 dark:bg-neutral-900 bg-white px-1 text-sm ">Name</span>
                    </div>
                    <div className=" bord er-2 relative transition">
                        <input required name="user_email" value={userEmail} onChange={userEmailHandeler} placeholder="Enter your Email" className=" rounded-lg dark:bg-neutral-900 dark:border-neutral-700 border-neutral-400 px-4 py-2 w-full border-2" type="email" />
                        <span className="  absolute transition top-0 translate-y-[-50%] left-2 dark:bg-neutral-900 bg-white px-1 text-sm ">Email</span>
                    </div>
                    <div className=" bord er-2 relative transition">
                        <textarea
                            required
                            value={userMessage}
                            onChange={userMessageHandeler}
                            placeholder="Write me a message"
                            className=" dark:bg-neutral-900 resize-none rounded-lg dark:border-neutral-700 border-neutral-400 px-4 py-2 w-full border-2"
                            name="user_message"
                            id=""
                            rows={3}
                        />
                        <span className="  absolute transition top-0 translate-y-[-50%] left-2 dark:bg-neutral-900 bg-white px-1 text-sm ">Message</span>
                    </div>
                    <button disabled={buttonDisabled} onClick={(e)=>sendEmailHandeler(e)} className="send-email-btn">
                        {
                            sendEmailLoading ? buttonLoader : <></>
                        }
                        <span>Send Message</span>
                        <img className="w-7 dark:brightness-0" src={sendSvg} alt="" />
                    </button>
                </div>

            </form>
        </>
    )
}

export default MailForm;