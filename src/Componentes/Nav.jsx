import shclogo from "/shlogos.png"

import tema from "../assets/dia-e-noite.png"
import usuario from "../assets/usuario-de-perfil.png"

import temaDark from "../assets/dia-e-noite-dark.png"
import usuarioDark from "../assets/usuario-de-perfil-dark.png"

export function NavLuz({ dark, setDark }) {
  return (
    <div className="nav">
        <img src={shclogo} alt="logo do site" className="logo"/>
        <ul>
            <li className="">Home</li>
            <li className="">Guia</li>
            <li className="">Materiais</li>
            <li className="">Jogo</li>
            <li className="">Referências</li>
        </ul>
        <div className="divTemaUsuario ">
            <img src={dark ? temaDark : tema} alt="icone do tema" className="temaUsuario" onClick={() => setDark(!dark)}/>
            <img src={dark ? usuarioDark : usuario} alt="icone de perfil" className="temaUsuario"/>
        </div>
    </div>
  )
}