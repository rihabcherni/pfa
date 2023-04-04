import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute'
import InterfaceClient from '../interface/client/InterfaceClient'
import DashboardClient from '../interface/client/pages/DashboardClient'
import Facture from '../interface/client/pages/Facture'
import NotificationClient from '../interface/client/pages/NotificationClient'
import ReclamationClient from '../interface/client/pages/ReclamationClient'
import Page404 from '../interface/Error/Page404'
import ModifierPassword from '../interface/Auth/ModifierPassword'
import Profile from '../interface/Auth/Profile'
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
        <Route path='modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}
export default ClientLink
