
function Footer({logo}) {
  return(
    <div className="footer">
      <img src={logo} alt='logo Kasa' className="footer__logo"/>
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer;