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



export const Pages = {
  all : "all",
  youtube: "youtube",
  instagram: "instagram"
} 

export function Dashboard() {

  const [modalOpen,setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(Pages.all);

  const username = useAuthStore((s) => s.username);
  const {data,isLoading,error} = useContent();
  const filteredContent = currentPage === Pages.all ? data?.contents : data?.contents.filter((c) => c.type === currentPage); 

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div>
        <SideBar setCurrPage={setCurrentPage} />
      </div>


      {/* ContentModal open close */}
      <ContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
    
      <div className="max-w-7xl mx-auto pt-4 flex flex-col ">  

        <div className="flex justify-between items-center gap-4">
            <div className="pl-62">
                <div className="flex items-center gap-2">
                <p className="text-xl font-bold">{`Welcome ${username}`}</p>
                <HandWaveIcon size="lg" />
                </div>
                <p className="text-sm">Here's what's in your brain today</p>
            </div>

            <div className="flex gap-5">
                <Button text="Add Content" variant="primary" size="md" startIcon={<AddIcon size="md" />} onClick={() => setModalOpen(true)} />
                <Button text="Share Brain" variant="secondary" size="md" startIcon={<ShareIcon size="md" />} />
            </div>
        </div>  
        
      </div>

      <div className="  ml-70 px-20 py-5 flex gap-3 ">
            <Box onClick={() => setCurrentPage(Pages.all)} text="All" />
            <Box onClick={() => setCurrentPage(Pages.all)} text="Tweets" />
            <Box onClick={() => setCurrentPage(Pages.youtube)} text="Videos" />
            <Box onClick={() => setCurrentPage(Pages.all)} text="Documents" />
            <Box onClick={() => setCurrentPage(Pages.instagram)} text="Instagram" />
      </div>

      <div className="  ml-70 px-20 pt-4 pb-10">
        {isLoading && <div className="loader flex justify-center items-center"></div>}

        {error && <div className="text-red-500">
          Something went wrong while fetching contents
        </div>}

        <div className="flex gap-10 flex-wrap">
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
    
  )
}

