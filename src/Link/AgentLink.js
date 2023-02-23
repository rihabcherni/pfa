import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InterfaceAgent from '../utilisateur/agent-maintenance/InterfaceAgent'
import CompteurPanne from '../utilisateur/agent-maintenance/pages/CompteurPanne'
import DashboardAgent from '../utilisateur/agent-maintenance/pages/DashboardAgent'
import NotificationAgent from '../utilisateur/agent-maintenance/pages/NotificationAgent'
import InterfaceInternaute from '../utilisateur/internaute/InterfaceInternaute'
import Page404 from '../Global/pages/Error/Page404'
import ModifierPassword from '../Global/pages/Auth/ModifierPassword'
import Profile from '../Global/pages/Auth/Profile'
function AgentLink() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}/>
      <Route path='/login' element={<Navigate to="/agent-maintenance"/>}/>
      <Route path='/inscription' element={<Navigate to="/agent-maintenance"/>}/>
      <Route path='/agent-maintenance' element={<InterfaceAgent/>}>	
        <Route index element={<DashboardAgent/>}/>
        <Route path="compteurs-panne" element={ <CompteurPanne/>}/>
        <Route path="notification" element={ <NotificationAgent/>}/>
        <Route path='/modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}

export default AgentLink
