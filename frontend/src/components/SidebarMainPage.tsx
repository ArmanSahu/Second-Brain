import { useNavigate } from "react-router-dom";
import { SideBarItem } from "./SidebarItem";


type SideBarMainPage = {
    open: boolean;
}

export const SideBarMainPage = ({open}: SideBarMainPage) => {
    const navigate = useNavigate();
    return <div onClick={(e) => e.stopPropagation()} className={` min-[h-1/3] w-full border-t bg-gray-100 fixed top-0 mt-16 py-4 left-0 ${open? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <div className="my-4 flex flex-col items-start px-4">
            <div className={`${open? "translate-x-0" : "-translate-x-full"} duration-300`}>
                <SideBarItem  bgColor={false} text="Home" onClick={() => navigate("/")} />
            </div>
            <div className={`${open? "translate-x-0" : "-translate-x-full"} duration-400`}>
                <SideBarItem  bgColor={false} text="About" onClick={() => navigate("/about")}/>
            </div>
            <div className={`${open? "translate-x-0" : "-translate-x-full"} duration-500`}>
                <SideBarItem bgColor={false} text="Dashboard" onClick={() => navigate("/dashboard")}  />
            </div>
            <div className={`${open? "translate-x-0" : "-translate-x-full"} duration-600`}>
                <SideBarItem bgColor={false} text="Sign up" onClick={() => navigate("/signup")}  />
            </div>
           
        </div>
    </div>
}