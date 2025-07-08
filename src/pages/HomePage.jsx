import { Home } from "../Componentes/Home.jsx";
import { NavLuz } from "../Componentes/Nav.jsx";


export function HomePage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <Home />
    </>
  )
}