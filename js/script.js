const formTransacao = document.querySelector("#form-transacao");
const nomeInput = document.querySelector("#nome");
const descricaoInput = document.querySelector("#descricao");
const valorInput = document.querySelector("#valor");

const transacoes = []
function enviaFormulario(event){
    event.preventDefault();
    const nome = nomeInput.value;
    const descricao = descricaoInput.value;
    const valor = valorInput.value;
    const transacao = {
        id: transacoes.length + 1,
        nome: null,
        descricao: null,
        valor: null
    }
    transacao.nome = nome;
    transacao.descricao = descricao;
    transacao.valor = valor;
    transacoes.push(transacao);
    console.log(transacoes);
}

formTransacao.addEventListener("submit", enviaFormulario);