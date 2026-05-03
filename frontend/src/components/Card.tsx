import { useQueryClient } from "@tanstack/react-query"
import { useDeleteContent } from "../hooks/useDeleteContent"
import { DocumentIcon } from "../Icons/DocumentIcon"
import { InstagramIcon } from "../Icons/InstagramIcon"
import { ShareIcon } from "../Icons/ShareIcon"
import { TrashIcon } from "../Icons/TrashIcon"
import { TweetIcon } from "../Icons/TweetIcon"
import { UpRight } from "../Icons/UpRightIcon"
import { VideoIcon } from "../Icons/VideoIcon"
import { extractDocId } from "../utils/Docs-Id"
import { extractPostId } from "../utils/PostId"
import { getVideoId } from "../utils/YoutubeVideoId"
import { useEffect } from "react"
import { FacebookIcon } from "../Icons/FacebookIcon"
import { LinkedinIcon } from "../Icons/LinkedinIcon"

import { extractSpotifyData } from "../utils/extractSongId"
import { FacebookEmbed } from "./FacebookEmmbed"

interface cardProps{
    title: string,
    type: "audio"|"youtube"|"twitter"|"document"|"instagram"|"facebook"|"linkedin",
    tag?: string,
    link: string,
    id: string
}

const iconType = {
    "audio": <div className="text-blue-400"><ShareIcon size="md" /></div>,
    "youtube": <div className="text-red-600"><VideoIcon size="md" /></div>,
    "twitter": <div className="text-sky-500"><TweetIcon size="md" /></div>,
    "document": <div className="text-black"><DocumentIcon size="md" /></div>,
    "instagram": <div className="text-pink-600"><InstagramIcon size="md" /></div>,
    "facebook": <div className="text-sky-700"><FacebookIcon size="md" /></div>,
    "linkedin" : <div className="text-sky-700"><LinkedinIcon size="md" /></div>,
}



export const Card = ({title,type,link,id}: cardProps) => {
   
    const {mutate,error} = useDeleteContent();
    const queryClient = useQueryClient();

    function deleteContent(id:string){
       mutate(id,{
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["content"]});
            },
       })
    }

    let videoId = type === "youtube" ? getVideoId(link) : undefined;
    let tweetUrl = type === "twitter" ? link.replace("x.com","twitter.com"): undefined;
    let docId = type === "document" ? extractDocId(link): undefined;
    let postId = type === "instagram" ? extractPostId(link): undefined;
    let songData = type === "audio" ? extractSpotifyData(link) : undefined;
    let linkedInId: string | undefined = undefined;
    if(type === "linkedin"){
        const linkedinMatch = link.match(/activity-(\d+)/);
        linkedInId = linkedinMatch?.[1];
    }

    useEffect(() => {
    const timer = setTimeout(() => {
        if (type === "twitter" && (window as any).twttr) {
            (window as any).twttr.widgets.load();
        }

        if (type === "instagram" && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
        }

        if (type === "facebook" && (window as any).FB) {
            (window as any).FB.XFBML.parse();
        }
    }, 200);

        return () => clearTimeout(timer);
        }, [type, link]);

    return <div className="min-w-xs min-h-60 max-h-80 overflow-y-auto scrollbar-hide p-4 border-gray-200 border outline-slate-200 shadow-gray-200 shadow-xs rounded-md  flex flex-col gap-4 shrink-0 bg-white ">
        <div className="flex justify-between items-center gap-3 font-semibold ">
            <div className="flex items-center gap-3 text-gray-500">
                {iconType[type]}
                <p className="text-black">{title}</p>
            </div>
            <div className="flex items-center gap-5 text-gray-500">
                <a href={link} target="_blank" className="cursor-pointer hover:bg-blue-600 px-1 py-1 rounded-sm">
                <UpRight size="md" />
                </a>
                <div className="cursor-pointer hover:bg-red-500 px-1 py-1 rounded-sm" onClick={() => deleteContent(id)}>
                <TrashIcon size="md" />
                </div>
            </div>
        </div>
        <div className="md:w-full max-w-2xs   md:max-w-full ">
            {type === "youtube" && videoId && <iframe className="w-full aspect-video rounded-md" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {type === "twitter" && tweetUrl && <blockquote className="twitter-tweet  ">
                <a href={tweetUrl}></a> 
            </blockquote>}

            {type==="document" && docId && <iframe src={`https://drive.google.com/file/d/${docId}/preview`} width="640" height="480"></iframe>}

            {type==="instagram" && postId && (
                <blockquote className="instagram-media">
                    <a href={`https://www.instagram.com/p/${postId}/`}></a>
                </blockquote>
            )}
            {type === "facebook" && <FacebookEmbed link={link} /> }
            {type === "linkedin" && linkedInId &&(
                <iframe
                    src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${linkedInId}`}
                    className="w-full h-[400px]"
                />
            )}
            {type === "audio" && songData && 
            <iframe
                src={`https://open.spotify.com/embed/${songData.type}/${songData.id}`}
                width="100%"
                height={songData.type === "track" ? 152 : 380}
                className="rounded-xl"
                />}
        </div>
        {error && <div className="text-red-500 text-sm">cannot delete video</div>}
    </div>
}


