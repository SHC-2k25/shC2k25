import { Materiais } from "../Componentes/Materiais.jsx";
import { NavLuz } from "../Componentes/Nav.jsx";
import { NavMobile } from "../Componentes/NavMobile.jsx";

export function MateriaisPage({ dark, setDark }) {
  return (
    <>
      <NavMobile dark={dark} setDark={setDark} />
      <NavLuz dark={dark} setDark={setDark} />
      <Materiais />
    </>
  )
}
