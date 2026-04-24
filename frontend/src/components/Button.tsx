import type { ReactElement } from "react"

interface ButtonType{
    text: string,
    variant: "primary" | "secondary",
    size: "sm" | "md" | "lg" | "custom",
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void,
    loading?: boolean
}

const variantType = {
    "primary": "bg-blue-600 text-white",
    "secondary": "bg-blue-200 text-blue-600" 
}

const defaultType = "rounded-md cursor-pointer flex items-center transition-transform hover:-translate-y-0.5 duration-300 active:translate-y-0.5 "
const loadingType = "rounded-md  flex items-center"

const sizeType = {
    "sm": "px-4 py-1 gap-1 ",
    "md": "px-5 py-2 gap-2",
    "lg": "px-7 py-1.5 gap-3 ",
    "custom": "w-full flex justify-center items-center py-1.5"
}

export const Button = ({variant,text,startIcon,endIcon,size,onClick,loading}: ButtonType) => {
    return <button className={`${!loading?variantType[variant]:`${variantType[variant] } opacity-50`} ${!loading? defaultType : loadingType} ${sizeType[size]} ` }  onClick={onClick} disabled={loading} >
        {startIcon && startIcon}
        {text}
        {endIcon && endIcon}
    </button>
}