import { Login } from "../Componentes/Login.jsx"
import { NavLuz } from "../Componentes/Nav.jsx"

export function LoginPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <Login />
    </>
  )
}
