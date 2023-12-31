import React, { Fragment } from "react";

import AllMenu from "../components/AllMenu/AllMenu";
import Header from "../components/header/Header";
import AppSlider from "../components/slider/AppSlider";
import Menu from "../components/menu/Menu";
import Choose from "../components/choose/Choose";
import Review from "../components/review/Review";
import Download from "../components/download/Download";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <AppSlider />
      <Menu />
      <Choose />
      <AllMenu />
      <Review />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default Home;
