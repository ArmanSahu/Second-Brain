

export const extractPostId = (url: string) => {
    const u = new URL(url);
    if(u.hostname.includes("instagram.com")){
        return u.pathname.split("/")[2];
    }  
}