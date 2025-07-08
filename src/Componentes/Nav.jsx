// import shclogo from "/shlogos.png"

// import tema from "../assets/dia-e-noite.png"
// import usuario from "../assets/usuario-de-perfil.png"

// import temaDark from "../assets/dia-e-noite-dark.png"
// import usuarioDark from "../assets/usuario-de-perfil-dark.png"

// export function NavLuz({ dark, setDark }) {
//   return (
//     <div className="nav">
//         <img src={shclogo} alt="logo do site" className="logo"/>
//         <ul>
//             <li className="">Home</li>
//             <li className="">Guia</li>
//             <li className="">Materiais</li>
//             <li className="">Jogo</li>
//             <li className="">Referências</li>
//         </ul>
//         <div className="divTemaUsuario ">
//             <img src={dark ? temaDark : tema} alt="icone do tema" className="temaUsuario" onClick={() => setDark(!dark)}/>
//             <img src={dark ? usuarioDark : usuario} alt="icone de perfil" className="temaUsuario"/>
//         </div>
//     </div>
//   )
// }

import { Link } from 'react-router-dom';
import shclogo from "/shlogos.png";
import tema from "../assets/dia-e-noite.png";
import usuario from "../assets/usuario-de-perfil.png";
import temaDark from "../assets/dia-e-noite-dark.png";
import usuarioDark from "../assets/usuario-de-perfil-dark.png";

import { useNavigate } from 'react-router-dom';  // Adicione esta linha

export function NavLuz({ dark, setDark }) {
  const navigate = useNavigate();

  return (
    <div className="nav">
        <Link to="/">
          <img src={shclogo} alt="logo do site" className="logo"/>
        </Link>
        <ul>
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
        </ul>
        <div className="divTemaUsuario">
            <img 
              src={dark ? temaDark : tema} 
              alt="icone do tema" 
              className="temaUsuario" 
              onClick={() => setDark(!dark)}
            />
            <img 
              src={dark ? usuarioDark : usuario} 
              alt="icone de perfil" 
              className="temaUsuario"
            onClick={() => navigate('/dashboard')}/>
        </div>
    </div>
  )
}