import lixo from "../assets/lixo.png"
import lapis from "../assets/ferramenta-lapis.png"
import foto from "../assets/foto-icon.png"

export function Produtos() {
  return (
    <div className="Produtos">
      <img src={foto} alt="icon foto" className="foto" />

      <p className="nome">Arduíno Uno</p>
      <p className="descricao">Microcontrolador versátil para diversos projetos.</p>
      <p>R$156,89</p>

      <div className="icons">
        <img src={lapis} alt="icon lapis" className="icon"/>
        <img src={lixo} alt="icon lixo" className="icon"/>
      </div>

    </div>
  )
}
