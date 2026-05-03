import { Auth } from "../components/Auth"
import { NavBar } from "../components/NavBar"


export const Login = () => {
    return  <div>
        <NavBar />
        <Auth type="login" header="Sign in to your account" subheading="Welcome back! Enter your details."  />
    </div>
}