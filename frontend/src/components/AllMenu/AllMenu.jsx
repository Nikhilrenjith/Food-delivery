import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "../products/Products";
import "./allmenu.css";
import {
  fastFoodProducts,
  riceMenuProducts,
  dessertProducts,
  pizzaProducts,
  coffeeProducts,
} from "../../assets/fake-data/products";

const AllMenu = () => {
  const [filter, setFilter] = useState("Rice-menu");
  const [products, setProducts] = useState(fastFoodProducts);
  useEffect(() => {
    if (filter === "Rice-menu") {
      setProducts(riceMenuProducts);
    }
    if (filter === "Fast-food") {
      setProducts(fastFoodProducts);
    }
    if (filter === "Dessert") {
      setProducts(dessertProducts);
    }
    if (filter === "Pizza") {
      setProducts(pizzaProducts);
    }
    if (filter === "Coffee") {
      setProducts(coffeeProducts);
    }
  });
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h3 className="menu-title">Our Menus are</h3>
          </Col>
          <Col lg="12" className="text-center mb-5">
            <button
              className={`filter-btn ${
                filter === "Fast-food" ? "active-btn" : ""
              }`}
              onClick={() => setFilter("Fast-food")}
            >
              Fast Food
            </button>
            <button
              className={`filter-btn ${
                filter === "Rice-menu" ? "active-btn" : ""
              }`}
              onClick={() => setFilter("Rice-menu")}
            >
              Rice Menu
            </button>
            <button
              className={`filter-btn ${filter === "Pizza" ? "active-btn" : ""}`}
              onClick={() => setFilter("Pizza")}
            >
              Pizza
            </button>
            <button
              className={`filter-btn ${
                filter === "Dessert" ? "active-btn" : ""
              }`}
              onClick={() => setFilter("Dessert")}
            >
              Desserts
            </button>
            <button
              className={`filter-btn ${
                filter === "Coffee" ? "active-btn" : ""
              }`}
              onClick={() => setFilter("Coffee")}
            >
              Coffee
            </button>
          </Col>
          {products.map((item) => (
            <Col lg="3" key={item.id} className="mb-4">
              <Product item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AllMenu;
