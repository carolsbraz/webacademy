import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCcMastercard,
  faCcVisa,
  faCcDiscover,
} from '@fortawesome/free-brands-svg-icons';
import {
  FinalizarCompra,
  IProdutoCarrinho,
} from '../../../../services/carrinho.service';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Checkout({
  onClickPay,
  produtosCarrinho,
}: {
  produtosCarrinho: IProdutoCarrinho[];
  onClickPay: () => void;
}) {
  const [totalPrice, SetTotalPrice] = useState(0);

  async function RealizarCompra() {
    try {
      if (produtosCarrinho.length <= 0) throw Error('Carrinho vazio!');
      await FinalizarCompra();
      toast.info('Compra Realizada com Sucesso', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      toast.error((error as Error).message);
    }

    onClickPay();
  }
  useEffect(() => {
    let valorTotal: number = 0;

    if (produtosCarrinho !== undefined) {
      produtosCarrinho.forEach((prod) => {
        valorTotal += prod.preco * prod.quantidade;
      });
    }

    SetTotalPrice(valorTotal);
  }, [produtosCarrinho]);

  return (
    <Col lg={5}>
      <ToastContainer />
      <Card bg='primary' text='white' className='rounded-3'>
        <Card.Body>
          <p className='small mb-2'>Cartões Aceitos</p>
          <div
            style={{
              width: 200,
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'row',
              gap: 10,
              padding: '10px',
            }}
          >
            <FontAwesomeIcon size='2x' icon={faCcVisa} />
            <FontAwesomeIcon size='2x' icon={faCcMastercard} />
            <FontAwesomeIcon size='2x' icon={faCcDiscover} />
          </div>

          <hr className='my-4' />

          <div className='d-flex justify-content-between mb-4'>
            <p className='mb-2'>R$ {totalPrice}</p>
          </div>

          <Button variant='info' size='lg' onClick={() => RealizarCompra()}>
            <div className='d-flex justify-content-between'>
              <span>Pagar</span>
            </div>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
