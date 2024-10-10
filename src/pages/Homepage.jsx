import React from "react";


import logements from "../../datas/logements.json";

import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";

import bannerImg from '../assets/banner.svg'



function HomePage() {
  return(
    <>
      <Banner bannerImg={bannerImg} bannerText='Chez vous, partout et ailleurs' />
      <Cards />
    </>
  )
}

export default HomePage;