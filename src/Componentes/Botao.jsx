export function Botao({texto, onClick}) {
  return (
    <>
      <button className="Botao" onClick={onClick}>{texto}</button>
    </>
  )
}