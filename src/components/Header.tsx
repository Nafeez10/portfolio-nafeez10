import { useEffect } from "react";
import { closeSvg, menuSvg, navLabel } from "../assets";
import {Link} from "react-scroll"
import { useDispatch, useSelector } from "react-redux";
import { changePage, getCurrentPage } from "../slices/pageSlice";
import { DispatchType } from "../store/store";
import { changeShowNavMobile, getShowNavMObile } from "../slices/navMobileSlice";
import useScroll from "../custom hooks/useScroll";

type currentPageType = "Home" | "About" | "Projects" | "Skills" | "Contact" ;

// type navLabelType = {
//     label : currentPageType,
//     icon: string
// }

// type propsType = {
//     currentPage:currentPageType;
//     setCurrentPage:React.Dispatch<React.SetStateAction<currentPageType>>;
//     showNavMobile:Boolean;
//     setShowNavMobile:React.Dispatch<React.SetStateAction<Boolean>>;
// }

type propsType = {
    pageSections : React.MutableRefObject<HTMLElement[]>
}

const Header = ({ pageSections }:propsType) =>{

    const dispatch = useDispatch<DispatchType>()

    const currentPage = useSelector( getCurrentPage );
    const showNavMobile = useSelector( getShowNavMObile );

    const pageScrolled = useScroll();

    useEffect(()=>{

        // i've done this because after every single pixel scrolled each of the foreach below
        // dispatches 5 actions to avoid this i created a toPage variable which keeps track of the 
        // last element of the foreach which scroll passed its offset only dispatch one action per useEffect execution.
        let toPage: currentPageType = "Home";

        pageSections.current.forEach((element)=>{
            if(pageScrolled + 3 > element.offsetTop){

                toPage = element.id as currentPageType;
                
                // dispatch(changePage(element.id as currentPageType));
            }
        })
        // by this every useEffect will dispatch only one action.
        dispatch(changePage(toPage));

    },[pageScrolled])

    const translateMarker = currentPage == "Home" ?
        "0%" : currentPage == "About" ?
            "100%" : currentPage == "Skills" ?
                "200%" : currentPage == "Projects" ?
                    "300%" : "400%";

    const pageChangeHandeler = ( label:currentPageType ) =>{
        dispatch(changePage(label));
    } 

    const mobileNavHandeler = () => dispatch(changeShowNavMobile(!showNavMobile));

    return(
        <>
            <nav className=" z-10 absolute top-5 flex items-center justify-center h-16 max-sm:w-full sm:w-full lg:w-[70%] max-lg:px-2 mx-auto  m t-5  max-md:mx-2 ">
                <main className=" bg-[#ffffff1a] dark:bg-[#242424b0] flex items-center justify-between h-full w-full box max-md:pr-2 px-7 py-3 bg-transp arent backdrop-blur-sm z-10 rounded-full animate-[nav-intro-anim_1.5s_ease]">
                    <section className="logo-intro opacity-0 ">
                        <h1 className="text-4xl logo-font text-neutral-600 dark:text-neutral-100 " >Nafeez</h1>
                    </section>
                    <section className="max-md:hidden ">
                        <div className="w-full max-md:animate-[mobile-nav-sec-intro-anim_1s] max-md:bg-white max-md:shadow-lg max-md:rounded-full max-md:p-2 h-full max-md:flex max-md:justify-center max-md:items-center ">
                            <div className="w-full" >
                                <ul className=" flex items-center relative transition duration-75 mobile-nav-cont ">
                                    {
                                        navLabel.map( label =>(
                                            <li onClick={()=>pageChangeHandeler(label.label)} className={ currentPage == label.label ? "nav-label text-white dark:text-black" : "nav-label"} key={label.label}>
                                                <Link
                                                    to={label.label} 
                                                    spy={true} 
                                                    smooth={true} 
                                                    // offset={50} 
                                                    duration={500}
                                                    className=" block w-full h-full py-1 text-center" href={`#${label.label}`}>
                                                    {label.label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                    <li style={{
                                        transition:".3s",
                                        transform:`translateX(${translateMarker})`
                                    }} className={` absolute max-md:w-[20%] w-24 h-full dark:bg-neutral-100 bg-neutral-800 rounded-full opacit y-0 max-md:mobile-nav-ele-intro md:nav-intro `}>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    


                    <button onClick={mobileNavHandeler} className={showNavMobile ? " nav-btn bg-[#ffffff] " : " nav-btn bg-[#353535] dark:bg-neutral-900 "}>
                        <img className={ showNavMobile ? "w-full brightness-[30%]" : "w-full"} src={ !showNavMobile ? menuSvg : closeSvg } alt="" />
                    </button>
                </main>
            </nav>
        </>
    )
}

export default Header;