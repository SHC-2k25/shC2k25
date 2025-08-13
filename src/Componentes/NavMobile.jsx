import { Link } from 'react-router-dom';

import usuarioDark from "../assets/usuario-de-perfil-dark.png";
import shclogo from "/shlogos.png";
import tema from "../assets/dia-e-noite.png";
import temaDark from "../assets/dia-e-noite-dark.png";
import menuMobileLuz from "../assets/menuMobileLuz.png"
import menuMobileDark from "../assets/menuMobileDark.png"

import { useNavigate } from 'react-router-dom';

export function NavMobile({ dark, setDark }) {
    const navigate = useNavigate();

    
    return(
        <div className="navMobile">
            <img src={dark ? menuMobileLuz : menuMobileDark}
             alt="icone menu hamburguer"
             className="menuMobile" />

            <img src={shclogo} alt="logo do site" className="logo"/>

            <img 
              src={dark ? temaDark : tema} 
              alt="icone do tema" 
              className="temaUsuario" 
              onClick={() => setDark(!dark)}
            />
        </div>
    )
}