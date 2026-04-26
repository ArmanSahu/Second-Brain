import { useQuery } from "@tanstack/react-query"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"


type Content = {
    _id: string,
    title: string,
    link: string,
    type: "audio" | "document" | "youtube" | "twitter" | "facebook" | "instagram" | "linkedin",
    userId: string,
    createdAt: string
}

type ContentResponse = {
    message: string,
    contents: Content[]
}

export const useContent = () => {
    return useQuery<ContentResponse>({
        queryKey: ["content"],
        queryFn: async() => {
            const res = await fetch(`${Backend_URL}${URLPath.content}`,{
                credentials: "include"
            });
            if(!res.ok){
                throw new Error("Failed to fetch contents");
            }
            const data = await res.json();
            return data;
        }
    })
}