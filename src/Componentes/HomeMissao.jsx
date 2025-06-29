import conjunto from "../assets/conjunto-foto.png"

export function HomeMissao() {
  return (
    <section className="divHomeMissao">
      <h1>Garantir a <span className="span">comunicação</span> é a nossa missão.</h1>
      <div className="divHM1">
        <div className="divHM2">
            <p>Nosso projeto, o SH Communicator, foi desenvolvido com o objetivo de facilitar a comunicação de pessoas que enfrentam dificuldades motoras e de fala, como os portadores de ELA. Mas ele vai além: nossa solução pode beneficiar também pessoas com outras condições neurológicas, como paralisia cerebral, AVC ou a síndrome do encarceramento.</p>
            <p>Acreditamos que a comunicação é um direito essencial para a dignidade e desenvolvimento humano. Por isso, buscamos devolver a autonomia e garantir que todos tenham a chance de se expressar com clareza e praticidade.</p>
        </div>
        <img src={conjunto} alt="stephen hawking fotos" />
      </div>
    </section>
  )
}