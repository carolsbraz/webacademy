// TV (modelo, resolução, tamanho em polegadas, fabricante, valor)
// Celular (modelo, memória, fabricante, valor)
// Bicicleta (modelo, tamanho do aro, fabricante, valor)

// A cada inserção de produto na no carrinho, as estatísticas devem ser atualizadas.

// Possibilitar o usuaŕio de apagar um produto do carrinho.

class Produto {
  private id: number;
  private modelo: string;
  private fabricante: string;
  private valor: number;

  constructor(id: number, modelo: string, fabricante: string, valor: number) {
    this.id = id;
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.valor = valor;
  }

  get getId(): number {
    return this.id;
  }

  get getModelo(): string {
    return this.modelo;
  }

  get getFabricante(): string {
    return this.fabricante;
  }

  get getValor(): number {
    return this.valor;
  }
}

class TV extends Produto {
  private resolucao: number;
  private tamanho: number;

  constructor(
    id: number,
    modelo: string,
    fabricante: string,
    valor: number,
    resolucao: number,
    tamanho: number
  ) {
    super(id, modelo, fabricante, valor);
    this.resolucao = resolucao;
    this.tamanho = tamanho;
  }

  get getResolucao(): number {
    return this.resolucao;
  }

  get getTamanho(): number {
    return this.tamanho;
  }
}

class Celular extends Produto {
  memoria: number;

  constructor(
    id: number,
    modelo: string,
    fabricante: string,
    valor: number,
    memoria: number
  ) {
    super(id, modelo, fabricante, valor);
    this.memoria = memoria;
  }
}

class Carrinho<T> {
  private id: number;
  private produtos: Array<T> = new Array<T>();

  constructor(id: number) {
    this.id = id;
  }

  public adicionarProduto(produto: T): void {
    console.log("Adicionei");
    this.produtos.push(produto);
  }

  public get getCarrinho(): Array<T> {
    return this.produtos;
  }
}

const carrinho = new Carrinho<Produto>(1);

carrinho.adicionarProduto(new TV(1, "a", "a", 2, 2, 2));

carrinho.adicionarProduto(new Celular(2, "a", "a", 2, 2));

carrinho.adicionarProduto(new TV(3, "a", "a", 2, 2, 2));

const produtos: Array<Produto> = carrinho.getCarrinho;

produtos.forEach((element) => {
  console.log(element);
});
