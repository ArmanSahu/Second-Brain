import { useMutation } from "@tanstack/react-query"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"
import { useShareStore } from "../store/ShareStore"





export const useCreateLink = () => {
    const setShareLink = useShareStore(s => s.setShareLink);
    return useMutation({
        mutationFn: async(data: {
            share: boolean
        }) => {
            const res = await fetch(`${Backend_URL}${URLPath.shareLink}`,{
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(data)
            });
            if(!res.ok){
                throw new Error("something went wrong.please try again");
            }
            return res.json();
        },
        onSuccess: (data:{
            message: string,
            link: string
        }) => {
            setShareLink(data.link || "");
        },
        onError: (error) => {
            console.log(error);
        }
    })
}