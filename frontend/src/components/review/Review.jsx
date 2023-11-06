import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./review.css";
import Slider from "react-slick";
import testImg from "../../assets/images/review1.png";

const Review = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" sm="12" md="12" className="m-auto">
            <div className="slider-wrapper d-flex align-items-center gap-5">
              <div className="slider-content w-50">
                <h2 className="mb-4">Our Customer Saying</h2>
                <Slider {...settings}>
                  <div>
                    <div className="single-review">
                      <p className="review-content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Maiores itaque cupiditate aliquam earum labore qui
                        odit nemo similique ipsum! Doloribus inventore
                        laudantium architecto tempore eligendi autem fugit
                        consequuntur maiores ipsum!"
                      </p>
                      <h6>Nikhil</h6>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div>
                    <div className="single-review">
                      <p className="review-content">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Maiores itaque cupiditate aliquam earum labore qui
                        odit nemo similique ipsum! Doloribus inventore
                        laudantium architecto tempore eligendi autem fugit
                        consequuntur maiores ipsum!"
                      </p>
                      <h6>Renjith</h6>
                      <p> Tester</p>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="slider-img w-50">
                <img src={testImg} alt="" className="w-100" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Review;
