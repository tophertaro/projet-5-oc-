import logo from '../assets/logo.svg'



function Header() {
  return(
    <header className='header'>
      <div>
        <img src={logo} alt="logo Kasa" />
      </div>
      <nav className='navlink'>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">A Propos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;