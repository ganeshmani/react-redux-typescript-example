import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { ApplicationState } from "../../store";
import { Cart } from "../../store/cart/types";
const CartContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
`;
const CartHeader = styled.h2``;
const CartHeaderDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const CartListsDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const CartListItemDiv = styled.div`
  display: flex;
`;

const CartListItemImage = styled.img``;

const CartListItemName = styled.p``;

const CartListItemPrice = styled.p``;

interface propsFromState {
  cartItems: Cart;
}

type AllProps = propsFromState;

const CartComponent: React.FC<AllProps> = ({ cartItems }) => {
  return (
    <CartContainer>
      <CartHeaderDiv>
        <CartHeader>Your Cart</CartHeader>
      </CartHeaderDiv>
      <CartListsDiv>
        {cartItems.items.map(item => {
          return (
            <CartListItemDiv>
              <CartListItemImage src={item.image} />
              <CartListItemName>{item.name}</CartListItemName>
              <CartListItemPrice>{item.price}</CartListItemPrice>
            </CartListItemDiv>
          );
        })}
      </CartListsDiv>
    </CartContainer>
  );
};

const mapStateToProps = ({ cart }: ApplicationState) => ({
  cartItems: cart.data
});

const mapDispatchProps = () => {};

export default connect(mapStateToProps, mapDispatchProps)(CartComponent);
