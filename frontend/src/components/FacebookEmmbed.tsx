

export const FacebookEmbed = ({link}:{link:string}) => {
    const isVideo = link.includes("/videos/") || link.includes("/reel/") || link.includes("/watch/");
    return isVideo ? (<div className="fb-video " data-ref={link}></div>)
        :  (<div className="fb-post" data-href={link}></div>
    )
}