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

interface cardProps{
    title: string,
    type: "audio"|"video"|"tweet"|"document"|"instagram",
    tag?: string,
    link: string
}

const iconType = {
    "audio": <ShareIcon size="lg" />,
    "video": <VideoIcon size="lg" />,
    "tweet": <TweetIcon size="lg" />,
    "document": <DocumentIcon size="lg" />,
    "instagram": <InstagramIcon size="lg" />
}

export const Card = ({title,type,link}: cardProps) => {
    // const videoId = getVideoId(link)
    const videoId = type === "video" ? getVideoId(link) : undefined;
    const tweetUrl = type === "tweet" ? link.replace("x.com","twitter.com"): undefined;
    const docId = type === "document" ? extractDocId(link): undefined;
    const postId = type === "instagram" ? extractPostId(link): undefined;

    return <div className="min-w-xs max-h-80 overflow-scroll scrollbar-hide p-4 border-gray-200 border outline-slate-200 shadow-gray-200 shadow-xs rounded-md  flex flex-col gap-4 shrink-0 bg-white ">
        <div className="flex justify-between items-center gap-3 font-semibold ">
            <div className="flex items-center gap-3 text-gray-500">
                {iconType[type]}
                <p className="text-black">{title}</p>
            </div>
            <div className="flex items-center gap-5 text-gray-500">
                <a href={link} target="_blank">
                <UpRight size="md" />
                </a>
                <div className="cursor-pointer">
                <TrashIcon size="md" />
                </div>
            </div>
        </div>
        <div className="w-full ">
            {type === "video" && videoId && <iframe className="w-full rounded-md" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {type === "tweet" && tweetUrl && <blockquote className="twitter-tweet ">
                <a href={tweetUrl}></a> 
            </blockquote>}
            {type==="document" && docId && <iframe src={`https://drive.google.com/file/d/${docId}/preview`} width="640" height="480"></iframe>}
            {type==="instagram" && postId && (
                <iframe
                    src={`https://www.instagram.com/p/${postId}/embed`}
                    className="no-scrollbar-iframe"
                />
            )}
        </div>
       
    </div>
}


