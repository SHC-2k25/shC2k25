import galaxia from '../assets/galaxiA.jpg'
import unasp from '../assets/unasp-logo.png'
import instagram from '../assets/instagram-logo.png'

export function SobreNos() {
    return (
        <section className="SobreNos">
            <h1>Conheça os <span className="span">desenvolvedores</span></h1>

            <div className='SN1'>
                <div className="SN2">
                    <img src={galaxia} alt="foto desenvolvedores" className='SNdev'/>

                    <div className='SN2primeiro'>
                        <img src={unasp} alt="unasp logo" className="unasp" />

                        <div className='SN2segundo'>
                            <a href="https://www.instagram.com/gu_garcia26/" target="_blank">
                                <img src={instagram} alt="instagram do gu_garcia26" className="insta" />
                                <p>gu_garcia26</p>
                            </a>
                            <a href="https://www.instagram.com/jesus_te_4ma/" target="_blank">
                                <img src={instagram} alt="instagram do jesus_te_4ma" className="insta" />
                                <p>jesus_te_4ma</p>
                            </a>
                        </div>

                    </div>

                </div>

                <div className='SN3'>
                    <div className='SN3primeiro'>
                        <p>Somos uma dupla de estudantes do Centro Universitário Adventista de São Paulo, cursando o terceiro ano do ensino médio. Nossa equipe é formada por: <span className='span'>Gustavo Garcia</span> e <span className='span'>João Pedro Salvador</span>. Unindo nossas habilidades como grandes colegas de classe, conseguimos desenvolver o SH Communicator: um recurso pensado para oferecer autonomia, praticidade e maior<span className='span'>qualidade de vida</span> a pessoas com dificuldades de fala e mobilidade.</p>

                        <p>Nosso projeto nasceu do desejo de desenvolver uma solução na área da <span className='span'>comunicação assistiva</span>, unindo <span className='span'>tecnologia</span> e <span className='span'>propósito</span> social. Inspirados pelo <span className='span'>software ACAT</span> — que possibilitou ao renomado físico <span className='span'>Stephen Hawking</span> se comunicar mesmo com limitações motoras severas — buscamos criar uma ferramenta acessível e eficiente para dar voz a quem mais precisa.</p>
                    </div>

                    <div className="SNemail">
                        <h4>Entre em contato</h4>
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Mensagem"/>
                    </div>

                </div>
            </div>

        </section>
    )
}