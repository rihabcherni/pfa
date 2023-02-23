import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../utilisateur/internaute/pages/Home'
import Actualite from "../utilisateur/internaute/pages/Actualite";
import FAQ from "../utilisateur/internaute/pages/FAQ";
import Contact from "../utilisateur/internaute/pages/Contact";
import About from "../utilisateur/internaute/pages/About";
import Equipe from "../utilisateur/internaute/pages/Equipe";
import Partenaires from "../utilisateur/internaute/pages/Partenaires";
import Mission from "../utilisateur/internaute/pages/Mission";
import Services from "../utilisateur/internaute/pages/Services";
import Login from '../Global/pages/Auth/Login'
import Inscription from '../Global/pages/Auth/Inscription'
import ModifierPasswordOublier from '../Global/pages/Auth/ModifierPasswordOublier'
import OublierPassword from '../Global/pages/Auth/OublierPassword'
import Page404 from '../Global/pages/Error/Page404'
import InterfaceInternaute from '../utilisateur/internaute/InterfaceInternaute'
function InternauteLink() {
 return (
          <>
            <Routes>
              <Route path='/' element={<InterfaceInternaute/>}>	
                    <Route index element={<Home/>}/>
                    <Route path="/a-propos" element={ <About/>}/>
                    <Route path="/actualite" element={<Actualite/>}/>
                    <Route path="/mission" element={<Mission/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/partenaires" element={<Partenaires/>}/>
                    <Route path="/equipe" element={<Equipe/>}/>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/inscription' element={<Inscription/>}></Route>
                    <Route path='/oublier-mot-de-passe' element={<OublierPassword/>}></Route>
                    <Route path='/modifier-mot-de-passe-oublier' element={<ModifierPasswordOublier/>}></Route>
              </Route>
              <Route path='*' element={<Page404/>}/>
            </Routes>
          </> 
      );
}
export default InternauteLink
