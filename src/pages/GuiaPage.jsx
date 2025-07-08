import { GuiaPassos } from "../Componentes/GuiaPassos.jsx"
import { NavLuz } from "../Componentes/Nav.jsx"

export function GuiaPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <GuiaPassos />
    </>
  )
}