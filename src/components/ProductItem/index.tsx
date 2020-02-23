import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Inventory } from "../../store/inventory/types";
import { addToCart } from "../../store/cart/action";

const ProductContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  flex: 0 0 25%;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ProductHeader = styled.h1``;

const ProductBrandText = styled.text``;

const AddToCart = styled.button`
  padding: 10px;
  background-color: blue;
  color: #ffffff;
`;

interface propsFromComponent {
  item: Inventory;
}

interface propsFromDispatch {
  addToCart: typeof addToCart;
}

type Props = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<Props> = ({ item, addToCart }) => {
  const AddItemToCart = (item: any) => {
    addToCart(item);
  };

  return (
    <ProductContainer>
      <ProductImage src={item.image} />
      <ProductHeader>{item.name}</ProductHeader>
      <ProductBrandText>{item.brand}</ProductBrandText>
      <AddToCart onClick={() => AddItemToCart(item)}>Add To Cart</AddToCart>
    </ProductContainer>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = {
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
