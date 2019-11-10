import React, { useState, useEffect } from 'react';
import { connect } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

const Home = props => {
  const [products, setProducts] = useState([]);

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

  const handleAddProduct = product => {
    const { dispatch } = props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  return (
    <ProductList>
      {products.map((product, key) => (
        <li key={String(key)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>

            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default connect()(Home);
