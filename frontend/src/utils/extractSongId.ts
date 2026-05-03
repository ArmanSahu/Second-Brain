export const extractSpotifyData = (link: string) => {
  try {
    const u = new URL(link);

    if (!u.hostname.includes("spotify.com")) return null;

    const parts = u.pathname.split("/");

    return {
      type: parts[1],   
      id: parts[2],
    };
  } catch {
    return null;
  }
};