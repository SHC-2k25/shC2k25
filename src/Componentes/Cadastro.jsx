import { Input } from "./Input";
import { BotaoCadLog } from "./BotaoCadLog";

export function Cadastro() {
  return (
    <section className="Cadastro">
        <h1><span className="span">Cadastro</span></h1>

        <div>
          <Input tipo={"text"} placeholder={"Nome"}/>
          <Input tipo={"email"} placeholder={"Email"}/>
          <Input tipo={"password"} placeholder={"Senha"}/>
          <Input tipo={"password"} placeholder={"Confirme a senha"}/>
          <BotaoCadLog texto={"Cadastrar"}/>
        </div>

    </section>
  )
}