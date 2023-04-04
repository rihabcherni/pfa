import React from 'react'
import { useNavigate } from 'react-router-dom'
function Page404() {
  const navigate = useNavigate();
  let linkPagePrincipale='';
  if(localStorage.getItem('Role')==='administrateur'){
    linkPagePrincipale='/admin'
  }else if(localStorage.getItem('Role')==='client'){
    linkPagePrincipale='/client'
  }else if(localStorage.getItem('Role')==='agent-maintenance'){
    linkPagePrincipale='/agent-maintenance'
  }
  return (
    <div>
      <h2>Oups!!!</h2>
      <p>Page 404</p>
      <p>Page non trouvée</p>
      <p>Désolé, la page que vous recherchez est introuvable</p>
      <div>
        <button onClick={() => navigate(linkPagePrincipale)}>Revenir à la page principale</button>
        <button  onClick={() => navigate(-1)} >Allons à la dernière page visitée</button>
      </div>
    </div>
  )
}

export default Page404
