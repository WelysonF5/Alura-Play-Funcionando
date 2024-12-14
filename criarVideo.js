/*
import { conectaApi1 } from "./conectaApi1.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

try {
    await conectaApi1.criarVideo(titulo, descricao, url, imagem);
    window.location.href = "./pages/envio-concluido.html";
} catch (e){
    console.error(e);

}
}

formulario.addEventListener("submit", evento => criarVideo(evento));
*/


import { conectaApi1 } from "./conectaApi1.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // Correção: Uso correto de Math

    try {
        await conectaApi1.criarVideo(titulo, descricao, url, imagem, formulario);
        window.location.href = "./envio-concluido.html"; // Redirecionamento após sucesso
    } catch (e) {
        console.error(e); // Correção: Usar console.error para mostrar o erro
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));
