import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";
import Footer from "../components/Footer.jsx";

import logo from '../assets/logo.svg'
import logoFooter from '../assets/logo-footer.svg'
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
      <Cards />
      <Footer logo={logoFooter}/>
      
    </>
  )
}

export default HomePage;