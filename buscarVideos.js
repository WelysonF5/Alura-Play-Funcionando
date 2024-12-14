import { conectaApi1 } from "./conectaApi1.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi1.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }


    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.imagem, elemento.url)));
        
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));



buscarVideo();
