import { BodyComponent } from "../components/Body"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"


export const MainComponent = () => {
  return <>
    <NavBar />
    <BodyComponent />
    <Footer />
  </>
}