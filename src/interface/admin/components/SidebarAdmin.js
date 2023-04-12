import React from "react";
import { BsTools,BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaFileInvoiceDollar, FaMoneyCheck, FaMoneyBillWave, FaBolt, FaUser,FaUsers, FaHardHat} from "react-icons/fa";
import { MdReportProblem } from "react-icons/md"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactsIcon from '@mui/icons-material/Contacts';

export const SidebarAdmin = [
    {id: 1, name: "Tableau de bord",  path:"/administrateur", icon: <ImStatsDots/>, size:"meduim"},
    {id: 2, name: "Personnel", icon: <FaUsers/>,
      items: [
        {id:1, name: "Administrateur",path:"/administrateur/liste-administrateurs", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
        {id:2,name: "Agent maintenance", path:"/administrateur/liste-agent-maintenance", icon: <BsTools/>, size:"meduim"},
      ], size:"meduim"},
    {id: 3,name: "Gestion comptes clients", path:"/administrateur/liste-clients", icon: <FaUser/>, size:"meduim"},
    {id: 4,name: "Gestion compteurs", path:"/administrateur/liste-compteurs", icon: <FaBolt/>, size:"meduim"},
    {id: 5,name: "Consommations journalières", path:"/administrateur/liste-consommation-journaliere", icon: <AiOutlineAreaChart/>, size:"meduim"},   
    {id: 6,name: "Gestion tarifs", path:"/administrateur/tarifs", icon: <FaMoneyBillWave/>, size:"meduim"},
    {id: 7,name: "Gestion factures", path:"/administrateur/factures", icon: <FaFileInvoiceDollar/>, size:"meduim"},
    {id: 8,name: "Gestion paiements", path:"/administrateur/paiements", icon: <FaMoneyCheck/>, size:"meduim"},      
    {id: 9,name: "Pannes compteurs", path:"/administrateur/pannes-compteurs", icon: <MdReportProblem/>, size:"meduim"},
    {id: 10,name: "Reclamation clients", path:"/administrateur/reclamation-clients", icon: <BsFillEnvelopeExclamationFill/>, size:"meduim"},
    {id:12, name: "Support",path:"/administrateur/support", icon: <ContactsIcon/>, size:"meduim"},
  ];