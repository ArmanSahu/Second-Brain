import {  useState } from "react"
import { Button } from "../components/Button"
import { ContentModal } from "../components/CreateContentModal"
import { AddIcon } from "../Icons/AddIcon"
import { ShareIcon } from "../Icons/ShareIcon"
import { SideBar } from "../components/Sidebar"
import { HandWaveIcon } from "../Icons/HandWaveIcon"

interface Box{
    text: string;
}

export function Box({text}: Box) {
    return <div className="px-4 py-1 rounded-3xl border active:translate-y-0.5 transition-transform duration-400 ease-in-out  text-sm hover:bg-blue-600 hover:text-white cursor-pointer bg-white">
        {text}
    </div>
}

export function Dashboard() {

  const [modalOpen,setModalOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-gray-100">

      <div>
        <SideBar />
      </div>
      <ContentModal open={modalOpen} onClose={() => setModalOpen(false)}/>
    
      <div className="max-w-7xl mx-auto pt-4 flex flex-col ">    
        <div className="flex justify-between items-center gap-4">
            <div className="pl-62">
                <div className="flex items-center gap-2">
                <p className="text-xl font-bold">Welcome Arif</p>
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
            <Box text="All" />
            <Box text="Tweets" />
            <Box text="Videos" />
            <Box text="Documents" />
            <Box text="Instagram" />
      </div>

      <div className="  ml-70 px-20 pt-4 pb-10">
        <div className="flex gap-10 flex-wrap  ">

        </div>  
      </div>
    </div>
    
  )
}

