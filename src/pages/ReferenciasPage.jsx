import { NavLuz } from "../Componentes/Nav.jsx";
import { Referencias } from "../Componentes/Referencias.jsx";
import { NavMobile } from "../Componentes/NavMobile.jsx";

export function ReferenciasPage({ dark, setDark }) {
  return (
    <>
      <NavMobile dark={dark} setDark={setDark} />
      <NavLuz dark={dark} setDark={setDark} />
      <Referencias />
    </>
  )
}