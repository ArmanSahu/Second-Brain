import { create } from "zustand";
import { Backend_URL } from "../config/Backend_URL";
import { URLPath } from "../config/URLPath";


type AuthStore = {
    username: string
    isAuthenticated: boolean,
    loading: boolean,
    setAuth: (value: boolean) => void,
    setUsername: (value: string) => void,
    fetchAuth: () => Promise<void>
}

type resultType = {
    message: string,
    user: {
        username: string
    }
}


export const useAuthStore = create<AuthStore>((set) => ({
    username : "",
    isAuthenticated: true,
    loading: false,
    setUsername : (value) => set({username: value}),
    setAuth: (value) => set({isAuthenticated: value}),
    fetchAuth : async() => {
        set({loading: true});
        try{
            const res =  await fetch(`${Backend_URL}${URLPath["me"]}`,{
                credentials: "include"
            });
            if (!res.ok){ 
                throw new Error("Not authenticated");
            };
            const result: resultType = await res.json();         
           
            set({
                username: result.user?.username || "",
                isAuthenticated: true,
                loading: false
            });
           
        }catch(error){
            set({
                    username: "",
                    isAuthenticated: false,
                    loading: false,
            });
        }
    }
}))