import { useEffect, useState, useRef, ChangeEvent } from "react";
import { Button, Form, InputGroup, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CustomTable, { TableColumn } from "../../components/Tabela";
import ConfirmationModal from "../../components/Modals/Confirmacao";
import AttAddProduto from "./components/AttAddProduto";
import ProductListGrid from "../../components/ListaProdutosGrid";

import {
  CreateProduct,
  DeleteProduct,
  EditProduct,
  FetchProducts,
  IProduto,
} from "../../services/produto.service";

import "../../App.css";
import { AddCarrinho } from "../../services/carrinho.service";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function ListaProdutos() {
  const [products, setProducts] = useState<IProduto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduto[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isAttAddModalOpen, setIsAttAddModalOpen] = useState(false);

  const productToDelete = useRef<IProduto | null>(null);
  const productToUpdate = useRef<IProduto | null>(null);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    fetchProducts();
  }, []);

  //ATUALIZA LISTA DE PRODUTOS FILTRADOS DE ACORDO COM O INPUT DO USER
  useEffect(() => {
    const filtered =
      searchTerm === ""
        ? products
        : products.filter((prod) =>
            prod.nome.toUpperCase().includes(searchTerm.toUpperCase())
          );

    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  //PEGA PRODUTOS DA API
  const fetchProducts = async () => {
    const fetchedProducts = await FetchProducts();
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  };

  //BUSCA PRODUTOS
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddProduct = async (newProduct: IProduto) => {
    await CreateProduct(newProduct);
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = async (updatedProduct: IProduto) => {
    await EditProduct(updatedProduct);
    fetchProducts();
  };

  const handleDeleteProduct = async () => {
    if (productToDelete.current) {
      await DeleteProduct(productToDelete.current.id);
      fetchProducts();
    }
    setIsConfirmationModalOpen(false);
  };

  const handleAddToCart = async (product: IProduto) => {
    await AddCarrinho(product.id, 1);
  };

  const columns: TableColumn<IProduto>[] = [
    { head: "Nome", acessor: "nome" },
    { head: "Estoque", acessor: "estoque" },
    { head: "R$ Preço", acessor: "preco" },
    {
      head: "Remover",
      isActionButton: true,
      onActionClick: (obj) => {
        productToDelete.current = obj;
        setIsConfirmationModalOpen(true);
      },
    },
    {
      head: "Editar",
      isActionButton: true,
      onActionClick: (obj) => {
        productToUpdate.current = obj;
        setIsAttAddModalOpen(true);
      },
    },
  ];

  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      <InputGroup style={{ width: 250, marginBottom: "1rem" }}>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>

      {user?.isAdmin ? (
        <div style={{ width: "80%" }}>
          <div style={{ padding: 10 }}>
            <Button
              variant="success"
              onClick={() => {
                productToUpdate.current = null;
                setIsAttAddModalOpen(true);
              }}
            >
              Inserir Produto
            </Button>
          </div>

          <CustomTable data={filteredProducts} columns={columns} />
        </div>
      ) : (
        <ProductListGrid
          data={filteredProducts}
          onProductClicked={handleAddToCart}
        />
      )}

      <AttAddProduto
        isShow={isAttAddModalOpen}
        onClose={() => setIsAttAddModalOpen(false)}
        productUpdate={productToUpdate.current!}
        onAddProduct={handleAddProduct}
        onAttProduct={handleEditProduct}
      />

      <ConfirmationModal
        isShow={isConfirmationModalOpen}
        message="Deseja excluir esse produto?"
        title="Alerta"
        onCancel={() => setIsConfirmationModalOpen(false)}
        onConfirm={handleDeleteProduct}
      />
    </Col>
  );
}
