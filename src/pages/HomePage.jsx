import { HomeDiferencial } from "../Componentes/HomeDiferencial";
import { HomeIntro } from "../Componentes/HomeIntro";
import { HomeMissao } from "../Componentes/HomeMissao";
import { NavLuz } from "../Componentes/NavLuz";


export function HomePage() {
  return (
    <>
        <NavLuz/>
        <HomeIntro/>
        <HomeDiferencial/>
        <HomeMissao/>
    </>
  )
}