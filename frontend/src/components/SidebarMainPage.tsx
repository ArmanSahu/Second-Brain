import { useNavigate } from "react-router-dom";
import { SideBarItem } from "./SidebarItem";

type SideBarMainPage = {
    open: boolean;
}

export const SideBarMainPage = ({open}: SideBarMainPage) => {
    const navigate = useNavigate();
    return <div onClick={(e) => e.stopPropagation()} className={` h-1/3 w-full border-t bg-gray-100 fixed top-17  left-0 ${open? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <div className="my-4 flex flex-col items-start px-4">
        <SideBarItem bgColor={false} text="About" onClick={() => navigate("#")} />   
        <SideBarItem bgColor={false} text="Feature" onClick={() => navigate("#")}  />
        <SideBarItem bgColor={false} text="Go to Dashboard" onClick={() => navigate("/dashboard")}  />
        <SideBarItem bgColor={false} text="signup" onClick={() => navigate("/signup")}  />
        </div>
    </div>
}