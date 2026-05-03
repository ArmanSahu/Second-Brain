import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login"
import { SignUp } from "./Pages/Signup"
import { Dashboard } from "./Pages/Dashboard"
import { Protected } from "./components/ProtectedRoute"
import { useAuthStore } from "./store/AuthStore"
import { useEffect } from "react"
import { MainComponent } from "./Pages/MainPage"
import { QueryProvider } from "./Providers/QueryProvider"

function App() {
  
  const fetchAuth = useAuthStore((s) => s.fetchAuth);
  useEffect(()=> {
    fetchAuth();

  },[]);

  return (
    <>
    <QueryProvider > 
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
    </QueryProvider>

  </>
  )
}




export default App
