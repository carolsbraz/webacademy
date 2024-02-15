import { useEffect, useState } from "react";
import { IProduto } from "../ListaProdutos";
import { Modal } from "react-bootstrap";

interface ShowAddProdutoProps {
  isShow: boolean;
  onClose: () => void;
  productUpdate: IProduto | undefined;
  onAddProduct?: (prod: IProduto) => void;
  onShowProduct?: (prod: IProduto) => void;
}

export default function ShowAddProduto(props: ShowAddProdutoProps) {
  const [titleProduct, SetTitleProduct] = useState<string>("");
  const [priceProduct, SetPriceProduct] = useState<number>(0);
  const [categoryProduct, SetCategoryProduct] = useState<number>(0);

  useEffect(() => {
    if (props.productUpdate != undefined) {
      SetTitleProduct(props.productUpdate.title);
      SetPriceProduct(props.productUpdate.price);
      SetCategoryProduct(props.productUpdate.category);
    }
    
  }, []);


  return (
    <Modal show={props.isShow} onHide={props.onClose} centered>
      <Modal.Header closeButton={true}>
        <Modal.Title>
          {props.productUpdate?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Preço: {props.productUpdate?.price}</p>
        <p>Categoria: {props.productUpdate?.category}</p>
      </Modal.Body>
    </Modal>
  );
}
