import { create } from "zustand";
import { Backend_URL } from "../config/Backend_URL";
import { URLPath } from "../config/URLPath";


type AuthStore = {
    isAuthenticated: boolean,
    loading: boolean,
    setAuth: (value: boolean) => void ,
    fetchAuth: () => Promise<void>
}


export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    loading: true,
    setAuth: (value) => set({isAuthenticated: value}),
    fetchAuth : async() => {
        set({loading: true});
        try{
            const res =  await fetch(`${Backend_URL}${URLPath["me"]}`,{
                credentials: "include"
            });
            if(res.ok){
                set({
                    isAuthenticated: true,
                    loading: false
                });
            } else{
                set({
                    isAuthenticated: false,
                    loading: false,
                });
            }
        }catch(error){
            set({
                    isAuthenticated: false,
                    loading: false,
            });
        }
    }
}))