import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";

import { sliderData } from "../../assets/fake-data/slider";
import "./slider.css";

const AppSlider = () => {
  return (
    <section>
      <Container>
        <Slider>
          {sliderData.map((item) => (
            <div>
              <div className="slider-wrapper d-flex align-items-center justify-content-between pt-5">
                <div className="slider-content w-50 ps-2">
                  <h2 className="mb-3">{item.title}</h2>
                  <p>{item.desc}</p>
                  <button className="btn">Explore Food</button>
                </div>
                <div className="slider-img w-50">
                  <img src={item.imgUrl} alt="Loading" className="w-100" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default AppSlider;