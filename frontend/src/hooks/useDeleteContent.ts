import { useMutation } from "@tanstack/react-query"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"




export const useDeleteContent = () => {
    return useMutation({
       mutationFn: async(data: string) => {
            const res = await fetch(`${Backend_URL}${URLPath.content}/${data}`,{
                method: "DELETE",
                credentials: "include" 
            });

            if(!res.ok){
                throw new Error("cannot delete content");
            }
            return res.json();
       }
    })
}