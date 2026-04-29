import { BrainIcon } from "../Icons/BrainIcon"
import { DocumentIcon } from "../Icons/DocumentIcon"
import { HomeIcon } from "../Icons/HomeIcon"
import { InstagramIcon } from "../Icons/InstagramIcon"
import { TweetIcon } from "../Icons/TweetIcon"
import { VideoIcon } from "../Icons/VideoIcon"
import { Pages } from "../Pages/Dashboard"
import { SideBarItem } from "./SidebarItem"



type SideBarProps = {
    setCurrPage: React.Dispatch<React.SetStateAction<string>>
}
export const SideBar = ({setCurrPage}: SideBarProps) => {
    return <div className="h-screen bg-white border-gray-200 border shadow-md shadow-gray-300 min-w-70 fixed left-0 top-0  ">
        <div className="flex items-center gap-1 pt-4 text-xl tracking-tight font-semibold pl-2">
            <BrainIcon />
            <p>Second Brain</p>
        </div>
        <div className=" flex flex-col gap-1 pt-8 ">
            <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Home" icon={<HomeIcon size="md" />} />
            <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Tweets" icon={<TweetIcon size="md" />} />
            <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.youtube)} text="Videos" icon={<VideoIcon size="md" />} />
            <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.all)} text="Documents" icon={<DocumentIcon size="md" />} />
            <SideBarItem bgColor={true} onClick={() => setCurrPage(Pages.instagram)} text="Instagram" icon={<InstagramIcon size="md" />} />
        </div>
    </div>
}