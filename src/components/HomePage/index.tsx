import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import ProductItem from "../ProductItem";
import { ApplicationState } from "../../store";
import { Inventory } from "../../store/inventory/types";
import { fetchRequest } from "../../store/inventory/action";

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const ProductListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: typeof fetchRequest;
}

type AllProps = PropsFromState & propsFromDispatch;

const HomePage: React.FC<AllProps> = ({
  loading,
  errors,
  data,
  fetchRequest
}) => {
  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <Container>
      {/* <Navbar /> */}
      <ProductListItems>
        {data.map(item => {
          return <ProductItem item={item} />;
        })}
      </ProductListItems>
    </Container>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data
});

const mapDispatchToProps = {
  fetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
