import React, { Fragment } from "react";
import AllMenu from "../components/AllMenu/AllMenu";
import Header from "../components/header/Header";
import AppSlider from "../components/slider/AppSlider";
import Menu from "../components/menu/Menu";
import Choose from "../components/choose/Choose";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <AppSlider />
      <Menu />
      <Choose />
      <AllMenu />
    </Fragment>
  );
};

export default Home;
