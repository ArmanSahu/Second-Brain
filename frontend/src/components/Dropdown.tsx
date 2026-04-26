import type { FieldError } from "react-hook-form"

type DropDown = {
    values: string[],
    error?: FieldError
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const Dropdown = ({values,error,...rest}: DropDown) => {
    return <div className={`flex flex-col gap-1  `}>
        <p>Select Type</p>
        <select {...rest} className="w-full px-3 py-2 border rounded-md bg-white shadow-sm hover:border-gray-400 focus:ring-2 focus:ring-blue-500 cursor-pointer">
            {values.map((v,index) => (<option key={index} value={v}>{v}</option>))}
        </select>
        {error && <p className="text-sm text-red-500 pl-1">{error.message}</p>}
    </div>
}