import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>Product</th>
          <th>Qnt</th>
          <th>Subtotal</th>
          <th />
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/xnvkdpbwtevczwlo1sbj/air-max-plus-older-shoe-7DdWK3.jpg"
                alt="Shoe"
              />
            </td>
            <td>
              <strong>Nice shoes</strong>
              <span>1300 Kr</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>2,600.00 Kr</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Conclude order</button>
        <Total>
          <span>TOTAL</span>
          <strong>2,600.00 Kr</strong>
        </Total>
      </footer>
    </Container>
  );
}
