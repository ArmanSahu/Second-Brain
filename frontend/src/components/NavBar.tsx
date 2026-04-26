import { Link, useNavigate } from "react-router-dom"
import { BrainIcon } from "../Icons/BrainIcon"
import { Button } from "./Button"




export const NavBar = () => {

    const navigate = useNavigate();


    return <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 flex justify-between">
            <div className="text-2xl tracking-tight font-bold  flex items-center gap-2">
                <BrainIcon />
                <p>Second Brain</p>
            </div>
            <div className="flex items-center gap-10 ">
                <NavbarLink to="/#" text="Features" />
                <NavbarLink to="/dashboard"  text="Go to dashboard" />
                <NavbarLink to="/#" text="About" />
            </div>
            <div className="flex items-center gap-3">
                <Button variant="secondary" text="Log in" size="lg" onClick={() => navigate("/login")} />
                <Button variant="primary" text="Sign up" size="lg" onClick={() => navigate("/signup")}/>
            </div>
        </div>
    </div>
}

export const NavbarLink = ({text,to}:{text: string,to: string}) => {
    return <Link to={to} className="hover:text-blue-600  cursor-pointer ">
        {text}
    </Link>
}
