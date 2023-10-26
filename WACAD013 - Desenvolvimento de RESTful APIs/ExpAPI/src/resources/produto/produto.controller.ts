import { Request, Response } from 'express';
import { getAllProdutos, createProduto, jaExiste, readProduto, updateProduto } from './produto.service';
import { CreateProdutoDto } from './produto.types';

async function index(req: Request, res: Response) {
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req: Request, res: Response) {
  const produto = req.body as CreateProdutoDto;
  try {
    if (await jaExiste(produto.nome)) return res.status(400).json([{ msg: 'Produto já existe' }]);
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const produto = await readProduto(id);
    if (!produto) return res.status(404).json([{ msg: 'Produto não encontrado' }]);
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function update(req: Request, res: Response) {
  const id = req.params.id;
  const produto = req.body;

  try {
    const produtoAtual = await readProduto(id);
    if (!produtoAtual) return res.status(404).json([{ msg: 'Produto não encontrado' }]);
    if (produtoAtual?.nome != produto.nome && (await jaExiste(produto.nome))) {
      return res.status(400).json([{ msg: 'Já existe um produto com o nome informado' }]);
    }
    await updateProduto(id, produto);
    res.status(204).json();
  } catch (error) {
    res.status(500).json(error);
  }
}
async function remove(req: Request, res: Response) {
  res.send('oi');
}

export default { index, create, read, update, remove };
