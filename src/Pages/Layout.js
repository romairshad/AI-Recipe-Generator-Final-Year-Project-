import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbars from '../Components/Navbars';

const Layout = ({children}) => {
    const location = useLocation();
  const hideNavbarRoutes = ["/", "/signup"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <div>
   {!shouldHideNavbar && <Navbars></Navbars>}
      <main>{children}</main>
    </div>
    
  )
}


export default Layout
