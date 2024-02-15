import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { IProduto } from "../../../../services/produto.service";

interface AttAddProdutoProps {
  isShow: boolean;
  onClose: () => void;
  productUpdate: IProduto | undefined;
  onAddProduct?: (prod: IProduto) => void;
  onAttProduct?: (prod: IProduto) => void;
}

export default function AttAddProduto({
  isShow,
  onClose,
  productUpdate,
  onAddProduct,
  onAttProduct,
}: AttAddProdutoProps) {
  const [product, setProduct] = useState<IProduto>({
    id: 0,
    nome: "",
    estoque: 0,
    preco: 0,
  });

  useEffect(() => {
    if (productUpdate) {
      setProduct(productUpdate);
    } else {
      setProduct({ id: 0, nome: "", estoque: 0, preco: 0 });
    }
  }, [productUpdate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = () => {
    if (productUpdate) {
      onAttProduct?.(product);
    } else {
      const newProduct = { ...product, id: Math.random() };
      onAddProduct?.(newProduct);
    }
    onClose();
  };

  return (
    <Modal show={isShow} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {productUpdate ? "Atualizar Produto" : "Novo Produto"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nome">Nome do Produto</Form.Label>
            <Form.Control
              name="nome"
              type="text"
              required
              value={product.nome}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="preco">Preço</Form.Label>
            <Form.Control
              name="preco"
              type="number"
              required
              value={product.preco}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="estoque">Estoque</Form.Label>
            <Form.Control
              name="estoque"
              type="number"
              required
              value={product.estoque}
              onChange={handleInputChange}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" type="button" onClick={handleSubmit}>
              {productUpdate ? "Atualizar Produto" : "Cadastrar Produto"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
