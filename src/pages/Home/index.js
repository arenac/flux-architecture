import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

const Home = ({ addToCartRequest }) => {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = id => {
    addToCartRequest(id);
  };

  return (
    <ProductList>
      {products.map((product, key) => (
        <li key={String(key)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
