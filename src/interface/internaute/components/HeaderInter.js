import React from 'react'
import '../../../Styles/internaute/Nav.css'
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
                <a href="/">Acceuil</a>
                <a href="/#a-propos" >A propos</a>
                <a href="/#actualite" >Actualité</a>
                <a href="/#mission" >Mission</a>
                <a href="/#services" >Services</a>
                <a href="/#partenaires" >Partenaires</a>
                <a href="/#faq" >FAQ</a>
                <a href="/#equipe" >Equipe</a>
                <a href="/#contact" >Contact</a>
                <button className="loginBtn"><a href="/login" >Connexion</a></button>
            </div>
      </div>
    </div>
  )
}
export default HeaderInter;
