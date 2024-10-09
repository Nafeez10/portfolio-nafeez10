import { useState, useEffect } from "react"

const useScroll = () =>{
    
    const [ windowScroll, setWindowScroll ] = useState<number>(0);

    useEffect(()=>{

        const scrollListener = ()=>{
            setWindowScroll(window.scrollY);
        }

        window.addEventListener("scroll", scrollListener);

        return ()=>{
            window.removeEventListener("scroll", scrollListener);
        }

    },[])

    return windowScroll;

}

export default useScroll;