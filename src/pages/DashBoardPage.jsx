import { DashBoard } from "../Componentes/DashBoard.jsx";
import { NavLuz } from "../Componentes/Nav.jsx";

export function DashBoardPage({ dark, setDark }) {
  return (
    <>
      <NavLuz dark={dark} setDark={setDark} />
      <DashBoard />
    </>
  )
}
