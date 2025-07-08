import { Input } from "./Input";
import { BotaoCadLog } from "./BotaoCadLog";

export function Login() {
  return (
    <section className="Login">
        <h1><span className="span">Login</span></h1>
        <div>
            <Input tipo={"text"} placeholder={"Nome"}/>
            <Input tipo={"email"} placeholder={"Email"}/>
            <Input tipo={"password"} placeholder={"Senha"}/>
            <BotaoCadLog texto={"Logar"}/>
        </div>
    </section>
  )
}