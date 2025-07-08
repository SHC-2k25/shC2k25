import { NavLuz } from "../Componentes/Nav.jsx";
import { SobreNos } from "../Componentes/SobreNos.jsx";


export function SobreNosPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <SobreNos />
    </>
  )
}
