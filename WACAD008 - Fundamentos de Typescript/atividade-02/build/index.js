"use strict";
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
        return soma / this.getNumAlunos;
    }
    get getMediaAlturas() {
        let soma = 0;
        this.listaAlunos.forEach((aluno) => {
            soma += aluno.getAltura;
        });
        return soma / this.getNumAlunos;
    }
    get getMediaPesos() {
        let soma = 0;
        this.listaAlunos.forEach((aluno) => {
            soma += aluno.getPeso;
        });
        return soma / this.getNumAlunos;
    }
}
const webacademy = new Turma(1, "WebAcademy");
const aluno1 = new Aluno(1, "Caroline", 21, 1.6, 40);
const aluno2 = new Aluno(2, "Caroline", 21, 1.6, 40);
const aluno3 = new Aluno(3, "Caroline", 21, 1.6, 40);
const aluno4 = new Aluno(4, "Caroline", 21, 1.6, 40);
webacademy.adicionarAluno(aluno1);
webacademy.adicionarAluno(aluno2);
webacademy.adicionarAluno(aluno3);
webacademy.adicionarAluno(aluno4);
console.log(webacademy.getListaAlunos);
console.log(webacademy.getMediaAlturas);
console.log(webacademy.getMediaIdades);
console.log(webacademy.getMediaPesos);
