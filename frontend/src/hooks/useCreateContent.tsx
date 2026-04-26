import { useMutation } from "@tanstack/react-query"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"




export const useCreateContent = () => {
    return useMutation({
       mutationFn : async(data:{
        title: string,
        link: string,
        type:  "audio" | "document" | "youtube" | "twitter" | "facebook" | "instagram" | "linkedin"
       }) => {
        
            const res = await fetch(`${Backend_URL}${URLPath.content}`,{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                credentials: "include",
                body: JSON.stringify(data)
            });
            
            if(!res.ok){
                throw new Error("create failed");
            }
            return res.json();
       }    
    })
}