"use strict";
// TV (modelo, resolução, tamanho em polegadas, fabricante, valor)
// Celular (modelo, memória, fabricante, valor)
// Bicicleta (modelo, tamanho do aro, fabricante, valor)
// A cada inserção de produto na no carrinho, as estatísticas devem ser atualizadas.
// Possibilitar o usuaŕio de apagar um produto do carrinho.
class Produto {
    constructor(id, modelo, fabricante, valor) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
    }
    get getId() {
        return this.id;
    }
    get getModelo() {
        return this.modelo;
    }
    get getFabricante() {
        return this.fabricante;
    }
    get getValor() {
        return this.valor;
    }
}
class TV extends Produto {
    constructor(id, modelo, fabricante, valor, resolucao, tamanho) {
        super(id, modelo, fabricante, valor);
        this.resolucao = resolucao;
        this.tamanho = tamanho;
    }
    get getResolucao() {
        return this.resolucao;
    }
    get getTamanho() {
        return this.tamanho;
    }
}
class Celular extends Produto {
    constructor(id, modelo, fabricante, valor, memoria) {
        super(id, modelo, fabricante, valor);
        this.memoria = memoria;
    }
}
class Carrinho {
    constructor(id) {
        this.produtos = new Array();
        this.id = id;
    }
    adicionarProduto(produto) {
        console.log("Adicionei");
        this.produtos.push(produto);
    }
    get getCarrinho() {
        return this.produtos;
    }
}
const carrinho = new Carrinho(1);
carrinho.adicionarProduto(new TV(1, "Modelo A", "Fabricante A", 2000, 1240, 24));
carrinho.adicionarProduto(new Celular(2, "Modelo B", "Fabricante B", 3000, 128));
carrinho.adicionarProduto(new TV(3, "Modelo C", "Fabricante C", 3020, 2000, 55));
const produtos = carrinho.getCarrinho;
produtos.forEach((element) => {
    console.log(element);
});
