// import { conectaApi1 } from "./conectaApi1.js";

// const lista = document.querySelector("[data-lista]");

// function constroiCard(titulo, descricao, imagem, url){
//     const video = document.createElement("li");
//     video.className = "videos__item";
//     video.innerHTML = ` <li class="videos__item">
//             <iframe width="100%" height="72%" src="${url}"
//                 title="${titulo}" frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen></iframe>
//             <div class="descricao-video">
//                 <img src="${imagem}" alt="logo canal alura">
//                 <h3>${titulo}</h3>
//                 <p>${descricao}</p>
//             </div> `;
//     return video;
// }

// async function listaVideos() {
//     const listaApi = await conectaApi1.listaVideos();
//     listaApi.forEach(elemento => lista.appendChild(
//         constroiCard(elemento.titulo, elemento.descricao, elemento.imagem, elemento.url)
//     )
// );

// }

// listaVideos();



import { conectaApi1 } from "./conectaApi1.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, imagem, url) { 
    const video = document.createElement("li"); 
    video.className = "videos__item"; 
    video.innerHTML = ` 
    <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
    <div class="descricao-video"> 
        <img src="${imagem}" alt="logo canal alura"> 
        <h3>${titulo}</h3> 
        <p>${descricao}</p> 
    </div>`; 
    return video; 
} 



async function listaVideos() { 
    try {
    const listaApi = await conectaApi1.listaVideos(); 
    listaApi.forEach(elemento => lista.appendChild( 
        constroiCard(elemento.titulo, elemento.descricao, elemento.imagem, elemento.url) 
    )); 
    } catch {
        lista.innerHTML =`<h2 class="mensagem__titulo"> Não foi possível carregar a lista de vídeos </h2>`
        alert.erro(e);
    }



}
listaVideos();