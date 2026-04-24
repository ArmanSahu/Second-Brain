import type { ReactElement } from "react"
import { ShieldIcon } from "../Icons/ShieldIcon"
import { BoltIcon } from "../Icons/BoltIcon"
import { UsersIcon } from "../Icons/UsersIcon"
import { CloudIcon } from "../Icons/CloudIcon"



export const Footer = () => {
    return <div className="border-t border-gray-200 shadow-sm py-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex justify-center items-center">
                Trusted by students, creators and professionals
            </div>
            <div className="flex  justify-center gap-10">
                <FooterDisplay primaryText="Private & Secure" secText="Your data is encrypted and always protected " icon={<ShieldIcon size="lg" />} />
                <FooterDisplay primaryText="Fast & Organized" secText="Safe and find anything in seconds" icon={<BoltIcon size="lg" />} />
                <FooterDisplay primaryText="Access anywhere" secText="Your brain is synced across all devices" icon={<CloudIcon size="lg" />} />
                <FooterDisplay primaryText="Build for Everyone" secText="Simple, beautiful and made for all kind or minds" icon={<UsersIcon size="lg" />} />
            </div>
        </div>
    </div>
}

interface FooterDisplayType{
    icon: ReactElement,
    primaryText: string,
    secText: string
}

const FooterDisplay = ({icon,primaryText,secText}: FooterDisplayType) => {
    return <div className="flex gap-5 max-w-48   ">
        <div className="pt-3">
        {icon}
        </div>
        <div className="leading-tight  ">
            <p className="font-semibold text-base">{primaryText}</p>
            <p className="mt-1 text-xs text-gray-600">{secText}</p>
        </div>
    </div>
}