import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../interface/Auth/Login'
import Inscription from '../interface/Auth/Inscription'
import ModifierPasswordOublier from '../interface/Auth/ModifierPasswordOublier'
import OublierPassword from '../interface/Auth/OublierPassword'
import Page404 from '../interface/Error/Page404'
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute'
import MainInter from '../interface/internaute/components/MainInter';
function InternauteLink() {
 return(
        <>
            <Routes>
              <Route path='/' element={<InterfaceInternaute/>}>	
                    <Route index element={ <MainInter/>}/>
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
