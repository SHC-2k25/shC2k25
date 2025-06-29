import alvo from "../assets/alvo.png"
import custo from "../assets/custo.png"
import pratico from "../assets/tocar.png"


export function HomeDiferencial() {
  return (
    <section className="divHomeDiferencial">
      <h1>O <span className="span">SH Communicator</span> é a referência em comunicação alternativa</h1>

        <p className="dhdP1 umDois">Com o SH Communicator, cada piscada se torna uma palavra. Uma tecnologia que rompe barreiras, abrindo novos caminhos para a verdadeira comunicação.</p>

        <h1 className="dhdP2">Conheça o nosso <span className="span">diferencial</span></h1>

        <p className="dhdP2 umDois">Funcionalidades pensadas para garantir a melhor experiência para quem mais precisa. Conheça agora os diferenciais que tornam essa solução única:</p>

        <div className="divHD2">

          <div className="divHD3">

            <div className="bordaIcon">
              <img src={pratico} alt="icon praticidade" className="iconeDiferencial"/>
            </div>
            <h4>Praticidade</h4>
            <p>Projetado para possibilitar a comunicação de forma simples e com o menor esforço possível.</p>

          </div>

          <div className="divHD3">

            <div className="bordaIcon">
              <img src={custo} alt="icon custo" className="iconeDiferencial"/>
            </div>
            <h4>Custo acessível</h4>
            <p>Desenvolvido como uma solução de baixo custo, sem abrir mão da qualidade.</p>

          </div>

          <div className="divHD3">

            <div className="bordaIcon">
              <img src={alvo} alt="icon alvo" className="iconeDiferencial"/>
            </div>
            <h4>Eficiência e autonomia</h4>
            <p>Permite maior liberdade e eficiência na comunicação do dia  a dia.</p>

          </div>
          
        </div>
    </section>
  )
}