import AdminLink from './Link/AdminLink'
import AgentLink from './Link/AgentLink'
import ClientLink from './Link/ClientLink'
import InternauteLink from './Link/InternauteLink'
import './Styles/App.css'
const AppRoutes=()=> {
	// if("auth_token" in localStorage){
	if(true){
		if(localStorage.getItem("Role")=== "administrateur"){
		    return <AdminLink/>	  
		}
		if(localStorage.getItem("Role")=== "client"){
		return <ClientLink/>	  
		}
		if(localStorage.getItem("Role")=== "agent-maintenance"){
		return <AgentLink/>	  
		}
	}
	if (!("auth_token" in localStorage)) {
	   return <InternauteLink/>
	}	
	else return null
}
function App() {
  return (  <AppRoutes/> );
}

export default App;
