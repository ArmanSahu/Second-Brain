import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login"
import { NavBar } from "./components/NavBar"
import { BodyComponent } from "./components/Body"
import { Footer } from "./components/Footer"
import { SignUp } from "./Pages/Signup"
import { Dashboard } from "./Pages/Dashboard"
import { Protected } from "./components/ProtectedRoute"
import { useAuthStore } from "./store/AuthStore"
import { useEffect } from "react"


function App() {

  const fetchAuth = useAuthStore((s) => s.fetchAuth);

  useEffect(()=> {
    fetchAuth();
  },[]);

  return (
    <>
    <BrowserRouter>

       <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={
          <Protected>
            <Dashboard />
          </Protected>
        }  />

       </Routes>
   
    </BrowserRouter>

  </>
  )
}


export const MainComponent = () => {
  return <>
    <NavBar />
    <BodyComponent />
    <Footer />
  </>
}

export default App
