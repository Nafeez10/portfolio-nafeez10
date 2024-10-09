import { useState } from "react";
import { arrowSvg } from "../assets";

type propsType = {
    projectImages: string[]
}

const CardImgCarousel = ({ projectImages }:propsType) =>{
    
    const [ scrollImg, setScrollImg ] = useState(0);

    const scrollNextImgHandeler = () =>{
        if(scrollImg > 0  ){
            setScrollImg(scrollImg - 1);
        }else{
            setScrollImg(projectImages.length - 1);
        }
    }

    const scrollPrevImgHandeler = () =>{
        if( scrollImg < projectImages.length - 1){
            setScrollImg(scrollImg + 1);
        }else{
            setScrollImg(0);
        }
    }

    return(
        <>
            <div className="relative overflow-hidden w-full h-40  ">
                <div
                    style={{
                        transform:`translateX(-${scrollImg}00%)`,
                        transition:".3s"
                    }}
                    className="w-full relative h-full flex "
                >
                    <div className="">
                        {
                            projectImages.map( (k,i) =>(
                                <img
                                    key={i}
                                    style={{
                                        transform: `translateX(${i}00%)`
                                    }}
                                    className=" absolute w-full h-full object-cover "
                                    src={k} alt=""
                                />
                            ) )
                        }
                    </div>
                </div>
                <div onClick={scrollNextImgHandeler} className=" bg-[#ffffffbe] hover:bg-[#ffffff] transition rounded-full cursor-pointer absolute left-1 top-[50%] translate-y-[-50%]  w-7">
                    <img className="w-full" src={arrowSvg} alt="" />
                </div>
                <div onClick={scrollPrevImgHandeler} className=" bg-[#ffffffbe] hover:bg-[#ffffff] transition rounded-full cursor-pointer absolute right-1 rotate-180 top-[50%] translate-y-[-50%]  w-7">
                    <img className="w-full" src={arrowSvg} alt="" />
                </div>
                <div className=" absolute top-0 left-0 m-2 bg-[#00000088] px-2 rounded-full ">
                    <span>{scrollImg + 1}/{projectImages.length}</span>
                </div>
            </div>
        </>
    )
}

export default CardImgCarousel;