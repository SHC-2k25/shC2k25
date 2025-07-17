import { Input } from "./Input";
import { BotaoCadLog } from "./BotaoCadLog";
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <section className="Login">
        <h1><span className="span">Login</span></h1>
        <div className="logDiv" >
            <Input tipo={"text"} placeholder={"Nome"}/>
            <Input tipo={"email"} placeholder={"Email"}/>
            <Input tipo={"password"} placeholder={"Senha"}/>
            <BotaoCadLog texto={"Entrar"}/>

            <div className="perguntaLogCad">
              <p>Não tem uma conta?</p>
              <Link to="/cadastro"><button><span className="span">Cadastre-se agora</span></button></Link>
            </div>

        </div>
    </section>
  )
}