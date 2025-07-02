import { ModoLuz } from "./Componentes/ModoLuz.jsx"
import { ModoDark } from "./Componentes/ModoDark.jsx"
import { Footer } from "./Componentes/Footer.jsx"

import { HomePage } from "./pages/HomePage.jsx"
import { GuiaPage } from "./pages/GuiaPage.jsx"
import { CadastroPage } from "./pages/CadastroPage.jsx"
import { LoginPage } from "./pages/LoginPage.jsx"
import { DashBoardPage } from "./pages/DashBoardPage.jsx"



export function App() {
  return (
    <>
      <ModoLuz>
        <DashBoardPage/>
        <Footer FooterTema={"FooterLuz"}/>
      </ModoLuz>
    </>
  )
}