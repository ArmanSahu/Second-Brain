import { Link, useNavigate } from "react-router-dom"
import { BrainIcon } from "../Icons/BrainIcon"
import { Button } from "./Button"
import { SidebarIcon } from "../Icons/SidebarIcons";
import { SideBarMainPage } from "./SidebarMainPage";
import { useState } from "react";




export const NavBar = () => {

    const navigate = useNavigate();
    const [sideBarMainPage,setSideBarMainPage] = useState<boolean>(false)

    return <div className="bg-white shadow-sm ">
        <div className="sm:max-w-7xl max-w-sm px-3  mx-auto sm:px-8 2xl:px-0   py-4 md:py-4 2xl:py-5 flex justify-between">
        
            <div className="lg:text-2xl text-xl tracking-tight font-bold  flex items-center gap-1">
                <div className="md:hidden hover:cursor-pointer flex items-center pr-2" onClick={() => setSideBarMainPage((p) => !p)}>
                    <SidebarIcon size="lg" />
                </div>
                <p>Second Brain</p>
                <BrainIcon />
            </div>
         
            <div className=" md:flex hidden  items-center md:gap-4 lg:gap-10 ">
                <NavbarLink to="/#" text="Features" />
                <NavbarLink to="/dashboard"  text="Go to dashboard" />
                <NavbarLink to="/#" text="About" />
            </div>
            
            <div className="md:flex hidden items-center gap-3">
                <Button variant="secondary" text="Log in" size={"lg"} onClick={() => navigate("/login")} />
                <Button variant="primary" text="Sign up" size="lg" onClick={() => navigate("/signup")}/>
            </div>
            <div className="md:hidden flex items-center">
                <Button variant="primary" text="Log in" size={"sm"} onClick={() => navigate("/login")} />
            </div>
        </div>
        {sideBarMainPage && <div onClick={() => setSideBarMainPage(false)} className="fixed top-17 left-0 w-screen h-screen bg-gray-200/70 md:hidden">
            <SideBarMainPage open={sideBarMainPage}/>
        </div>}
    </div>
}

export const NavbarLink = ({text,to}:{text: string,to: string}) => {
    return <Link to={to} className="hover:text-blue-600  cursor-pointer lg:text-base text-sm  ">
        {text}
    </Link>
}
