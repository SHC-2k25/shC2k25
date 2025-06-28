import { ModoLuz } from "./Componentes/ModoLuz.jsx"
import { ModoDark } from "./Componentes/ModoDark.jsx"
import { NavLuz } from "./Componentes/NavLuz.jsx"
import { HomeIntro } from "./Componentes/HomeIntro.jsx"
import HomeDiferencial from "./HomeDiferencial.jsx"

export function App() {
  return (
    <>
      <ModoLuz>
        <NavLuz/>
        <HomeIntro/>
        <HomeDiferencial/>
        <HomeIntro/>
      </ModoLuz>
    </>
  )
}