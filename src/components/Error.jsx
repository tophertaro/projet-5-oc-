import React from "react"
import { Link } from 'react-router-dom'

function ErrorMessage() {
  return(
    <div className="error-container">
      <span className="error-code">404</span>
      <p className="error-message">Oups! La page que vous demandez n'existe pas</p>
      <Link to='/' className="redirection-link">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default ErrorMessage