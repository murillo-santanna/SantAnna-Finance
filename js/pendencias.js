import {
    transacoes
} from "./transacoes.js";

import {
    classificarTransacao
} from "./modal.js";

const modalTransacao = document.querySelector("#modal-transacao");
const tituloModal = document.querySelector("#titulo-modal");
const modalNome = document.querySelector("#modal-nome");
const modalDescricao = document.querySelector("#modal-descricao");

// Consultas dos dados
function obterPendencias() {
    return transacoes.filter(transacao => {
        return transacao.status === "Pendente";
    });
}

// Renderização
function renderizarPendencias(listaPendencias, aoSelecionar) {
    listaPendencias.textContent = "";
    const pendencias = obterPendencias();
    pendencias.forEach(transacao => {
        const elementoPendencia = document.createElement("div");
        elementoPendencia.classList.add("transacao-pendente");

        const nomeElemento = document.createElement("span");
        nomeElemento.textContent = transacao.nome
        elementoPendencia.appendChild(nomeElemento);

        const descricaoElemento = document.createElement("span");
        descricaoElemento.textContent = transacao.descricao
        elementoPendencia.appendChild(descricaoElemento);

        const valorElemento = document.createElement("span");
        valorElemento.textContent = `R$ ${transacao.valor}`
        elementoPendencia.appendChild(valorElemento);

        const dataElemento = document.createElement("span");
        dataElemento.textContent = transacao.dataHora
        elementoPendencia.appendChild(dataElemento);

        const botaoClassificar = document.createElement("button");
        botaoClassificar.textContent = "Classificar";
        botaoClassificar.classList.add("classificar");
        elementoPendencia.appendChild(botaoClassificar);
        botaoClassificar.addEventListener("click", () => {
            aoSelecionar(transacao);
            classificarTransacao(transacao, modalNome, modalDescricao, tituloModal, modalTransacao);
        })

        listaPendencias.appendChild(elementoPendencia);
    });
}

export {
    obterPendencias,
    renderizarPendencias
};