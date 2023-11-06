import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy  Policy",
    url: "#",
  },
  {
    display: "Return & Refund",
    url: "#",
  },
  {
    display: "Payment Method",
    url: "#",
  },
];
const footerLinks = [
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <div className="logo">
                <h2 className="d-flex align-items-center gap-1 mb-4">
                  <span>
                    <i class="ri-restaurant-2-line"></i>
                  </span>
                  {""} Pizza Guy
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio assumenda harum earum eos sint.
                </p>
              </div>
            </Col>

            <Col lg="2" md="4" sm="6">
              <h5 className="footer-link-title">Info Links</h5>

              <ListGroup>
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link-item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="2" md="4" sm="6">
              <h5 className="footer-link-title">Quick Links</h5>

              <ListGroup>
                {footerLinks.map((item, index) => (
                  <ListGroupItem key={index} className="link-item">
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="4" md="4" sm="6">
              <h5 className="footer-link-title ">Contact</h5>
              <ListGroup>
                <ListGroupItem className="link-item d-flex align-items-center gap-3">
                  <i class="ri-map-pin-line "></i>Kochi,Kerala
                </ListGroupItem>
                <ListGroupItem className="link-item d-flex align-items-center gap-3">
                  <i class="ri-mail-line"></i>example@mail.com
                </ListGroupItem>
                <ListGroupItem className="link-item d-flex align-items-center gap-3">
                  <i class="ri-phone-line"></i>+91 87389 47223
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col lg="12">
              <p>
                Copyright 2023, developed by Nikhil Renjith. All Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
