import { useEffect } from "react"
import { BrainIcon } from "../Icons/BrainIcon"
import { ClipboardIcon } from "../Icons/ClipBoardIcon"
import { CloseIcon } from "../Icons/CloseIcon"
import { Button } from "./Button"
import { useCreateLink } from "../hooks/useCreateLink"
import { useShareStore } from "../store/ShareStore"


export const ShareModal = ({open,onClose}:{
    open: boolean,
    onClose: () => void;
}) => {
    const { mutate,isPending,isError } = useCreateLink();
    const shareLink = useShareStore(s => s.shareLink);

    useEffect(() => {
        if(open){
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        }else{
            document.body.style.overflow = "auto";
            document.body.style.touchAction = "auto"
        }
        return () => {
            document.body.style.overflow = "auto";
            document.body.style.touchAction = "auto"
        }
    },[open]);

    function shareData(){
        const data = {
            share: true
        }
        mutate(data);
    }
    function stopShare(){
        const data = {
            share: false
        }
        mutate(data);
    }

    return open && <div onClick={onClose} className="fixed top-0 left-0 h-screen w-screen bg-gray-200/70 flex justify-center items-center">
        <div onClick={(e)=>e.stopPropagation()} className="bg-white px-6 py-5 md:min-w-xs min-w-2xs rounded-xl flex flex-col gap-3 items-center">
            <div onClick={onClose} className="flex hover:cursor-pointer justify-end w-full">
                <CloseIcon size="lg"/>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-lg font-bold">
                    <p>Want to share your Brain?</p>
                    <BrainIcon />
                </div>
                <div className="w-full border-2 h-10 rounded-md relative  flex items-center">
                    <p className="truncate w-full text-sm text-gray-600 px-2 max-w-60">
                        {shareLink || "click share to generate link"}
                    </p>
                    <div onClick={() => navigator.clipboard.writeText(shareLink)} className="absolute cursor-pointer  px-1 right-0  ">
                        <ClipboardIcon size="lg" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Button onClick={shareData} text="ShareBrain" variant="primary" size="custom" loading={isPending}  />
                    <Button onClick={stopShare} text="StopShare" variant="secondary" size="custom" />
                </div>
            </div>
            {isError && <p>Something went wrong! please try again</p>}
        </div>
    </div>
} 