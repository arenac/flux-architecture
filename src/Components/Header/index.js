import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import { connect } from './node_modules/react-redux';
import { MdShoppingCart } from './node_modules/react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart" title="Your shopping cart">
        <div>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingCart size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
