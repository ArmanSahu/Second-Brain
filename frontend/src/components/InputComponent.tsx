import type { FieldError } from "react-hook-form"



export type InputType = {
    heading: string,
    placeholder: string,
    type?: string,
    error?: FieldError,
    submitting?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

export const InputComponent = ({heading,placeholder,type,error,...rest}: InputType) => {
    return <div>
        <div className="flex flex-col justify-center gap-1">
            <p>{heading}</p>
            <input type={type} {...rest} placeholder={placeholder} className="w-full px-3 py-1 placeholder:text-sm placeholder:text-gray-700/60 border outline-none rounded-md"/>
        </div>
        {error ? <p className="text-sm text-red-500 pl-1">{error.message}</p> : "" }
    </div>
} 