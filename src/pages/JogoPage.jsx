import { Jogo } from "../Componentes/Jogo";
import { NavLuz } from "../Componentes/Nav";
import { NavMobile } from "../Componentes/NavMobile.jsx";

export function JogoPage({ dark, setDark }) {
  return (
    <>
      <NavMobile dark={dark} setDark={setDark} />
      <NavLuz dark={dark} setDark={setDark} />
      <Jogo />
    </>
  )
}
