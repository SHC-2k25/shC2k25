import { NavLuz } from "../Componentes/Nav.jsx";
import { Referencias } from "../Componentes/Referencias.jsx";


export function ReferenciasPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <Referencias />
    </>
  )
}