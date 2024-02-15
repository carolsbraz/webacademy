import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { IProduto } from "../../services/produto.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css"; // Importe seu arquivo CSS aqui

interface GridViewProps {
  data: IProduto[];
  onProductClicked: (produto: IProduto) => void;
}

export default function ProductListGrid(props: GridViewProps) {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {props.data.map((produto) => {
        const avaliable = produto.estoque > 0;
        const className = `custom-card ${avaliable ? "" : "disabled"}`;
        return (
          <div key={produto.id}>
            <Card className={className} style={{ padding: 0, width: 250 }}>
              <Card.Img
                variant="top"
                src="https://coyote.ca/wp/wp-content/uploads/2013/09/generic_brands_web_700x650.jpg"
                alt="Produto"
              />
              <Card.Body style={{ padding: 5 }}>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>R$ {produto.preco}</Card.Text>

                <Button
                  aria-label={
                    avaliable ? "Adicionar ao carrinho" : "Produto indisponível"
                  }
                  variant="primary"
                  className="w-100"
                  disabled={!avaliable}
                  onClick={() => avaliable && props.onProductClicked(produto)}
                >
                  <div>
                    {avaliable ? (
                      <div>
                        Carrinho
                        <FontAwesomeIcon
                          icon={faCartArrowDown}
                          style={{
                            paddingLeft: 5,
                          }}
                        />
                      </div>
                    ) : (
                      "Indisponível"
                    )}
                  </div>
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Container>
  );
}
