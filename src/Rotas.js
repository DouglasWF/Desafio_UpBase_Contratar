import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pagamentos from "./pagamentos"
import logo from "./login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { pagamentos }  path="/pagamento" exact />
           <Route component = { logo }  path="/login" />
       </BrowserRouter>
   )
}

export default Routes;