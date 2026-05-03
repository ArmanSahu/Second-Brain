import { useState, type Dispatch, type SetStateAction } from "react"
import { BrainIcon } from "../Icons/BrainIcon"
import { DocumentIcon } from "../Icons/DocumentIcon"
import { HomeIcon } from "../Icons/HomeIcon"
import { InstagramIcon } from "../Icons/InstagramIcon"
import { TweetIcon } from "../Icons/TweetIcon"
import { VideoIcon } from "../Icons/VideoIcon"
import { Pages } from "../Pages/Dashboard"
import { SideBarItem } from "./SidebarItem"
import { FacebookIcon } from "../Icons/FacebookIcon"
import { LinkedinIcon } from "../Icons/LinkedinIcon"
import { Logout } from "../Icons/Logout"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/AuthStore"



type SideBarProps = {
    setCurrPage: React.Dispatch<React.SetStateAction<string>>,
    sidebarOpen: boolean,
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}
export const SideBar = ({setCurrPage,sidebarOpen,setSidebarOpen}: SideBarProps) => {
    const [error,setError] = useState<string>("");
    const setUsername = useAuthStore(s => s.setUsername);
    const setAuth = useAuthStore(s => s.setAuth);
    const logout = async() => {
        try{
            const res = await fetch(`${Backend_URL}${URLPath.logout}`,{
                method: "POST",
                credentials: "include"
            });
            if(res.ok){
                setError("");
                setUsername("");
                setAuth(false);
            }    
            
        }catch(error){
            setError("please try again");
        }
        
    }


    return <div onClick={() => setSidebarOpen(false)} className={`${sidebarOpen?"fixed top-0 left-0  h-screen w-screen visible":"invisible"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`h-screen bg-white border-gray-200 border shadow-md shadow-gray-300 w-64 fixed left-0 top-0 transform ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center gap-1 pt-5 text-xl tracking-tight font-semibold pl-12">
                <BrainIcon />
                <p>Second Brain</p>
            </div>
            
            <div className=" flex flex-col gap-1 pt-8 ">
                <div className={`duration-300 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform  `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Home" icon={<HomeIcon size="md" />} />
                </div>
                <div className={`duration-350 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform  `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Tweets" icon={<TweetIcon size="md" />} />
                </div>
                <div className={`duration-400  ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.youtube)} text="Youtube" icon={<VideoIcon size="md" />} />
                </div>
                <div className={`duration-450 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Documents" icon={<DocumentIcon size="md" />} />
                </div>
                <div className={`duration-500 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform  `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.instagram)} text="Instagram" icon={<InstagramIcon size="md" />} />
                </div>
                <div className={`duration-550 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform  `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.instagram)} text="Facebook" icon={<FacebookIcon size="md" />} />
                </div>
                 <div className={`duration-600 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform  `}>
                    <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.instagram)} text="LinkedIn" icon={<LinkedinIcon size="md" />} />
                </div>
            </div>
            <div onClick={()=>logout()} className={` fixed bottom-2 w-full duration-800 ${sidebarOpen?"translate-x-0":"-translate-x-full"} transition-transform font-semibold `}>
                <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Logout" icon={<Logout size="md" />} />
                {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>
        </div>
    </div>
}