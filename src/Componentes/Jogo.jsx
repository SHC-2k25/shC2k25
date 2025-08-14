import { Botao } from "./Botao.jsx"

export function Jogo() {
  return (
    <section className="jogo">
      <h1 data-aos="flip-left">Entre na diversão com ...</h1>
      <div className="jogo2">

        <div className="jogo3" data-aos="fade-up">
          <div className="jogo4">
            <p>NÃO ESQUECER OS "SPANS". Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <Botao texto={"Jogue agora"} />
        </div>

        <iframe
          width="560"
          data-aos="fade-up"
          height="315"
          src="https://www.youtube.com/embed/x3t8NFxDgTM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>

      </div>
    </section>
  )
}
