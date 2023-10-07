"use strict";
// TV (modelo, resolução, tamanho em polegadas, fabricante, valor)
// Celular (modelo, memória, fabricante, valor)
// Bicicleta (modelo, tamanho do aro, fabricante, valor)
class TV {
    constructor(id, modelo, fabricante, valor, resolucao, tamanho) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.resolucao = resolucao;
        this.tamanho = tamanho;
    }
}
class Celular {
    constructor(id, modelo, fabricante, valor, memoria) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
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
carrinho.adicionarProduto(new TV(1, "a", "a", 2, 2, 2));
carrinho.adicionarProduto(new Celular(2, "a", "a", 2, 2));
carrinho.adicionarProduto(new TV(3, "a", "a", 2, 2, 2));
const produtos = carrinho.getCarrinho;
produtos.forEach((element) => {
    console.log(element);
});
