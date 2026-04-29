import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";
import { InputComponent } from "./InputComponent";
import { Dropdown } from "./Dropdown";
import { useForm } from "react-hook-form";
import { useCreateContent } from "../hooks/useCreateContent";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


interface ContentModalType{
    open: boolean;
    onClose: () => void;
}
type FormData = {
  title: string,
  link: string,
  type: "audio" | "document" | "youtube" | "twitter" | "facebook" | "instagram" | "linkedin"
}



export const ContentModal = ({open,onClose}: ContentModalType) => {
    const [showError, setShowError] = useState(false);

    
    const queryClient = useQueryClient();
    const {mutate,error,isPending} = useCreateContent();

    const {register,
        handleSubmit,
        formState: {errors},
        reset
      } = useForm<FormData>({
        mode: "onSubmit",
        reValidateMode: "onBlur"
      });
      
    const onSubmit = (data: FormData) => {
        setShowError(true);
        mutate(data,{
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["content"]
                });
                onClose();
                reset();
                setShowError(false);
            },
            
        });
    }
    
    return <div>
        {open && <div onClick={onClose}  className="fixed w-screen h-screen top-0 left-0 bg-slate-500/50 flex justify-center items-center ">
            <div onClick={(e) => e.stopPropagation()}  className="bg-white px-6 py-10 min-w-sm rounded-xl ">
                <div className="flex items-center justify-between font-semibold text-lg ">
                    <p>Add Content</p>
                    <div onClick={onClose} className="cursor-pointer">
                    <CloseIcon size="lg" />
                    </div>
                </div> 
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <div className="mt-4 flex flex-col gap-2">
                        <InputComponent type="text" heading="Title" placeholder="Add Title" {...register("title")} error={errors.title}/>
                        <InputComponent type="text" heading="Link" placeholder="Add Link" {...register("link")} error={errors.link}/>
                        <Dropdown values={["audio","document","youtube","twitter","instagram","facebook","linkedin"]} {...register("type")} error={errors.type} />
                        {showError && error && <p className="text-red-500">{error.message || "Failed to create content"}</p>}
                    </div>  
                    <div className="mt-6 flex justify-center">
                        <Button variant="primary" size="custom" text="Submit" loading={isPending} />
                    </div>    
                </form>
            </div>

        </div>}
    </div>
}

