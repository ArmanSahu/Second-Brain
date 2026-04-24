import type { ReactElement } from "react"

interface SideBarProp{
    text: string,
    icon: ReactElement
}

export const SideBarItem = ({text,icon}: SideBarProp) => {
    return <div className="flex justify-start items-center gap-3 rounded-lg text-gray-700 hover:bg-gray-200 hover:text-blue-600 px-6 py-2 transition-all duration-200  cursor-pointer">
        <div className="cursor-pointer">
            {icon}
        </div>
        <div className="cursor-pointer">
        {text}
        </div>
    </div>
}