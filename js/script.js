const formTransacao = document.querySelector("#form-transacao");
const nomeInput = document.querySelector("#nome");
const descricaoInput = document.querySelector("#descricao");
const valorInput = document.querySelector("#valor");
const listaTransacoes = document.querySelector("#lista-transacoes");

const transacoes = [];

function salvarTransacoes() {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
}

function carregarTransacoes() {
    const dadosSalvos = localStorage.getItem("transacoes");
    if(dadosSalvos){
        const transacoesSalvas = JSON.parse(dadosSalvos);
        transacoes.push(...transacoesSalvas)
    }
}

function renderizarTransacoes() {
    listaTransacoes.textContent = "";
    transacoes.forEach(transacao => {

        if(transacao.nome === "" || transacao.descricao === ""){
            transacao.status = "Pendente";
        }else{
            transacao.status = "Classificada";   
        }
        const elementoTransacao = document.createElement("div");
        elementoTransacao.classList.add("transacao-pendente");
        
        const nomeElemento = document.createElement("span");
        nomeElemento.textContent = transacao.nome
        elementoTransacao.appendChild(nomeElemento);

        const descricaoElemento = document.createElement("span");
        descricaoElemento.textContent = transacao.descricao
        elementoTransacao.appendChild(descricaoElemento);

        const valorElemento = document.createElement("span");
        valorElemento.textContent = transacao.valor
        elementoTransacao.appendChild(valorElemento);

        const dataElemento = document.createElement("span");
        dataElemento.textContent = transacao.dataHora
        elementoTransacao.appendChild(dataElemento);

        if(transacao.status === "Pendente"){
           const botaoClassificar = document.createElement("button");
           botaoClassificar.textContent = "Classificar";
           botaoClassificar.classList.add("classificar");
           elementoTransacao.appendChild(botaoClassificar);
        }

        listaTransacoes.appendChild(elementoTransacao);
    });
}

function enviaFormulario(event) {
    event.preventDefault();

    const dataHora = new Date();
    const dia = dataHora.getDate();
    const mes = dataHora.getMonth() + 1;
    const ano = dataHora.getFullYear();
    const hora = dataHora.getHours();
    const minutos = dataHora.getMinutes();
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = String(mes).padStart(2, "0");
    const horaFormatada = String(hora).padStart(2, "0");
    const minutosFormatados = String(minutos).padStart(2, "0");
    const dataFormatada = `${diaFormatado}/${mesFormatado}/${ano} ${horaFormatada}:${minutosFormatados}`;
    
    const nome = nomeInput.value;
    const descricao = descricaoInput.value;
    const valor = valorInput.value;

    const transacao = {
        id: transacoes.length + 1,
        nome: null,
        descricao: null,
        valor: null,
        dataHora: dataFormatada,
        status: null
    }

    transacao.nome = nome;
    transacao.descricao = descricao;
    transacao.valor = valor;
    transacoes.push(transacao);
    salvarTransacoes();
    renderizarTransacoes();
    console.log(transacoes);

}

carregarTransacoes();
renderizarTransacoes();
formTransacao.addEventListener("submit", enviaFormulario);



