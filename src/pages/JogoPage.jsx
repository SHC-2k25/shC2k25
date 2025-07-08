import { Jogo } from "../Componentes/Jogo";
import { NavLuz } from "../Componentes/Nav";


export function JogoPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <Jogo />
    </>
  )
}
