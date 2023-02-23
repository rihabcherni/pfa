import React from 'react'
import '../style/Nav.css'
import { Link } from 'react-router-dom'
function HeaderInter() {
  return (
    <div>
      <div className="navbar">
         <div className="nav-header">
            <div className="nav-logo">
            <Link to="/"><img src="logo.png" width="100px" alt="logo"/>EESG</Link>
            </div>
          </div>
            <input type="checkbox" id="nav-check"/>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className="nav-links">
                <Link to="/">Acceuil</Link>
                <Link to="/a-propos" >A propos</Link>
                <Link to="/actualite" >Actualité</Link>
                <Link to="/mission" >Mission</Link>
                <Link to="/services" >Services</Link>
                <Link to="/partenaires" >Partenaires</Link>
                <Link to="/faq" >FAQ</Link>
                <Link to="/contact" >Contact</Link>
                <button className="loginBtn"><Link to="/login" >Connexion</Link></button>
            </div>
      </div>
    </div>
  )
}

export default HeaderInter;
