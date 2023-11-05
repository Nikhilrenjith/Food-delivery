import React from "react";
import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/fake-data/products";
import Product from "../products/Products";
const Menu = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Dishes Menu</h2>
          </Col>
          {popularMenuFood.map((item) => (
            <Col lg="3" key={item.id}>
              <Product item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
