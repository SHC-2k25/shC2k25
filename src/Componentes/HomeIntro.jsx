import HomeIntroFoto from "../assets/sthephen.jpg"
import { Botao } from "./Botao.jsx"

export function HomeIntro() {
  return (
    <section className="divHomeIntro">
      <div>
        <h1>E se fosse possível se <span className="span">comunicar</span> em um piscar de olhos?</h1>

        <p>Inspirado no software ACAT — utilizado pelo físico teórico e cosmólogo britânico Stephen Hawking — o SH Communicator é uma solução inovadora desenvolvida para devolver a autonomia da comunicação a pessoas com ELA.</p>

        <div className="flex gap-10">
            <Botao texto={"Baixe nosso App"}/>
            <Botao texto={"Sobre nós"}/>
        </div>
        
      </div>

      <img src={HomeIntroFoto} alt="Sthephen Hawking foto" />
    </section>
  )
}
