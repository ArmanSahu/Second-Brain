

export const extractDocId = (url: string) => {
    const u = new URL(url);
    if(u.hostname === "drive.google.com"){
        return u.pathname.split("/")[3];
    }  
}