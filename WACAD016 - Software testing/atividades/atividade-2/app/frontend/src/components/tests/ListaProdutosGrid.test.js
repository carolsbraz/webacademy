import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductListGrid from "../ListaProdutosGrid/index";

describe("ProductListGrid", () => {
  const produtosMock = [
    {
      id: 1,
      nome: "Produto 1",
      preco: 40,
      estoque: 1,
    },
    {
      id: 2,
      nome: "Produto 2",
      preco: 30,
      estoque: 0,
    },
  ];

  const productClicked = jest.fn();

  it("should list all products", () => {
    const { getByText, getByLabelText } = render(
      <ProductListGrid data={produtosMock} onProductClicked={productClicked} />
    );

    expect(getByText("Produto 1")).toBeInTheDocument();
    expect(getByText("R$ 40")).toBeInTheDocument();
    expect(getByLabelText("Adicionar ao carrinho")).toBeInTheDocument();

    expect(getByText("Produto 2")).toBeInTheDocument();
    expect(getByText("R$ 30")).toBeInTheDocument();
    expect(getByLabelText("Adicionar ao carrinho")).toBeInTheDocument();
  });

  it("should disable button for product that don`t have stock", () => {
    const { getByLabelText } = render(
      <ProductListGrid data={produtosMock} onProductClicked={productClicked} />
    );

    expect(getByLabelText("Produto indisponível")).toBeDisabled();
  });

  it("should not call onProductClicked() for product that don`t have stock", async () => {
    const { getByLabelText } = render(
      <ProductListGrid data={produtosMock} onProductClicked={productClicked} />
    );

    await act(async () => {
      userEvent.click(getByLabelText("Produto indisponível"));
      await waitFor(() => {
        expect(productClicked).toHaveBeenCalledTimes(0);
      });
    });
  });

  it("should add product to cart when button is clicked", async () => {
    const { getByLabelText } = render(
      <ProductListGrid data={produtosMock} onProductClicked={productClicked} />
    );

    await act(async () => {
      userEvent.click(getByLabelText("Adicionar ao carrinho"));
      await waitFor(() => {
        expect(productClicked).toHaveBeenCalledWith(produtosMock[0]);
      });
    });
  });
});
