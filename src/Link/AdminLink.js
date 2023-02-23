import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import Page404 from '../Global/pages/Error/Page404'
import InterfaceInternaute from '../utilisateur/internaute/InterfaceInternaute'
import DashboardAdmin from '../utilisateur/admin/pages/DashboardAdmin'
import ListeClients from '../utilisateur/admin/pages/ListeClients'
import ListeCompteurs from '../utilisateur/admin/pages/ListeCompteurs'
import ListeConsommationJournaliere from '../utilisateur/admin/pages/ListeConsommationJournaliere'
import ListeConsommationOptimale from '../utilisateur/admin/pages/ListeConsommationOptimale'
import ListeReclamation from '../utilisateur/admin/pages/ListeReclamation'
import NotificationAdmin from '../utilisateur/admin/pages/NotificationAdmin'
import InterfaceAdmin from '../utilisateur/admin/InterfaceAdmin'
import ModifierPassword from '../Global/pages/Auth/ModifierPassword'
import Profile from '../Global/pages/Auth/Profile'
function AdminLink() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}/>
      <Route path='/login' element={<Navigate to="/administrateur"/>}/>
      <Route path='/inscription' element={<Navigate to="/administrateur"/>}/>
      <Route path='/administrateur' element={<InterfaceAdmin/>}>	
        <Route index element={<DashboardAdmin/>}/>
        <Route path="liste-clients" element={ <ListeClients/>}/>
        <Route path="liste-compteurs" element={ <ListeCompteurs/>}/>
        <Route path="liste-consommation-journaliere" element={ <ListeConsommationJournaliere/>}/>
        <Route path="liste-consommation-optimale" element={ <ListeConsommationOptimale/>}/>
        <Route path="reclamation" element={ <ListeReclamation/>}/>
        <Route path="notification" element={ <NotificationAdmin/>}/>
        <Route path='/modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Route>
   
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}

export default AdminLink
