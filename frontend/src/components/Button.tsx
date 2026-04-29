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

const defaultType = " cursor-pointer flex items-center transition-transform hover:-translate-y-0.5 duration-300 active:translate-y-0.5 "
const loadingType = "flex items-center"

const sizeType = {
    "sm": "px-4 py-1 gap-1 md:rounded-md rounded-xl",
    "md": "px-5 py-1.5 gap-2 rounded-md",
    "lg": "lg:px-7 lg:py-1.5 px-6 py-1 gap-3 rounded-md ",
    "custom": "w-full flex justify-center items-center py-1.5 rounded-md"
}

export const Button = ({variant,text,startIcon,endIcon,size,onClick,loading}: ButtonType) => {
    return <button className={`${!loading?variantType[variant]:`${variantType[variant] } opacity-50`} ${!loading? defaultType : loadingType} ${sizeType[size]} ` }  onClick={onClick} disabled={loading} >
        {startIcon && startIcon}
        {text}
        {endIcon && endIcon}
    </button>
}