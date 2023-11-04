import React from "react";
import { Container, Row, Col } from "reactstrap";
import { popularMenuFood } from "../../assets/fake-data/products";

const Menu = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Food Menu</h2>
          </Col>
          {popularMenuFood.map((item) => (
            <Col lg="3" key={item.id}>
              <div className="single-product">
                <div className="product-img">
                  <img src={item.imgUrl} alt=" Loading" className="w-100" />
                </div>
                <div className="product-content">
                  <div className="rating text-center">
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <h6>{item.title}</h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="price">
                      Price : $ <span>{item.price}</span>
                    </span>
                    <span>
                      <i class="ri-shopping-cart-line"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
