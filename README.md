# 💰 Sant'Anna Finance

> Sistema web para gerenciamento e organização de transações financeiras compartilhadas.

O **Sant'Anna Finance** é uma aplicação desenvolvida para facilitar o controle de despesas realizadas por diferentes pessoas utilizando uma mesma conta ou cartão.

A proposta é centralizar as transações em um único ambiente, permitindo identificar responsáveis, organizar informações, acompanhar pendências e visualizar a distribuição dos gastos de forma mais clara.

O projeto está sendo desenvolvido de forma incremental, começando por um MVP totalmente baseado em JavaScript e `LocalStorage`, com planos de evolução para uma arquitetura completa com backend, banco de dados e integração com Open Finance.

---

## 🎯 Objetivo

O principal objetivo do Sant'Anna Finance é solucionar um problema comum no controle de despesas compartilhadas: a dificuldade de identificar **quem realizou cada compra, onde o dinheiro foi gasto e quais transações ainda precisam ser classificadas**.

A aplicação busca transformar o acompanhamento manual de extratos bancários em um processo mais organizado e visual.

Entre os objetivos do projeto estão:

* Centralizar transações financeiras;
* Identificar despesas pendentes de classificação;
* Associar gastos às respectivas pessoas;
* Organizar informações de cada transação;
* Facilitar o acompanhamento das despesas;
* Criar uma base para futuras integrações financeiras;
* Desenvolver uma aplicação com estrutura escalável e evolução planejada.

---

## ✨ Funcionalidades

### Transações

* [x] Cadastro de novas transações;
* [x] Identificação automática da transação;
* [x] Registro de nome;
* [x] Registro de descrição;
* [x] Registro do valor;
* [x] Registro automático de data e hora;
* [x] Identificação de transações pendentes;
* [x] Identificação de transações classificadas;
* [x] Renderização dinâmica das transações;
* [x] Persistência dos dados utilizando `LocalStorage`;
* [x] Recuperação das transações após o recarregamento da página;
* [ ] Classificação de transações pendentes;
* [ ] Edição de transações;
* [ ] Exclusão de transações.

### Dashboard

* [ ] Exibição dos gastos reais cadastrados;
* [ ] Resumo financeiro;
* [ ] Exibição de transações pendentes;
* [ ] Gráficos de despesas;
* [ ] Distribuição dos gastos por pessoa;
* [ ] Distribuição dos gastos por categoria.

### Autenticação

* [ ] Sistema de cadastro;
* [ ] Sistema de login;
* [ ] Persistência da sessão;
* [ ] Associação das transações ao usuário.

---

## 🛠️ Tecnologias e ferramentas

### Front-end

* HTML5
* CSS3
* JavaScript
* DOM API

### Armazenamento

* LocalStorage
* JSON

### Desenvolvimento

* Git
* GitHub
* Visual Studio Code

### Futuras tecnologias

A arquitetura do projeto está sendo planejada para posteriormente evoluir para:

* React;
* Backend/API;
* Banco de dados;
* Autenticação real;
* Open Finance.

---

## 🧠 Conceitos aplicados

Durante o desenvolvimento do projeto estão sendo aplicados conceitos fundamentais de desenvolvimento web e JavaScript, incluindo:

* Manipulação do DOM;
* Seleção e criação de elementos HTML;
* Eventos;
* Formulários;
* Funções;
* Arrays;
* Objetos;
* Métodos de arrays;
* Estruturas condicionais;
* Template literals;
* JSON;
* `JSON.stringify()`;
* `JSON.parse()`;
* `LocalStorage`;
* Persistência de dados no navegador;
* Renderização dinâmica;
* Separação de responsabilidades;
* Organização e reutilização de funções;
* Estruturação de dados.

---

## ⚙️ Funcionamento

O fluxo atual da aplicação funciona da seguinte forma:

```text
Usuário
   ↓
Preenche o formulário
   ↓
JavaScript captura os dados
   ↓
Criação do objeto da transação
   ↓
Transação adicionada ao array
   ↓
Dados armazenados no LocalStorage
   ↓
Renderização dinâmica no DOM
```

Ao recarregar a página:

```text
Página carregada
   ↓
LocalStorage
   ↓
Recuperação das transações
   ↓
JSON.parse()
   ↓
Array de transações
   ↓
Renderização no DOM
```

Dessa forma, as transações continuam disponíveis mesmo após o recarregamento da página.

---

## 📂 Estrutura do projeto

```text
santanna-finance/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

A estrutura poderá ser expandida conforme novas funcionalidades e tecnologias forem incorporadas ao projeto.

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/murillo-santanna/santanna-finance.git
```

### 2. Acesse a pasta

```bash
cd santanna-finance
```

### 3. Execute o projeto

Abra o arquivo `index.html` no navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

---

## 🗺️ Roadmap

### MVP — Front-end

* [x] Estrutura inicial da aplicação
* [x] Interface do Dashboard
* [x] Cadastro de transações
* [x] Geração automática de ID
* [x] Registro automático de data e hora
* [x] Identificação de transações pendentes
* [x] Status de transação
* [x] Botão de classificação
* [x] Persistência com LocalStorage
* [x] Recuperação de dados após reload
* [x] Renderização dinâmica
* [ ] Classificação de transações
* [ ] Edição de transações
* [ ] Exclusão de transações
* [ ] CRUD completo
* [ ] Dashboard conectado aos dados reais
* [ ] Gráficos dinâmicos
* [ ] Sistema de login utilizando LocalStorage
* [ ] Associação de dados ao usuário

### Evolução da aplicação

* [ ] Migração para React
* [ ] Criação de API
* [ ] Backend
* [ ] Banco de dados
* [ ] Sistema de autenticação real
* [ ] Controle de usuários
* [ ] Integração com Open Finance
* [ ] Importação automática de transações
* [ ] Categorização automática de despesas

---

## 🔮 Visão futura

A versão atual utiliza `LocalStorage` propositalmente para manter o MVP simples e permitir o desenvolvimento completo da lógica da aplicação no front-end.

Em versões futuras, o armazenamento poderá ser substituído por uma arquitetura baseada em API e banco de dados:

```text
Frontend
   ↓
API
   ↓
Backend
   ↓
Banco de dados
   ↓
Serviços financeiros / Open Finance
```

A integração com Open Finance permitirá que as transações sejam obtidas automaticamente, reduzindo a necessidade de cadastro manual.

---

## 📊 Objetivo técnico do projeto

Além de funcionar como uma aplicação financeira, o Sant'Anna Finance também serve como projeto de estudo e portfólio para demonstrar a evolução prática em desenvolvimento web.

O projeto está sendo desenvolvido priorizando:

* Organização de código;
* Separação de responsabilidades;
* Reutilização de funções;
* Manipulação de dados;
* Persistência;
* Experiência do usuário;
* Evolução incremental;
* Boas práticas de desenvolvimento.

A intenção é evoluir gradualmente de uma aplicação JavaScript simples para uma aplicação web completa, incorporando novas tecnologias conforme os requisitos do projeto aumentam.

---

## 👨‍💻 Autor

**Murillo Sant'Anna**

Desenvolvedor em formação, com foco em desenvolvimento Front-end e evolução para desenvolvimento Full Stack.

### Tecnologias em estudo

`HTML` • `CSS` • `JavaScript` • `React` • `Git` • `GitHub`

---

## 📌 Status

🚧 **Em desenvolvimento**

O Sant'Anna Finance está sendo desenvolvido incrementalmente. Novas funcionalidades, melhorias de arquitetura e novas tecnologias serão adicionadas conforme a evolução do projeto.
