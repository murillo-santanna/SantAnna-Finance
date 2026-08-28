import { 
    salvarTransacoes 
} from "./transacoes.js";

function classificarTransacao(transacao, modalNome, modalDescricao, tituloModal, modalTransacao) {
    modalNome.value = transacao.nome;
    modalDescricao.value = transacao.descricao;
    tituloModal.textContent = "Classificar transação";
    modalTransacao.style.display = "flex";
    return transacao;
}

function salvarClassificacao(transacao, modalNome, modalDescricao) {
    transacao.nome = modalNome.value;
    transacao.descricao = modalDescricao.value;
    if(transacao.nome === "" || transacao.descricao === ""){
        transacao.status = "Pendente";
    }else{
        transacao.status = "Classificada";
    }
    salvarTransacoes();
}


export {
    classificarTransacao,
    salvarClassificacao
};
