import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ApplicationState } from "../../store";
import { Inventory } from "../../store/inventory/types";
import { Cart } from "../../store/cart/types";

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  /* position: fixed; */
  background: #e7e8eb;
  margin: auto;
`;

const NavHeader = styled.div`
  width: 20%;
  float: left;
  padding: 10px;
`;

const NavCart = styled.div`
  width: 20%;
  float: right;
  padding: 10px;
  cursor: pointer;
`;

const CartSpan = styled.span`
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
`;

interface propsFromState {
  data: Cart;
  loading: boolean;
  errors?: string;
}

type AllProps = propsFromState;

const Navbar: React.FC<AllProps> = ({ data, loading, errors, children }) => {
  return (
    <div>
      <NavContainer>
        <NavHeader>
          <Link to="/">ECart</Link>
        </NavHeader>
        <NavCart>
          <Link to="/cart">
            Cart <CartSpan>{data.items.length}</CartSpan>
          </Link>
        </NavCart>
      </NavContainer>
      {children}
    </div>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  data: cart.data,
  loading: cart.loading,
  errors: cart.errors
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(Navbar);
