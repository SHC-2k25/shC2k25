import { Botao } from "./Botao.jsx"

export function GuiaPassos() {
  return (
    <section className="GP">
        <h1><span className="span">Guia</span> - Veja como é <span className="span">fácil</span> de usar</h1>
        <h2>Passo 1:</h2>
        <p className="GPa">Ligue o dispositivo e certifique-se de que ele está conectado via Bluetooth ao aplicativo do SH Communicator. Essa conexão garante o envio correto dos sinais de seleção.</p>
        <Botao texto={"Baixe nosso App"}/>
        <h2>Passo 2:</h2>
        <p>Antes de aplicar os eletrodos, limpe a região epicraniana com álcool 70% para melhor contato. Fixe os eletrodos firmemente na pele para garantir a captação adequada do sinal.</p>
        <h2>Passo 3:</h2>
        <p>Observe as classes gramaticais destacadas na tela (substantivos, verbos, adjetivos etc.) a cada 4 segundos. Quando a desejada aparecer, contraia o mantenha fechado por 2 segundos para selecioná-la. O sistema reconhecerá o comando e exibirá as palavras dessa categoria.</p>
        <h2>Passo 4:</h2>
        <p>A palavra será adicionada à área de construção da frase. Após a primeira escolha, o usuário pode continuar selecionando outras palavras para formar a frase completa, optar por concluí-la para exibição, ou ainda reiniciar a frase do zero, caso deseje começar novamente.</p>

        <p className="GPb">Caso reste alguma dúvida, <span className="span">assista ao nosso tutorial</span> completo no YouTube.</p>

        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/x3t8NFxDgTM" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    </section>
  )
}