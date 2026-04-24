import { useEffect, useRef } from "react";
import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";
import { InputComponent } from "./InputComponent";


interface ContentModalType{
    open: boolean;
    onClose: () => void;
}

export const ContentModal = ({open,onClose}: ContentModalType) => {

    return <div>
        {open && <div onClick={onClose}  className="fixed w-screen h-screen top-0 left-0 bg-slate-500/50 flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()}  className="bg-white px-6 py-4 min-w-xs rounded-xl ">
                <div className="flex items-center justify-between font-semibold text-lg ">
                    <p>Add Content</p>
                    <div onClick={onClose} className="cursor-pointer">
                    <CloseIcon size="lg" />
                    </div>
                </div>  
                <div className="mt-4 flex flex-col gap-2">
                    <InputComponent heading="Title" placeholder="Add Title" />
                    <InputComponent heading="Link" placeholder="Add Link" />
                </div>  
                <div className="mt-4 flex justify-center">
                       <Button variant="primary" size="sm" text="Submit" />
                </div>    
            </div>

        </div>}
    </div>
}

