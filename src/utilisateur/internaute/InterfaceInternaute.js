import React from 'react'
import { Outlet} from 'react-router-dom';
import HeaderInter from './components/HeaderInter';
import FooterInter from './components/FooterInter';

function InterfaceInternaute() {
  return (
    <>
      <HeaderInter/>
      <Outlet/>
      <FooterInter/>
    </>
  )
}

export default InterfaceInternaute
