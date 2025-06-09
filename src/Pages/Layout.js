import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbars from '../Components/Navbars';
import Footer from '../Components/Footer';

const Layout = ({children}) => {
    const location = useLocation();
  const hideNavbarRoutes = ["/", "/signup"];
    const hideFooterRoutes = ["/", "/signup"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  return (
    <div>
   {!shouldHideNavbar && <Navbars></Navbars>}
      <main>{children}</main>
    </div>
    
  )
}


export default Layout
