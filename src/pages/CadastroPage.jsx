import { Cadastro } from "../Componentes/Cadastro.jsx"
import { NavLuz } from "../Componentes/Nav.jsx"

export function CadastroPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <Cadastro />
    </>
  )
}
