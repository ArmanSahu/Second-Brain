import { BrainIcon } from "../Icons/BrainIcon"
import { ClipboardIcon } from "../Icons/ClipBoardIcon"
import { Button } from "./Button"


export const ShareModal = ({open}:{
    open: boolean
}) => {
    return open && <div className="fixed top-0 left-0 h-screen w-screen bg-gray-200/70 flex justify-center items-center">
         <div className="bg-white px-6 py-10 md:min-w-xs min-w-2xs rounded-xl flex flex-col gap-6 items-center">
            <div className="flex items-center gap-2 text-lg font-bold">
                <p>Want to share your Brain?</p>
                <BrainIcon />
            </div>
            <div className="w-full border-2 h-10 rounded-md relative  flex items-center">
                <p className="truncate w-full text-sm">
                    
                </p>

                <div className="absolute cursor-pointer  px-1 right-0  ">
                    <ClipboardIcon size="lg" />
                </div>
            </div>
            <div className="w-full flex flex-col gap-3">
                <Button text="ShareBrain" variant="primary" size="custom" />
                <Button text="StopShare" variant="secondary" size="custom" />
            </div>
         </div>
    </div>
} 