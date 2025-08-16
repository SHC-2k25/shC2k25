import { NavLuz } from "../Componentes/Nav.jsx";
import { SobreNos } from "../Componentes/SobreNos.jsx";
import { NavMobile } from "../Componentes/NavMobile.jsx";

export function SobreNosPage({ dark, setDark }) {
  return (
    <>
      <NavMobile dark={dark} setDark={setDark} />
      <NavLuz dark={dark} setDark={setDark} />
      <SobreNos />
    </>
  )
}
