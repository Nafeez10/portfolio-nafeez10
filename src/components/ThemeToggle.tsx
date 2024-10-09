import { useDispatch, useSelector } from "react-redux";
import { darkModeSvg, lightModeSvg } from "../assets";
import { changeTheme, getCurrentTheme } from "../slices/themeSlice";
import { DispatchType } from "../store/store";

const ThemeToggle = () =>{

    const dispatch = useDispatch<DispatchType>()

    const currentTheme = useSelector( getCurrentTheme );

    const themeHandeler = () =>{
        const changeToTheme = currentTheme == "dark" ? "light" : "dark";

        dispatch( changeTheme(changeToTheme) );
    }

    return(
        <>
            <button onClick={themeHandeler} className=" opacity-0 theme-toggle-intro fixed bottom-0 right-0 m-4 backdrop-blur-sm shadow-xl bg-[#000000ef] dark:hover:bg-neutral-800 dark:bg-white p-3 rounded-full active:scale-90 transition duration-75" >
                <img className="w-7" src={ currentTheme == "light" ?  darkModeSvg : lightModeSvg } alt="" />
            </button>
        </>
    )
}

export default ThemeToggle;