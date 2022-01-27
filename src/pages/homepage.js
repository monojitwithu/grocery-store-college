import React from "react";

import ProductListing from "../features/product-listing";

import { Container, Header, Icon } from "semantic-ui-react";

export default function Homepage(props) {
  return (
    <Container>
      <br />
      <Header textAlign="center">
        Start Shopping - Free Same Day Delivery for all orders!{" "}
        <Icon name="shipping fast" />
      </Header>
      <br />
      <ProductListing />
    </Container>
  );
}
