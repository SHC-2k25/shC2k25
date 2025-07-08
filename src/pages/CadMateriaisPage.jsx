import { CadMateriais } from "../Componentes/CadMateriais";
import { NavLuz } from "../Componentes/Nav";


export function CadMateriaisPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <CadMateriais />
    </>
  )
}
