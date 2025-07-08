import { Materiais } from "../Componentes/Materiais.jsx";
import { NavLuz } from "../Componentes/Nav.jsx";

export function MateriaisPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <Materiais />
    </>
  )
}
