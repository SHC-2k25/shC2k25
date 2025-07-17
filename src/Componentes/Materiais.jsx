import { Material } from "./Material";

import { useNavigate } from 'react-router-dom';

export function Materiais() {
  const navigate = useNavigate();

  return (
    <section className="materiais">
      <div className="materiais2">
        <h1>Conheça os <span className="span">materiais</span> utilizados no <span className="span">SHCommunicator</span></h1>
        <p>Aqui você encontra os componentes que utilizamos para dar vida ao SH Communicator, cada um contribuindo para o funcionamento do sistema como um todo.</p>
        <button onClick={() => navigate('/cadastro-materiais')} className="edit"><span className="span">Editar materiais</span></button>
      </div>

      <div className="materiais3">
        <Material/>
        <Material/>
        <Material/>
        <Material/>
        <Material/>
        <Material/>
        <Material/>
        <Material/>
        
      </div>
    </section>
  )
}
