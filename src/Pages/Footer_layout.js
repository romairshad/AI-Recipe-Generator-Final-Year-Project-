import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "../Components/Footer";

const Footer_layout = ({ children }) => {
  const location = useLocation();
  const hideFooterRoutes = ["/", "/signup"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <div>
      {!shouldHideFooter && <Footer></Footer>}
      <main>{children}</main>
    </div>
  );
};

export default Footer_layout;
