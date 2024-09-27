
function Footer({logo}) {
  return(
    <div className="footer">
      <div className="footer-content">
        <img src={logo} alt='logo Kasa' className="footer__logo"/>
      <p>&copy; {new Date().getFullYear()} Kasa. All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer;