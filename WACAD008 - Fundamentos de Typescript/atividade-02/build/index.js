"use strict";
let turmas = new Array();
let numTurmas = 0;
let numAlunos = 0;
class Aluno {
    constructor(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getIdade() {
        return this.idade;
    }
    set setIdade(idade) {
        this.idade = idade;
    }
    get getAltura() {
        return this.altura;
    }
    set setAltura(altura) {
        this.altura = altura;
    }
    get getPeso() {
        return this.peso;
    }
    set setPeso(peso) {
        this.peso = peso;
    }
}
class Turma {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.listaAlunos = new Array();
    }
    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getListaAlunos() {
        return this.listaAlunos;
    }
    adicionarAluno(aluno) {
        this.listaAlunos.push(aluno);
    }
    get getNumAlunos() {
        return this.listaAlunos.length;
    }
    get getMediaIdades() {
        let soma = 0;
        this.listaAlunos.forEach((aluno) => {
            soma += aluno.getIdade;
        });
        let media = soma / this.getNumAlunos;
        if (isNaN(media)) {
            return 0;
        }
        else {
            return media;
        }
    }
    get getMediaAlturas() {
        let soma = 0;
        this.listaAlunos.forEach((aluno) => {
            soma += aluno.getAltura;
        });
        let media = soma / this.getNumAlunos;
        if (isNaN(media)) {
            return 0;
        }
        else {
            return media;
        }
    }
    get getMediaPesos() {
        let soma = 0;
        this.listaAlunos.forEach((aluno) => {
            soma += aluno.getPeso;
        });
        let media = soma / this.getNumAlunos;
        if (isNaN(media)) {
            return 0;
        }
        else {
            return media;
        }
    }
}
function listaAlunos(aluno) {
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    id.innerText = aluno.getId + "";
    const nome = document.createElement("td");
    nome.innerText = aluno.getNome + "";
    const idade = document.createElement("td");
    idade.innerText = aluno.getIdade + "";
    const altura = document.createElement("td");
    altura.innerText = aluno.getAltura + "";
    const peso = document.createElement("td");
    peso.innerText = aluno.getPeso + "";
    tr.appendChild(id);
    tr.appendChild(nome);
    tr.appendChild(idade);
    tr.appendChild(altura);
    tr.appendChild(peso);
    return tr;
}
function listaTurmas() {
    const div = document.createElement("div");
    div.classList.add("turma");
    const listTurmas = document.getElementById("turmas");
    listTurmas.innerHTML = "";
    turmas.forEach((turma) => {
        const nomeTurma = document.createElement("h4");
        nomeTurma.innerHTML = turma.getNome;
        const qtdeAlunos = document.createElement("p");
        qtdeAlunos.innerHTML = "<b>Quantidade de alunos: </b>" + turma.getNumAlunos;
        const mediaIdade = document.createElement("p");
        mediaIdade.innerHTML = "<b>Média de idades: </b>" + turma.getMediaIdades;
        const mediaAltura = document.createElement("p");
        mediaAltura.innerHTML = "<b>Média de altura: </b>" + turma.getMediaAlturas;
        const mediaPeso = document.createElement("p");
        mediaPeso.innerHTML = "<b>Média de peso: </b>" + turma.getMediaPesos;
        const table = document.createElement("table");
        table.classList.add("table");
        table.classList.add("table-striped");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const id = document.createElement("th");
        id.innerText = "#";
        const nome = document.createElement("th");
        nome.innerText = "Nome";
        const idade = document.createElement("th");
        idade.innerText = "Idade";
        const altura = document.createElement("th");
        altura.innerText = "Altura";
        const peso = document.createElement("th");
        peso.innerText = "Peso";
        tr.appendChild(id);
        tr.appendChild(nome);
        tr.appendChild(idade);
        tr.appendChild(altura);
        tr.appendChild(peso);
        thead.appendChild(tr);
        table.appendChild(thead);
        const tbody = document.createElement("tbody");
        turma.getListaAlunos.forEach((aluno) => {
            tbody.appendChild(listaAlunos(aluno));
        });
        table.appendChild(tbody);
        const br = document.createElement("br");
        div.appendChild(nomeTurma);
        div.appendChild(qtdeAlunos);
        div.appendChild(mediaIdade);
        div.appendChild(mediaAltura);
        div.appendChild(mediaPeso);
        div.appendChild(table);
        div.appendChild(br);
        listTurmas === null || listTurmas === void 0 ? void 0 : listTurmas.appendChild(div);
    });
}
const addTurma = document.getElementById("btn-add-turma");
addTurma === null || addTurma === void 0 ? void 0 : addTurma.addEventListener("click", () => {
    const nome = document.getElementById("in-nome-turma");
    const turma = new Turma(numTurmas++, nome.value);
    turmas.push(turma);
    const selectTurmas = (document.getElementById("select-turmas"));
    selectTurmas.innerHTML = "";
    turmas.forEach((turma) => {
        const opt = document.createElement("option");
        opt.setAttribute("value", turma.getId + "");
        opt.innerText = turma.getNome;
        selectTurmas.appendChild(opt);
    });
    nome.value = "";
    listaTurmas();
});
const addAluno = document.getElementById("btn-add-aluno");
addAluno === null || addAluno === void 0 ? void 0 : addAluno.addEventListener("click", () => {
    const selectTurmas = (document.getElementById("select-turmas"));
    const nome = document.getElementById("in-nome-aluno");
    const idade = document.getElementById("in-idade-aluno");
    const altura = document.getElementById("in-altura-aluno");
    const peso = document.getElementById("in-peso-aluno");
    const idadeNumber = +idade.value;
    const alturaNumber = +altura.value;
    const pesoNumber = +peso.value;
    const aluno = new Aluno(numAlunos++, nome.value, idadeNumber, alturaNumber, pesoNumber);
    turmas.forEach((turma) => {
        if (turma.getId == +selectTurmas.value) {
            turma.adicionarAluno(aluno);
        }
    });
    nome.value = "";
    idade.value = "";
    altura.value = "";
    peso.value = "";
    listaTurmas();
});
listaTurmas();
