import { useEffect, useRef, useState } from "react";
import CustomTable, { TableColumn } from "../Tabela";
import ShowAddProduto from "../ShowAddProduto";
import axios from "axios";

export interface IProduto {
  id: number;
  title: string;
  price: number;
  category: number;
}

export default function ListaProdutos() {
  const productToUpdate = useRef<IProduto>();

  const [isModalShowOpen, SetIsModalShowOpenOpen] = useState(false);

  const [products, SetProducts] = useState<IProduto[]>([]);

  useEffect(() => {
    async function fetchData() { 
      const res = await axios.get<IProduto[]>(
        "https://fakestoreapi.com/products"
      );

      SetProducts(res.data);
    }

    fetchData();
  }, []);

  const columnsProducts: TableColumn<IProduto>[] = [
    { head: "ID", acessor: "id" },
    { head: "Nome", acessor: "title" },
    { head: "Preço", acessor: "price" },
    { head: "Categoria", acessor: "category" },
    {
      head: "Editar",
      isActionButton: true,
      onActionClick: (obj) => {
        productToUpdate.current = obj;
        SetIsModalShowOpenOpen(true);
      },
    },
  ];

  function AttProduto(produtoAtt: IProduto) {
    SetProducts(
      products.map((prod) => {
        return prod.id === produtoAtt.id ? produtoAtt : prod;
      })
    );
  }

  return (
    <div>
      <h1>Produtos</h1>

      <CustomTable data={products} columns={columnsProducts} />

      <ShowAddProduto
        isShow={isModalShowOpen}
        onClose={() => {
          SetIsModalShowOpenOpen(false);
        }}
        productUpdate={productToUpdate.current}
        onShowProduct={(produto) => {
          AttProduto(produto);
        }}
      />
    </div>
  );
}