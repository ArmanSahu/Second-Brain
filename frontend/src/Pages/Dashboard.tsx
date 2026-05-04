import {  useState } from "react"
import { Button } from "../components/Button"
import { ContentModal } from "../components/CreateContentModal"
import { AddIcon } from "../Icons/AddIcon"
import { ShareIcon } from "../Icons/ShareIcon"
import { SideBar } from "../components/Sidebar"
import { HandWaveIcon } from "../Icons/HandWaveIcon"
import { useAuthStore } from "../store/AuthStore"
import { useContent } from "../hooks/useContent"
import { Card } from "../components/Card"
import { CardSkeleton } from "../components/CardSkeleton"
import ErrorBoundary from "../components/ErrorBoundry";
import { Box } from "../components/DashboardContentBox"
import { SidebarIcon } from "../Icons/SidebarIcons"
import { ShareModal } from "../components/ShareContentModal"





export const Pages = {
  all : "all",
  twitter: "twitter",
  youtube: "youtube",
  documents: "document",
  instagram: "instagram",
  facebook: "facebook",
  linkedin: "linkedin"
} 

export function Dashboard() {

  const [modalOpen,setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(Pages.all);
  const [sidebarOpen,setSidebarOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const username = useAuthStore((s) => s.username);
  const {data,isLoading,error} = useContent();
  const filteredContent = currentPage === Pages.all ? data?.contents : data?.contents.filter((c) => c.type === currentPage); 

  return (
    <div className="bg-gray-100">

      
      <SideBar setCurrPage={setCurrentPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      

      {/* ContentModal open close */}
      <div onClick={()=>setSidebarOpen((p) => !p)} className="fixed left-3 cursor-pointer top-6 z-50">
        <SidebarIcon  />
      </div>
      
      <ContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
      <ShareModal open={shareModalOpen} onClose={() => setShareModalOpen(false)} />
      
    
      <div className="md:max-w-7xl max-w-xs  md:px-15 xl:px-0  mx-auto  flex flex-col ">
        <div className="flex md:justify-between justify-center gap-7 md:gap-0  items-center py-5"> 
          <div>
            <div className="flex items-center px-5 md:px-0  gap-2 text-2xl font-semibold">
            {`Welcome, ${username}`}
            <HandWaveIcon />
            </div>
            <p className="hidden md:block  text-black/70 pt-1">What's on your brain today</p>
          </div>
          <div className="md:flex md:gap-4 hidden">
            <Button text="Add Content" variant="primary" onClick={() => setModalOpen(true)} size="md" startIcon={<AddIcon size="md" />}/>
            <Button text="Share Brain" variant="secondary" size="md" onClick={() => setShareModalOpen(true)} startIcon={<ShareIcon size="md" />}/>
          </div>
           <div className="flex md:hidden gap-4 ">
             <button onClick={() => setModalOpen(true)} className="bg-blue-600 p-1 rounded-md text-white cursor-pointer ">
              <AddIcon size="md"  />
            </button>
             <button onClick={() => setShareModalOpen(true)} className="bg-blue-200 p-1 rounded-md text-blue-500 cursor-pointer" >
              <ShareIcon size="md" />
            </button>
          </div>
        </div>
        <div className="md:max-w-7xl max-w-xs items-center flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 ">
            <Box onClick={() => setCurrentPage(Pages.all)} text="All" />
            <Box onClick={() => setCurrentPage(Pages.twitter)} text="Tweets" />
            <Box onClick={() => setCurrentPage(Pages.youtube)} text="Youtube" />
            <Box onClick={() => setCurrentPage(Pages.documents)} text="Documents" />
            <Box onClick={() => setCurrentPage(Pages.instagram)} text="Instagram" />
            <Box onClick={() => setCurrentPage(Pages.facebook)} text="Facebook" />
            <Box onClick={() => setCurrentPage(Pages.linkedin)} text="Linkedin" />
        </div>
        <div className="min-h-screen my-10">

          {error && <div className="text-red-500">
            Something went wrong while fetching contents
          </div>}

          <div className="flex flex-col justify-center md:justify-start md:flex-row  gap-10 flex-wrap">
              {isLoading 
                ? Array.from({ length: 6 }).map((_, i) => (
                    <CardSkeleton key={i} />
                  ))
                : filteredContent?.map((c) => (
                    <ErrorBoundary key={c._id}>
                    <Card id={c._id}  title={c.title} link={c.link} type={c.type} />
                    </ErrorBoundary>
                  ))}
            </div>
          </div>
        </div>
    </div>
    
  )
}

