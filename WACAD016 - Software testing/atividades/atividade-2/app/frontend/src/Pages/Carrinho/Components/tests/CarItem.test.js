import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "../CartItem/index";

describe("CarItem", () => {
  it("should render product info correctly", () => {
    const product = {
      id: 1,
      nome: "teste",
      preco: 40,
      estoque: 10,
      quantidade: 1,
    };

    render(<CartItem prodCarrinho={product} />);

    const img = screen.getByAltText("Shopping item");
    const productName = screen.getByText(product.nome);
    const productQty = screen.getByText(`${product.quantidade}x`);
    const totalCalculated = screen.getByText(
      `R$ ${product.preco * product.quantidade}`
    );

    expect(img).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productQty).toBeInTheDocument();
    expect(totalCalculated).toBeInTheDocument();
  });
});
