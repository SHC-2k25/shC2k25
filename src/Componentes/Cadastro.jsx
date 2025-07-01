import { BotaoCadLog } from "./BotaoCadLog";

export function Cadastro() {
  return (
    <section className="Cadastro">
        <h1><span className="span">Cadastro</span></h1>

        <div>
          <input type="text" placeholder="Nome"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Senha"/>
          <input type="password" placeholder="Confirme a senha"/>
          <BotaoCadLog texto={"Cadastrar"}/>
        </div>

    </section>
  )
}