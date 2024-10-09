import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScroll from "../custom hooks/useScroll";
import { currentPageType, navLabel, navLabelType } from "../assets";
import { Link } from "react-scroll";
import { changePage, getCurrentPage } from "../slices/pageSlice";
import { changeShowNavMobile, getShowNavMObile } from "../slices/navMobileSlice";


type propsType = {
    pageSections : React.MutableRefObject<HTMLElement[]>
}

const NavModal = ({ pageSections }:propsType) =>{

    const dispatch = useDispatch();

    const currentPage = useSelector( getCurrentPage );
    const showNavMobile = useSelector( getShowNavMObile );

    const pageScrolled = useScroll();

    useEffect(()=>{
    
        pageSections.current.forEach((element)=>{
            if(pageScrolled + 3 > element.offsetTop){
                dispatch(changePage(element.id as currentPageType));
            }
        })
        
    },[pageScrolled])

    const pageChangeHandeler = ( label:currentPageType ) =>{
        dispatch(changePage(label));
        dispatch(changeShowNavMobile(false));
    }

    const navDrawerHandeler = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
        if(e.currentTarget !== e.target ){
            return;
        }
        
        dispatch(changeShowNavMobile(false));
    }

    return(
        <>
            <section onClick={(e:React.MouseEvent<HTMLElement, MouseEvent>)=>navDrawerHandeler(e)} className={ showNavMobile ?
                    " animate-[pop-in_.3s] md:hidden overflow-y-hidden fixed bottom-0 flex items-end left-0 w-full bg-[#00000096] h-[100Vh] backdrop-blur-sm"
                : 
                    "hidden"}>
                <div className="bg-white w-full p-[-10%] rounded-t-2xl " >
                    {/* <div className="w-20 z-0 h-1 rounded-full mx-auto mt-4 bg-neutral-700 " >

                    </div> */}
                    <div className="animate-[mobile-nav-slide-up_.5s] bg-white rounded-t-2xl flex flex-wrap justify-center w-full bord er-2 pb-10 ">
                        {
                            navLabel.map(( label:navLabelType) =>(
                                <Link
                                    to={label.label} 
                                    spy={true} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={500}
                                    key={label.label}
                                    className=" w-[30%] px-5  mt-10 " href={`#${label.label}`}
                                >
                                    <div onClick={()=>pageChangeHandeler(label.label)} className={ currentPage == label.label ? " nav-label-cont bg-black text-white" : "nav-label-cont hover:text-white text-black brigh tness-0" } >
                                        <img className="w-10 " src={ label.icon} alt="" />
                                        <p>
                                            {label.label}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavModal;