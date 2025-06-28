import shclogo from "../../public/shlogos.png"
import tema from "../assets/dia-e-noite.png"
import usuario from "../assets/usuario-de-perfil.png"

export function NavLuz() {
  return (
    <div className="nav">
        <img src={shclogo} alt="logo do site" className="logo"/>
        <ul className="ul">
            <li className="">Home</li>
            <li className="">Guia</li>
            <li className="">Materiais</li>
            <li className="">Jogo</li>
            <li className="">Referências</li>
        </ul>
        <div className="divTemaUsuario ">
            <img src={tema} alt="icone do tema" className="temaUsuario"/>
            <img src={usuario} alt="icone de perfil" className="temaUsuario"/>
        </div>
    </div>
  )
}