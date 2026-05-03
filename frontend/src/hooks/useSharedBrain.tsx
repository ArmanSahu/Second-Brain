import { useQuery } from "@tanstack/react-query"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"

type cType = {
    _id: string,
    title: string,
    link: string,
    type: "audio"|"youtube"|"twitter"|"document"|"instagram"|"facebook"|"linkedin",
    userId: {
        _id: string,
        username: string
    }
}

type contentsType  = {
    message: string,
    contents: cType[],
    username: string
} 

export const useShareBrain = (shareId: string) => {
    return useQuery<contentsType>({
        queryKey: ["sharedBrain",shareId],
        queryFn : async() => {
            const res = await fetch(`${Backend_URL}${URLPath.getSharedBrain}${shareId}`);
            if(!res.ok){
                throw new Error ("Sorry,ABFailed to fetch shared brain")
            }
            return res.json();
        },
        enabled: !!shareId
    })
}