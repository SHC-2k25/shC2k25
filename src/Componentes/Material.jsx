import tutorial from "../assets/tutorial.jpg"

export function Material() {
  return (
    <>
      <div className="material">
        <div className="Minformacao">
          <div className="Mfoto"></div>
          <div className="Mtt">
            <h6>Arduíno UNO</h6>
            <p>Microcontrolador versátil para diversos projetos.</p>
          </div>
        </div>
        <p className="Mpreco">R$56,89</p> 
        {/* RS PERMANECE, OS NUMEROS VEM DO BD */}
      </div>
    </>
  )
}
