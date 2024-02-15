import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkout from '../Checkout/index';

describe('Checkout', () => {
  const onClickPayMock = jest.fn();
  const produtosCarrinhoMock = [
    { id: 1, nome: 'Produto 1', preco: 10, estoque: 10, quantidade: 2 },
    { id: 2, nome: 'Produto 2', preco: 20, estoque: 20, quantidade: 1 },
  ];

  it('should render checkout info correctly', () => {
    const { getByText } = render(
      <Checkout
        onClickPay={onClickPayMock}
        produtosCarrinho={produtosCarrinhoMock}
      />
    );

    expect(getByText('R$ 40')).toBeInTheDocument();
    expect(getByText('Pagar')).toBeInTheDocument();
  });

  it('should call onClickPay() when "Pagar" button is clicked', async () => {
    const { getByText } = render(
      <Checkout
        onClickPay={onClickPayMock}
        produtosCarrinho={produtosCarrinhoMock}
      />
    );

    const pagarButton = getByText('Pagar');

    await act(async () => {
      userEvent.click(pagarButton);
      await waitFor(() => {
        expect(onClickPayMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
