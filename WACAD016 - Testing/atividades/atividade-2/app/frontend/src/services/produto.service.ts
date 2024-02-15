import { instance } from "../utils/http";

export interface IProduto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

export async function FetchProducts(): Promise<IProduto[]> {
  const res = await instance.http.get(`/produto`);
  return res.data;
}

export async function FetchProduct(id: string): Promise<IProduto> {
  const res = await instance.http.get(`/produto/${id}`);
  return res.data;
}

export async function DeleteProduct(idProduto: number) {
  await instance.http.delete(`/produto/${idProduto}`);
}

export async function CreateProduct(produto: IProduto) {
  await instance.http.post("/produto", {
    nome: produto.nome,
    preco: produto.preco,
    estoque: produto.estoque,
  });
}

export async function EditProduct(produto: IProduto) {
  await instance.http.put(`/produto/${produto.id}`, {
    nome: produto.nome,
    preco: produto.preco,
    estoque: produto.estoque,
  });
}
