import React, { Fragment } from "react";
import Header from "../components/header/Header";
import AppSlider from "../components/slider/AppSlider";
import Menu from "../components/menu/Menu";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <AppSlider />
      <Menu />
    </Fragment>
  );
};

export default Home;
