import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Page401 from '../Global/pages/Error/Page401'

export function Link401Client() {
  return (
    <Routes>
      <Route path='/client' element={<Page401/>}>	
        <Route index element={<Page401/>}/>
        <Route path="facture" element={ <Page401/>}/>
        <Route path="notification" element={ <Page401/>}/>
        <Route path="reclamation" element={ <Page401/>}/>
        <Route path='modifier-mot-de-passe' element={<Page401/>}></Route>
        <Route path='profile' element={<Page401/>}></Route>
      </Route>
    </Routes>
  )
}
export function Link401Admin() {
    return (
      <Routes>
            <Route path='/administrateur' element={<Page401/>}>	
                <Route index element={<Page401/>}/>
                <Route path="liste-clients" element={ <Page401/>}/>
                <Route path="liste-compteurs" element={ <Page401/>}/>
                <Route path="liste-consommation-journaliere" element={ <Page401/>}/>
                <Route path="liste-consommation-optimale" element={ <Page401/>}/>
                <Route path="reclamation" element={ <Page401/>}/>
                <Route path="notification" element={ <Page401/>}/>
                <Route path='modifier-mot-de-passe' element={<Page401/>}></Route>
                <Route path='profile' element={<Page401/>}></Route>
            </Route>
      </Routes>
    )
  }
  export function Link401AgentMaintenance() {
    return (
        <Routes>
            <Route path='/agent-maintenance' element={<Page401/>}>	
                <Route index element={<Page401/>}/>
                <Route path="compteurs-panne" element={ <Page401/>}/>
                <Route path="notification" element={ <Page401/>}/>
                <Route path='modifier-mot-de-passe' element={<Page401/>}></Route>
                <Route path='profile' element={<Page401/>}></Route>
            </Route>
        </Routes>
    )
  }
     
