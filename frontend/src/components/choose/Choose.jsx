import React from "react";
import { Container, Row, Col } from "reactstrap";
import pastaImg from "../../assets/images/pasta.png";
import "./choose.css";

const Choose = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <img src={pastaImg} alt="" className="w-100" />
          </Col>
          <Col lg="6">
            <div className="choose-content">
              <h4>Who we are</h4>
              <h2>Take a look at benefits we offer you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                sunt soluta consequatur corrupti ratione explicabo molestiae
                quis laudantium autem placeat architecto fugiat voluptatem ullam
                maxime dolorem nostrum, voluptatum voluptatibus provident.
              </p>
            </div>
            <div className="features mt-4">
              <div className="feature1  d-flex align-items-center gap-5 ">
                <div className="single-feature">
                  <span>
                    <i class="ri-truck-line"></i>
                  </span>
                  <h6>Free Home Delivery</h6>
                  <p>Lorem, ipsum dolor sit amet consectetur</p>
                </div>
                <div className="single-feature">
                  <span className="feature-icon-two">
                    <i class="ri-money-dollar-circle-fill"></i>
                  </span>
                  <h6>Return & Refund</h6>
                  <p>Lorem, ipsum dolor sit amet consectetur</p>
                </div>
              </div>

              <div className="feature1 mt-3 d-flex align-items-center gap-5 ">
                <div className="single-feature">
                  <span className="feature-icon-three">
                    <i class="ri-secure-payment-line"></i>
                  </span>
                  <h6>Secure Payment</h6>
                  <p>Lorem, ipsum dolor sit amet consectetur</p>
                </div>
                <div className="single-feature">
                  <span className="feature-icon-four">
                    <i class="ri-24-hours-line"></i>
                  </span>
                  <h6>24/7 Hours Support</h6>
                  <p>Lorem, ipsum dolor sit amet consectetur</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Choose;
