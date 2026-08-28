import {
    carregarTransacoes,
    renderizarTransacoes,
    enviaFormulario
} from "./transacoes.js";

import {
    renderizarPendencias
} from "./pendencias.js";

import {
    classificarTransacao,
    salvarClassificacao
} from "./modal.js";


// Elementos do DOM
const formTransacao = document.querySelector("#form-transacao");
const nomeInput = document.querySelector("#nome");
const descricaoInput = document.querySelector("#descricao");
const valorInput = document.querySelector("#valor");

const listaTransacoes = document.querySelector("#lista-transacoes");
const listaPendencias = document.querySelector("#lista-pendencias");

const modalTransacao = document.querySelector("#modal-transacao");
const cardModal = document.querySelector("#card-modal");
const tituloModal = document.querySelector("#titulo-modal");
const modalNome = document.querySelector("#modal-nome");
const modalDescricao = document.querySelector("#modal-descricao");
const cancelarModal = document.querySelector("#cancelar-modal");
const salvarModal = document.querySelector("#salvar-modal");

let transacaoSelecionada = null;

function selecionarTransacao(transacao) {
    transacaoSelecionada = transacao;
}

if (formTransacao) {
    formTransacao.addEventListener("submit", (event) => {
        enviaFormulario(
            event,
            nomeInput,
            descricaoInput,
            valorInput,
            listaTransacoes
        );
    });
}

if (cancelarModal) {
    cancelarModal.addEventListener("click", () => {
        modalTransacao.style.display = "none";
    });
}

if (salvarModal) {
    salvarModal.addEventListener("click", () => {
    salvarClassificacao(
        transacaoSelecionada,
        modalNome,
        modalDescricao
    );

    modalTransacao.style.display = "none";

    renderizarPendencias(
        listaPendencias,
        selecionarTransacao
    );
});
}

carregarTransacoes();


if (listaTransacoes) {
    renderizarTransacoes(listaTransacoes);
}

if (listaPendencias) {
    renderizarPendencias(
        listaPendencias,
        selecionarTransacao
    );
}