import { ModoLuz } from "./Componentes/ModoLuz.jsx"
import { Footer } from "./Componentes/Footer.jsx"
import { HomePage } from "./pages/HomePage.jsx"


export function App() {
  return (
    <>
      <ModoLuz>
        <HomePage/>
        <Footer FooterTema={"FooterLuz"}/>
      </ModoLuz>
    </>
  )
}