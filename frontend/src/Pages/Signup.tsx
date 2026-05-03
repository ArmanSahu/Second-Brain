import { Auth } from "../components/Auth"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"









export const SignUp = () => {    
    return <div>
        <NavBar />
        <Auth 
        type="signup" header="Create Account" subheading="Start organizing your ideas" 
    />
    
    </div>  
} 
