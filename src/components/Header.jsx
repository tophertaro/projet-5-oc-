


function Header({logo, links}) {
  return(
    <header className='header'>
      <div>
        <img src={logo} alt="logo Kasa" />
      </div>
      <nav className='navlink'>
        <ul>
          {links.map((link, index) => (
            <li key={index}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;