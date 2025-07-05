import lixo from "../assets/lixo.png"
import lapis from "../assets/ferramenta-lapis.png"
import foto from "../assets/foto-icon.png"
import voltar from "../assets/de-volta.png"

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

        <section className="CMadicionar">

        </section>

        <section className="CMprodutos">

        </section>

    </section>
  )
}
