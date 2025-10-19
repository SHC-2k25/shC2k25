import emg from "../assets/imgEmgTudo.png"
import porte from "../assets/imgPorte.png"
import pilha from "../assets/imgPilha.jpg"
import proto from "../assets/imgProtoo.png"
import esp from "../assets/imgEsp.jpg"
import jumper from "../assets/imgJumperr.png"
import interruptor from "../assets/imgInterruptor.png"
import filamento from "../assets/imgFIlamento.png"
import infra from "../assets/infra.jpg"

import { useNavigate } from 'react-router-dom';

export function Materiais() {
  const navigate = useNavigate();

  return (
    <section className="materiais" data-aos="fade-up">
      <div className="materiais2">
        <h1 data-aos="flip-left">Conheça os <span className="span">materiais</span> utilizados no <span className="span">SHCommunicator</span></h1>
        <p>Aqui você encontra os componentes que utilizamos para dar vida ao SH Communicator, cada um contribuindo para o funcionamento do sistema como um todo.</p>
      </div>

      <div className="materiais3">

        <div className="material">
          <div className="Minformacao">
            <img src={esp} className="Mfoto"></img>
            <div className="Mtt">
              <h6>ESP32 + Wi-Fi e Bluetooth</h6>
              <p>Microcontrolador usado em projetos de IoT.</p>
            </div>
          </div>
          <p className="Mpreco">R$49,90</p> 
        </div>

        <div className="material">
          <div className="Minformacao">
            <img src={infra} className="Mfoto"></img>
            <div className="Mtt">
              <h6>Sensor IR Lm393</h6>
              <p>Sensor infravermelho detecta presença e movimento com precisão e eficiência.</p>
            </div>
          </div>
          <p className="Mpreco">R$12,49</p> 
        </div>

        <div className="material">
          <div className="Minformacao">
            <img src={jumper} className="Mfoto"></img>
            <div className="Mtt">
              <h6>Jumpers</h6>
              <p>Fios conecteres usado em protoboards ou circuitos eletrônicos.</p>
            </div>
          </div>
          <p className="Mpreco">R$7,90</p> 
        </div>

        <div className="material">
          <div className="Minformacao">
            <img src={interruptor} className="Mfoto"></img>
            <div className="Mtt">
              <h6>Interruptor</h6>
              <p>Chave gangorra dois terminais.</p>
            </div>
          </div>
          <p className="Mpreco">R$1,50</p> 
        </div>

        <div className="material">
          <div className="Minformacao">
            <img src={porte} className="Mfoto"></img>
            <div className="Mtt">
              <h6>Suporte de 3 pilhas AA</h6>
              <p>Conector de pilhas AA para<br/> circuitos eletrônicos.</p>
            </div>
          </div>
          <p className="Mpreco">R$17,90</p> 
        </div>

        <div className="material">
          <div className="Minformacao">
            <img src={pilha} className="Mfoto"></img>
            <div className="Mtt">
              <h6>Pilhas</h6>
              <p>Fonte de energia portátil usada<br/> em aparelhos eletrônicos.</p>
            </div>
          </div>
          <p className="Mpreco">R$13,50</p> 
        </div>

        <div className="material">
          <div className="Minformacao">
            <img src={filamento} className="Mfoto"></img>
            <div className="Mtt">
              <h6>Filamento</h6>
              <p>Material usado para formar<br/> peças de impressão 3D.</p>
            </div>
          </div>
          <p className="Mpreco">R$84,55</p> 
        </div>

      </div>
    </section>
  )
}
