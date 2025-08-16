import unasp from '../assets/unasp-logo.png'
import instagram from '../assets/instagram-logo.png'
import { Botao } from "./Botao.jsx"

export function SobreNos() {
    return (
        <section className="SobreNos">
            <h1 data-aos="flip-left">Conheça os <span className="span">desenvolvedores</span></h1>

            <div className='SN1'>
                <div className="SN2" data-aos="fade-up">
                    <div className='SNdev'></div> {/* foto dos vencedores, em nome de Jesus, e desenvolvedores do projeto */}

                    <div className='SN2primeiro'>
                        <img src={unasp} alt="unasp logo" className="unasp" />

                        <div className='SN2segundo'>
                            <a href="https://www.instagram.com/gu_garcia26/" target="_blank" data-aos="flip-left">
                                <img src={instagram} alt="instagram do gu_garcia26" className="insta" />
                                <p>gu_garcia26</p>
                            </a>
                            <a href="https://www.instagram.com/joao_overhere/" target="_blank" data-aos="flip-left" data-aos-delay="100">
                                <img src={instagram} alt="instagram do joao_overhere" className="insta" />
                                <p>joao_overhere</p>
                            </a>
                        </div>

                    </div>

                </div>

                <div className='SN3' data-aos="fade-up" data-aos-delay="250">
                    <div className='SN3primeiro'>
                        <p>Somos uma dupla de estudantes do Centro Universitário Adventista de São Paulo, cursando o terceiro ano do ensino médio. Nossa equipe é formada por: <span className='span'>Gustavo Garcia</span> e <span className='span'>João Pedro Salvador</span>. Unindo nossas habilidades como grandes colegas de classe, conseguimos desenvolver o SH Communicator: um recurso pensado para oferecer autonomia, praticidade e maior <span className='span'>qualidade de vida</span> a pessoas com dificuldades de fala e mobilidade.</p>

                        <p>Nosso projeto nasceu do desejo de desenvolver uma solução na área da <span className='span'>comunicação assistiva</span>, unindo <span className='span'>tecnologia</span> e <span className='span'>propósito</span> social. Inspirados pelo <span className='span'>software ACAT</span> — que possibilitou ao renomado físico <span className='span'>Stephen Hawking</span> se comunicar mesmo com limitações motoras severas — buscamos criar uma ferramenta acessível e eficiente para dar voz a quem mais precisa.</p>
                    </div>

                </div>
            </div>

        </section>
    )
}