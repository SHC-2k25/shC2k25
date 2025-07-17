import { Input } from "./Input";
import { BotaoCadLog } from "./BotaoCadLog";
import { Link } from 'react-router-dom';

export function Cadastro() {
  return (
    <section className="Cadastro">
        <h1><span className="span">Cadastro</span></h1>

        <div className="CadDiv">
          <Input tipo={"text"} placeholder={"Nome"}/>
          <Input tipo={"email"} placeholder={"Email"}/>
          <Input tipo={"password"} placeholder={"Senha"}/>
          <Input tipo={"password"} placeholder={"Confirme a senha"}/>
          <BotaoCadLog texto={"Cadastrar"}/>

          <div className="perguntaLogCad">
              <p>Já tem uma conta?</p>
              <Link to="/login"><button><span className="span">Faça Login</span></button></Link>
          </div>
        </div>

    </section>
  )
}