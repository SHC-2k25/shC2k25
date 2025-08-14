export function Botao({texto, onClick}) {
  return (
    <>
      <button className="Botao" onClick={onClick} data-aos="flip-up" data-aos-delay="250">{texto}</button>
    </>
  )
}