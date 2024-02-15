import { instance } from "../utils/http";
import { FetchProduct, IProduto } from "./produto.service";

export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export async function AddCarrinho(id: number, quant: number) {
  await instance.http.post(`/compra/${id}/${quant}`);
}

export async function FetchProductsCarrinho(): Promise<IProdutoCarrinho[]> {
  const res = await instance.http.get("/compra");

  const arrayProdutosCarrinho: IProdutoCarrinho[] = [];

  for (const item of res.data) {
    const produto = await FetchProduct(item["id"]);

    const findProductIndex = arrayProdutosCarrinho.findIndex(
      (prodCard) => prodCard.id === produto.id
    );

    if (findProductIndex >= 0) {
      arrayProdutosCarrinho[findProductIndex].quantidade += 1;
    } else {
      const produtoCarinho: IProdutoCarrinho = {
        preco: produto.preco,
        estoque: produto.estoque,
        id: produto.id,
        nome: produto.nome,
        quantidade: 1,
      };
      arrayProdutosCarrinho.push(produtoCarinho);
    }
  }

  return arrayProdutosCarrinho;
}

export async function FinalizarCompra() {
  const result = await instance.http.post(`/compra`);
  if (result.status !== 200)
    throw Error("Erro ao realizar sua compra, tente novamente!");
}
