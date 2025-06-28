import alvo from "./assets/alvo.png"
import custo from "./assets/custo.png"
import pratico from "./assets/tocar.png"


export function HomeDiferencial() {
  return (
    <div>
      <h1>O SH Communicator é a referência em comunicação alternativa</h1>

      <p>Com o SH Communicator, cada piscada se torna uma palavra. Uma tecnologia que rompe barreiras, abrindo novos caminhos para a verdadeira comunicação.</p>

      <div>
        <h1>Conheça o nosso diferencial</h1>

        <p>Nosso produto reúne funcionalidades pensadas para garantir a melhor experiência para quem mais precisa. Conheça agora os diferenciais que tornam essa solução única:</p>

        <div className="divNossoDiferencial">

          <div className="divDiferenciais">
            <div className="bordaIcon">
              <img src={pratico} alt="icon praticidade" className="iconeDiferencial"/>
            </div>
            <span>Praticidade</span>
            <p>Projetado para possibilitar a comunicação de forma simples e com o menor esforço possível.</p>
          </div>

          <div className="divDiferenciais">
            <div className="bordaIcon">
              <img src={custo} alt="icon custo" className="iconeDiferencial"/>
            </div>
            <span>Custo acessível</span>
            <p>Desenvolvido como uma solução de baixo custo, sem abrir mão da qualidade.</p>
          </div>

          <div className="divDiferenciais">
            <div className="bordaIcon">
              <img src={alvo} alt="icon alvo" className="iconeDiferencial"/>
            </div>
            <span>Eficiência e autonomia</span>
            <p>Permite maior liberdade e eficiência na comunicação do dia  a dia.</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HomeDiferencial
