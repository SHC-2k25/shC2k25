import { GuiaPassos } from "../Componentes/GuiaPassos.jsx"
import { NavLuz } from "../Componentes/Nav.jsx"
import { NavMobile } from "../Componentes/NavMobile.jsx";

export function GuiaPage({ dark, setDark }) {
  return (
    <>
      <NavMobile dark={dark} setDark={setDark} />
      <NavLuz dark={dark} setDark={setDark} />
      <GuiaPassos />
    </>
  )
}