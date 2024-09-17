import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";

import logo from '../assets/logo.svg'
import bannerImg from '../assets/banner.svg'

function HomePage() {

  const navLinks = [
    {href: '#', label: 'Accueil'},
    {href: '#', label: 'A Propos'}
  ]

  return(
    <>
      <Header logo={logo} links={navLinks}/>
      <Banner bannerImg={bannerImg} bannerText='Chez vous, partout et ailleurs' />
    </>
  )
}

export default HomePage;