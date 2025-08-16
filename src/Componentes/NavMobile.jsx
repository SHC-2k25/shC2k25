import { Link } from 'react-router-dom';

import shclogo from "/shlogos.png";
import tema from "../assets/dia-e-noite.png";
import temaDark from "../assets/dia-e-noite-dark.png";
import menuMobileLuz from "../assets/menuMobileLuz.png"
import menuMobileDark from "../assets/menuMobileDark.png"
import xLuz from "../assets/xLuz.png"
import xDark from "../assets/xDark.png"
import designLuz from "../assets/designLuz.png"
import designDark from "../assets/designDark.png"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function NavMobile({ dark, setDark }) {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    return (
        
        <div className="navMobile">

            { open && ( <nav className="navLinks">
                <ul>
                    <img src={dark ? xDark : xLuz} alt="fechar icon" className="nlFechar" onClick={()=> setOpen(false) }/>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/guia">Guia</Link>
                    </li>
                    <li>
                        <Link to="/materiais">Materiais</Link>
                    </li>
                    <li>
                        <Link to="/jogo">Jogo</Link>
                    </li>
                    <li>
                        <Link to="/referencias">Referências</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre nós</Link>
                    </li>
                </ul>
                <img src={dark ? designDark : designLuz} alt="design nav-mobile" className="nlDesign" />
            </nav>) }

            <img src={dark ? menuMobileLuz : menuMobileDark}
                alt="icone menu hamburguer"
                className="menuMobile" onClick={()=> setOpen(true) } />

            <Link to="/">
                <img src={shclogo} alt="logo do site" className="logo"/>
            </Link>

            <img
                src={dark ? temaDark : tema}
                alt="icone do tema"
                className="temaUsuario"
                onClick={() => setDark(!dark)}
            />
        </div>
    )
}