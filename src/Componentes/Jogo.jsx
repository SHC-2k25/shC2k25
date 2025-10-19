import { Botao } from "./Botao.jsx"

export function Jogo() {
  return (
    <section className="jogo">
      <h1 data-aos="flip-left">Entre na diversão com <span className="span">Whisper Uplift</span></h1>
      <div className="jogo2">

        <div className="jogo3" data-aos="fade-up">
          <div className="jogo4">
            <p><span className="span">Peguino e Mr.Man</span> acabaram de criar a invenção mais legal de todos os tempos: o <span className="span">SH Communicator</span>, um dispositivo de comunicação assistiva para ajudar seu melhor amigo, <span className="span">Steve Howard</span>, que é portador de ELA. Mas uma organização misteriosa de vilões rouba o projeto para seus próprios planos. Agora, a dupla improvável parte numa <span className="span">aventura cheia de ação</span>, determinada a recuperar a invenção e devolver a voz de Steve!</p>
          </div>
          <Botao texto={"Jogue agora"} />
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rkbBQNoMhBQ"
          frameborder="0"
          allowfullscreen>
        </iframe>

      </div>
    </section>
  )
}
