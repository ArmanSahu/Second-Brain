import { Link, useNavigate } from "react-router-dom"
import { BrainIcon } from "../Icons/BrainIcon"
import { Button } from "./Button"
import { SidebarIcon } from "../Icons/SidebarIcons";
import { SideBarMainPage } from "./SidebarMainPage";
import { useEffect, useState } from "react";




export const NavBar = () => {

    const navigate = useNavigate();
    const [sideBarMainPage,setSideBarMainPage] = useState<boolean>(false);

    useEffect(() => {
    if (sideBarMainPage) {
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
    } else {
        document.body.style.overflow = "auto";
        document.body.style.touchAction = "auto";
    }

    return () => {
        document.body.style.overflow = "auto";
        document.body.style.touchAction = "auto";
    };
    }, [sideBarMainPage]);

    return <div className="bg-white shadow-sm ">
        <div className="sm:max-w-7xl max-w-sm px-3  mx-auto sm:px-8 2xl:px-0   py-4 md:py-4 2xl:py-5 flex justify-between">
        
            <div className="lg:text-2xl text-xl tracking-tight font-bold  flex items-center gap-1">
                <div className="md:hidden hover:cursor-pointer flex items-center pr-2" onClick={() => setSideBarMainPage((p) => !p)}>
                    <SidebarIcon size="lg" />
                </div>
                <div className=" flex gap-2 items-center md:hidden ">
                    <p>Second Brain</p>
                    <BrainIcon />
                </div>
                <div className="hidden  md:flex items-center gap-2">
                    <BrainIcon />
                    <p>Second Brain</p>
                </div>
            </div>
         
            <div className=" md:flex hidden  items-center md:gap-4 lg:gap-10 ">
                <NavbarLink to="/" text="Home" />
                <NavbarLink to="/#" text="About" />
                 <NavbarLink to="/dashboard"  text="Dashboard" />
            </div>
            
            <div className="md:flex hidden items-center gap-3">
                <Button variant="secondary" text="Log in" size={"md"} onClick={() => navigate("/login")} />
                <Button variant="primary" text="Sign up" size="md" onClick={() => navigate("/signup")}/>
            </div>
            <div className="md:hidden flex items-center">
                <Button variant="primary" text="Log in" size={"sm"} onClick={() => navigate("/login")} />
            </div>
        </div>
       <div
        onClick={() => setSideBarMainPage(false)}
        className={`fixed top-16 left-0 w-screen h-screen bg-gray-200/70 md:hidden 
        transition-opacity duration-300 
        ${sideBarMainPage ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
        <SideBarMainPage open={sideBarMainPage}/>
        </div>
    </div>
}

export const NavbarLink = ({text,to}:{text: string,to: string}) => {
    return <Link to={to} className="hover:text-blue-600  cursor-pointer lg:text-base text-sm  ">
        {text}
    </Link>
}
