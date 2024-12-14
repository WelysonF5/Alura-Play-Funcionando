// async function listaVideos() {
//     const conexao = await fetch("http://localhost:3000/videos"); //Caminho como parãmetro para promessa
//     const conexaoConvertida = await conexao.json();
//     return conexaoConvertida;

// }

// listaVideos();

// export const conectaApi1 = {
//     listaVideos
// }




// export const conectaApi1 = {
//     async listaVideos() {
//         const conexao = await fetch("http://localhost:3000/videos");
//         const conexaoConvertida = await conexao.json();
//         return conexaoConvertida;
//     }
// }



// conectaApi1.js
// conectaApi1.js


/*
export const conectaApi1 = { 
    async listaVideos() { 
        try {
        const conexao = await fetch("http://localhost:3000/videos"); 
        if (!conexao.ok){
            throw new Error("Não foi possível listar os vídeos");
        }
        const conexaoConvertida = await conexao.json(); 
        return conexaoConvertida; 
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao listar vídeos");
    }
},

    async criarVideo(titulo, descricao, url, imagem) {
        try {
        const conexao = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                descricao: `${descricao} mil visualizações`,
                url: url,
                imagem: imagem
            })
        });

        if (!conexao.ok){
            throw new Error ("Não foi possível enviar o vídeo");
        }

        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao criar Vídeo");
    }
},

    async buscaVideo(termoDeBusca){
        try {
        const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
        if (!conexao.ok) {
            throw new Error("Não foi possível buscar os vídeos");
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
    } catch (error) {
        console.error(erro);
        throw new Error("Erro ao buscar vídeos");
    }
}
}

// Exporta o objeto conectaApi1 com ambas as funções
export default conectaApi1;

*/


export const conectaApi1 = { 
    async listaVideos() { 
        try { // Adicionar chave de abertura do bloco try
            const conexao = await fetch("http://localhost:3000/videos"); 
            if (!conexao.ok) {
                throw new Error("Não foi possível listar os vídeos");
            }
            const conexaoConvertida = await conexao.json(); 
            return conexaoConvertida; 
        } catch (error) { // Adicionar chave de fechamento do bloco try
            console.error(error);
            throw new Error("Erro ao listar vídeos");
        }
    },

    async criarVideo(titulo, descricao, url, imagem) {
        try { // Adicionar chave de abertura do bloco try
            const conexao = await fetch("http://localhost:3000/videos", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    descricao: `${descricao} mil visualizações`,
                    url: url,
                    imagem: imagem
                })
            });

            if (!conexao.ok) {
                throw new Error("Não foi possível enviar o vídeo");
            }

            const conexaoConvertida = await conexao.json();
            return conexaoConvertida;
        } catch (error) { // Adicionar chave de fechamento do bloco try
            console.error(error);
            throw new Error("Erro ao criar vídeo");
        }
    },

    async buscaVideo(termoDeBusca) {
        try { // Adicionar chave de abertura do bloco try
            const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
            if (!conexao.ok) {
                throw new Error("Não foi possível buscar os vídeos");
            }
            const conexaoConvertida = await conexao.json();
            return conexaoConvertida;
        } catch (error) { // Corrigir `erro` para `error`
            console.error(error);
            throw new Error("Erro ao buscar vídeos");
        }
    }
};

// Exporta o objeto conectaApi1 com ambas as funções
export default conectaApi1;
