import voltar from "../assets/de-volta.png"
import foto from "../assets/foto-icon.png"
import { Produtos } from "./Produtos.jsx"

export function CadMateriais() {
  return (
    <section className="CadMateriais">

        <div className="CM1">
            <div className="voltar">
                <img src={voltar} alt="icon voltar" />
                <p>Voltar</p>
            </div>
            <h1>Cadastrar ou Atualizar <span className="span">Produto</span></h1>
        </div>

          <div className="Adicionar">
                <img src={foto} alt="foto icon" />
                <input type="text" placeholder="máx. 27 caracteres" maxLength={25}/>
                <input type="text" placeholder="máx. 70 caracteres" maxLength={73}/>
                <input type="text" placeholder="Exemplo: 99.99" className="Apreco"/>
                <button>Adicionar</button>
          </div>
          
          <div className="CMprodutos">

            <div className="CMtitulo">
              <h4>Nome</h4>
              <h4>Descrição</h4>
              <h4>Preço</h4>
            </div>

            <Produtos/>

          </div>
    
    </section>
  )
}
