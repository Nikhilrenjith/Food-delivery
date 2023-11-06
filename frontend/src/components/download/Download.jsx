import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./download.css";

import appImg from "../../assets/images/app.png";

const Download = () => {
  return (
    <section>
      <Container className="app-container">
        <Row>
          <Col lg="6" md="6">
            <div className="app-img">
              <img src={appImg} alt="" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="app-content">
              <h5>Download Our App</h5>
              <h2 className="mb-4">
                Never Fell Hungry! Download our Mobile App Order Delicious Food
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                libero dolore molestias est aut eos minus neque harum
                dignissimos consectetur.
              </p>
              <div className="app-btns d-flex align-items-center gap-5 mt-4">
                <button className="btn-apple d-flex align-items-center gap-3">
                  <i class="ri-apple-line"></i> <a href="#">Apple Store</a>
                </button>
                <button className="btn-google d-flex align-items-center gap-3">
                  <i class="ri-google-play-fill"></i>
                  <a href="#"> Play Store</a>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Download;
