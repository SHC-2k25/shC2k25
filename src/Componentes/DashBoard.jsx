import { BotaoCadLog } from "./BotaoCadLog.jsx"
import { Input } from "./Input.jsx"
import  sair from "../assets/sair.png"
import  sairDark from "../assets/sairDark.png"

export function DashBoard({ dark }) {
  return (
    <section className="DashBoard">
        <div className="DSlinha"><h1>Atualizar <span className="span">Dados</span></h1></div>

        <div className="DS2">
            <div className="DSinputs">
                <Input tipo={"text"} placeholder={"Novo nome"}/>
                <Input tipo={"email"} placeholder={"Novo email"}/>
                <Input tipo={"password"} placeholder={"Nova senha"}/>
                <BotaoCadLog texto={"Atualizar"} tema={"BotaoCLDark"}/>
            </div>
            <div className="DS3">
                <div className="DSfoto"><div></div></div>
                <div className="DS4">
                  <button>Alterar foto</button>
                  <div className="sairDiv">
                    <img src={dark ? sairDark : sair} alt="sair logo" />
                    <p>Sair</p>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
