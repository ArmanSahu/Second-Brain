import { useNavigate } from "react-router-dom"
import { BrainIcon } from "../Icons/BrainIcon"
import { Button } from "./Button"
import { InputComponent } from "./InputComponent"
import { useForm, type FieldError } from "react-hook-form"
import { Backend_URL } from "../config/Backend_URL"
import { URLPath } from "../config/URLPath"
import { useState } from "react"
import { useAuthStore } from "../store/AuthStore"



interface AuthType{
    type: "signup" | "login" ,
    header: string,
    subheading: string,
} 

type AuthResponseType = {
    message?: string,
}
 type FormData = {
        username: string,
        password: string
}

export const Auth = ({type,header,subheading}:AuthType) => {
    const [errorMessage,setErrorMessage] = useState("");
    const fetchAuth = useAuthStore((s) => s.fetchAuth);
   
    const navigate = useNavigate();

    const {register,
        handleSubmit,
        formState: {isSubmitting,errors},
        setError,
        clearErrors
    } = useForm<FormData>({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });
    
    const onSubmit = async(data:FormData) => {
        clearErrors();
        setErrorMessage("");
        const path = type === "signup" ? "signup" : "login";
        try{
            const res = await fetch(`${Backend_URL}${URLPath[path]}`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:"include",
                body: JSON.stringify(data)
            });
            let result: AuthResponseType = {};
            try{
                result = await res.json();
            }catch(err){
                console.log(err);
                result = { message: "Server returned invalid response" };
            }
            if(res.ok){
                if(type === "signup"){  
                    navigate("/login");
                }else{
                   await fetchAuth();
                navigate("/dashboard");
                }
            }else{
               if(result.message?.includes("username")){
                setError("username",{
                    message: result.message || "something went wrong. please try again"
                })
               }else{
                setError("password",{
                    message: result.message || "something went wrong. please try again"
                })
               }
            }
        }
        catch(error){
            setErrorMessage("something went wrong. please try again");
            return;
        }
    }

    return <div className="max-w-screen flex justify-center  h-screen bg-gray-100/70">
        <div className="flex flex-col items-center justify-start pt-20 ">
            <div className="flex flex-col items-center justify-center">
                <BrainIcon />
                <p className="font-bold mt-3 text-2xl">Second Brain</p>
                <p className="text-gray-500 text-md">Your thoughts,organized.</p>
            </div>
            
            <div className="bg-white mt-7 px-8 py-6 flex flex-col gap-4 rounded-2xl lg:w-sm w-xs shadow-lg shadow-gray-600 border-gray-500 border justify-center ">
                <div className=" flex flex-col items-center">
                    <p className="font-semibold  text-xl">{header}</p>
                    <p className="text-gray-500 text-sm">{subheading}</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2" >
                    <InputComponent heading="Username" placeholder="Enter your username" type="text"  {...register("username",{
                        required:{
                            value: true,
                            message: "username is required"
                        },minLength:{
                            value: 3,
                            message: "username should be of minimum 3 character"
                        },
                        maxLength:{
                            value: 40,
                            message: "username should be of maximum 40 character"
                        }
                    })} error={errors.username}/>
                    <InputComponent heading="Password"  placeholder="Enter your password" type="password" {
                        ...register("password",{
                            required: {
                                value: true,
                                message: "password is required"
                            },
                            minLength: {
                                value: 8,
                                message: "Password should be minimum of 8 character"
                            },
                            maxLength: {
                                value: 20,
                                message: "Password should be maximum of 20 character"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message:"password must contain atleast one uppercase one lowercase one number and one special character"
                            }
                        })
                    } error={errors.password} />
                    <div className="mt-2">
                    <Button  text="Submit" size="custom" variant="primary" loading={isSubmitting} />
                    </div>
                    <div className="text-sm flex justify-center text-gray-600">
                        { type === "signup" ? <div>Already have an account? <span onClick={()=>navigate("/login")} className="font-semibold text-md items-center text-blue-950   pl-1 cursor-pointer hover:text-blue-600  "> Login</span></div>
                        : <div>Don't have an account?<span onClick={()=> navigate("/signup")} className="font-semibold text-md items-center text-blue-950 pl-1 cursor-pointer hover:text-blue-600  ">Sign Up</span></div>}
                    </div>
                </form>
            </div>
            <div className="pt-4">
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
        </div>
    </div>
}

