import { Botao } from "./Botao.jsx"

export function GuiaPassos() {
  return (
    <section className="GP">
      <h1 data-aos="flip-left"><span className="span">Guia</span> - Veja como é <span className="span">fácil</span> de usar</h1>
      <h2 data-aos="flip-left" data-aos-delay="200">Passo 1:</h2>
      <p className="GPa" data-aos="fade-up">Ligue o dispositivo e verifique se ele está conectado ao mesmo Wi-Fi do servidor web do SH Communicator.</p>
      <h2 data-aos="flip-left" data-aos-delay="500">Passo 2:</h2>
      <p data-aos="fade-up">Certifique-se de que o sensor IR esteja corretamente alinhado com os olhos para capturar o fechamento do olho.</p>
      <h2 data-aos="flip-left" data-aos-delay="800">Passo 3:</h2>
      <p data-aos="fade-up">Olhe para as classes gramaticais destacadas na tela a cada 4 segundos. Quando a desejada aparecer, feche os olhos por 2 segundos para selecioná-la. O sistema reconhecerá o comando e mostrará as palavras dessa categoria.</p>
      <h2 data-aos="flip-left" data-aos-delay="1000">Passo 4:</h2>
      <p data-aos="fade-up">A palavra será adicionada à área de construção da frase. Depois da primeira escolha, o usuário pode continuar selecionando palavras, concluir a frase para exibição ou reiniciá-la do zero.</p>

      <p className="GPb" data-aos="fade-up">Caso reste alguma dúvida, <span className="span">assista ao nosso tutorial</span> completo no YouTube.</p>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/UGjddoPfx8w" frameborder="0" allowfullscreen></iframe>
      
    </section>
  )
}