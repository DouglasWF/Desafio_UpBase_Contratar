import React from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

import Pagar from "./pages/Pagar"
import Home from "./pages/Home"
import Contratar from "./pages/Contratar"



function Rotas() {
   
    return( 
        <Router>
            <Routes>
                <Route path="/" exact='true' element={<Contratar/>}/>
                <Route path="/Home" exact="true" element={<Home/>}/>
                <Route path="/Pagar" exact="true" element={<Pagar/>}/> 
            </Routes>
        </Router>
    )
  }

export default Rotas;
