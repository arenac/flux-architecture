import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({ cart, removeFromCart }) {
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
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.ammout} />
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
                  <MdDelete
                    size={20}
                    onClick={() => removeFromCart(product.id)}
                    color="#7159c1"
                  />
                </button>
              </td>
            </tr>
          ))}
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

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
