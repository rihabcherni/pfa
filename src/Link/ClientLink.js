import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import InterfaceInternaute from '../utilisateur/internaute/InterfaceInternaute'
import InterfaceClient from '../utilisateur/client/InterfaceClient'
import DashboardClient from '../utilisateur/client/pages/DashboardClient'
import Facture from '../utilisateur/client/pages/Facture'
import NotificationClient from '../utilisateur/client/pages/NotificationClient'
import ReclamationClient from '../utilisateur/client/pages/ReclamationClient'
import Page404 from '../Global/pages/Error/Page404'
import ModifierPassword from '../Global/pages/Auth/ModifierPassword'
import Profile from '../Global/pages/Auth/Profile'
function ClientLink() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}/>
      <Route path='/login' element={<Navigate to="/client"/>}/>
      <Route path='/inscription' element={<Navigate to="/client"/>}/>
      <Route path='/client' element={<InterfaceClient/>}>	
        <Route index element={<DashboardClient/>}/>
        <Route path="facture" element={ <Facture/>}/>
        <Route path="notification" element={ <NotificationClient/>}/>
        <Route path="reclamation" element={ <ReclamationClient/>}/>
        <Route path='/modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}
export default ClientLink
