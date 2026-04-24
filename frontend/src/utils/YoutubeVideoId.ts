

export const getVideoId = (url: string) => {
    try{
        const u = new URL(url);
        if(u.hostname.includes("youtu.be")){
            return u.pathname.slice(1);
        }
        if(u.pathname.includes("/shorts/")){
            return u.pathname.split("/shorts/")[1].split("?")[0];
        }
        if(u.pathname.includes("/embed/")){
            return u.pathname.split("/embed/")[1];
        }
        return u.searchParams.get("v");
    }catch{
        return null;
    }
}