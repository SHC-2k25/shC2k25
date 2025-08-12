import { Home } from "../Componentes/Home.jsx";
import { NavLuz } from "../Componentes/Nav.jsx";
import { NavMobile } from "../Componentes/NavMobile.jsx";


export function HomePage({ dark, setDark }) {
  return (
    <>
      <div>
        <NavMobile dark={dark} setDark={setDark} />
        <NavLuz dark={dark} setDark={setDark} />
        <Home />
      </div>

    </>
  )
}