import { Material } from "./Material";


export function Materiais() {
  return (
    <section className="materiais">
      <div className="materiais2">
        <h1>Conheça os <span className="span">materiais</span> utilizados no <span className="span">SHCommunicator</span></h1>
        <p>Aqui você encontra os componentes que utilizamos para dar vida ao SH Communicator, cada um contribuindo para o funcionamento do sistema como um todo.</p>
        <button><span className="span">Editar materiais</span></button>
      </div>

      <div className="materiais3">
        <Material/>
      </div>
    </section>
  )
}
