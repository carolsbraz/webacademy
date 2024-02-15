import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IProdutoCarrinho } from '../../../../services/carrinho.service';

export default function CartItem({
  prodCarrinho,
}: {
  prodCarrinho: IProdutoCarrinho;
}) {
  return (
    <Card style={{ padding: '0px' }}>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-row align-items-center'>
            <img
              src='https://coyote.ca/wp/wp-content/uploads/2013/09/generic_brands_web_700x650.jpg'
              className='img-fluid rounded-3'
              alt='Shopping item'
              style={{ width: '65px' }}
            />
          </div>
          <div className='ms-3'>
            <h5>{prodCarrinho.nome}</h5>
          </div>
          <div className='d-flex flex-row align-items-center'>
            <div style={{ width: '40px' }}>
              <h5 className='fw-normal mb-0'>{prodCarrinho.quantidade}x</h5>
            </div>
            <div style={{ width: '80px' }}>
              <h5 className='mb-0'>
                R$ {prodCarrinho.preco * prodCarrinho.quantidade}
              </h5>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
