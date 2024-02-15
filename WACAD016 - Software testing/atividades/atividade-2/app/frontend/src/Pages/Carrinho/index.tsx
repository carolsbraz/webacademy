import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "./Components/CartItem";
import { FetchProductsCarrinho } from "../../services/carrinho.service";
import Checkout from "./Components/Checkout";
import useFetch from "../../hooks/useFetch";

export default function Cart() {
  const products = useFetch(FetchProductsCarrinho);

  return (
    <Card
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Card.Body>
        <h4>Produtos</h4>
        <Col lg={7} style={{ height: 400, width: "80%", overflow: "auto" }}>
          {products.data !== undefined ? (
            <>
              {products.data!.map((produto) => {
                return <CartItem key={produto.id} prodCarrinho={produto} />;
              })}
              {products.data!.length === 0 ? "Carrinho Vazio" : null}
            </>
          ) : (
            "Carregando..."
          )}
        </Col>
      </Card.Body>
      <Checkout
        produtosCarrinho={products.data!}
        onClickPay={() => products.SetData([])}
      />
    </Card>
  );
}
