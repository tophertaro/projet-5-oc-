import {NavLink} from 'react-router-dom'

function Header({logo, links}) {
  return(
    <header className='header'>
      <div>
        <img src={logo} alt='logo Kasa' />
      </div>
      <nav className='navlink'>
        <ul>
          {links.map((link, index) => (
            <li key={index}><NavLink to={link.href}>{link.label}</NavLink></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;