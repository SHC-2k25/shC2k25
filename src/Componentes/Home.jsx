import HomeIntroFoto from "../assets/sthephen.jpg"
import { Botao } from "./Botao.jsx"

import alvo from "../assets/alvo.png"
import custo from "../assets/custo.png"
import pratico from "../assets/tocar.png"

import conjunto from "../assets/conjunto-foto.png"

import { useNavigate } from 'react-router-dom';


export function Home() {

  const navigate = useNavigate();

  return (
    <>
        <section className="divHomeIntro" data-aos="fade-up">
              <div>
                <h1 data-aos="flip-left">E se fosse possível se <span className="span">comunicar</span> em um piscar de olhos?</h1>
        
                <p>IZZZZZZZZZZZZZZZZZZnspirado no software ACAT — utilizado pelo físico teórico e cosmólogo britânico Stephen Hawking — o SH Communicator é uma solução inovadora desenvolvida para devolver a autonomia da comunicação a pessoas com ELA.</p>
        
                <div className="botoesHome">
                    <Botao texto={"Sobre nós"} onClick={() => navigate('/sobre')}/>
                </div>
                
              </div>
        
              <img src={HomeIntroFoto} alt="Sthephen Hawking foto" />
        </section>

        <section className="divHomeDiferencial" data-aos="fade-up">
              <h1 data-aos="flip-left">O <span className="span">SH Communicator</span> é a referência em comunicação alternativa</h1>
        
                <p className="dhdP1 umDois">Com o SH Communicator, cada piscada se torna uma palavra. Uma tecnologia que rompe barreiras, abrindo novos caminhos para a verdadeira comunicação.</p>
        
                <h1 className="dhdP2" data-aos="flip-left">Conheça o nosso <span className="span">diferencial</span></h1>
        
                <p className="dhdP2 umDois">Funcionalidades pensadas para garantir a melhor experiência para quem mais precisa. Conheça agora os diferenciais que tornam essa solução única:</p>
        
                <div className="divHD2">
        
                  <div className="divHD3">
        
                    <div className="bordaIcon">
                      <img src={pratico} alt="icon praticidade" className="iconeDiferencial"/>
                    </div>
                    <h4>Praticidade</h4>
                    <p>Projetado para possibilitar a comunicação de forma simples e com o menor esforço possível.</p>
        
                  </div>
        
                  <div className="divHD3">
        
                    <div className="bordaIcon">
                      <img src={custo} alt="icon custo" className="iconeDiferencial"/>
                    </div>
                    <h4>Custo acessível</h4>
                    <p>Desenvolvido como uma solução de baixo custo, sem abrir mão da qualidade.</p>
        
                  </div>
        
                  <div className="divHD3">
        
                    <div className="bordaIcon">
                      <img src={alvo} alt="icon alvo" className="iconeDiferencial"/>
                    </div>
                    <h4>Eficiência e autonomia</h4>
                    <p>Permite maior liberdade e eficiência na comunicação do dia  a dia.</p>
        
                  </div>
                  
                </div>
        </section>

        <section className="divHomeMissao" data-aos="fade-up">
              <h1 data-aos="flip-left">Garantir a <span className="span">comunicação</span> é a nossa missão.</h1>
              <div className="divHM1">
                <div className="divHM2">
                    <p>Nosso projeto, o SH Communicator, foi desenvolvido com o objetivo de facilitar a comunicação de pessoas que enfrentam dificuldades motoras e de fala, como os portadores de ELA. Mas ele vai além: nossa solução pode beneficiar também pessoas com outras condições neurológicas, como paralisia cerebral, AVC ou a síndrome do encarceramento.</p>
                    <p>Acreditamos que a comunicação é um direito essencial para a dignidade e desenvolvimento humano. Por isso, buscamos devolver a autonomia e garantir que todos tenham a chance de se expressar com clareza e praticidade.</p>
                </div>
                <img src={conjunto} alt="stephen hawking fotos" />
              </div>
        </section>
    </>
  )
}
