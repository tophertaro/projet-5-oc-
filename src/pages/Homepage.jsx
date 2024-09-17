import Header from "../components/Header.jsx";
import logo from '../assets/logo.svg'
import Banner from "../components/Banner.jsx";

function HomePage() {

  const navLinks = [
    {href: '#', label: 'Accueil'},
    {href: '#', label: 'A Propos'}
  ]

  return(
    <>
      <Header logo={logo} links={navLinks}/>
    </>
  )
}

export default HomePage;