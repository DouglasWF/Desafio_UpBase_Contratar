import {AiOutlineArrowLeft ,AiFillHome, AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import { BsClipboardCheck } from "react-icons/bs" 
import { Link } from 'react-router-dom'
import styles from "./App.css"
import React from "react"
import { Route, Routes, Router, Container } from "react-router-dom"

import Pagamentos from "./pagamentos"
import Login from "./login"


function App() {
  return (
    <div className="App">
      <div className="cabecalho">
        <button className="button"><AiOutlineArrowLeft/></button>
        <h1 className="titulo"> Contratar </h1>
      </div>
      
      <p className="texto1">Selecione o dia e horário para o plantão.</p>    
      <input className="entradaDeDadosNome" type="text" name="text" placeholder="Nome do paciente" maxLength={300}></input>
      
      <p className="texto2">Dia: <input className="entradaDeDados" type="date" name="date" id="date"></input></p>      
      
      
      <p className="texto2">Horário: <input className="entradaDeDados" type="time" name="time" id="time" placeholder="Horário" min="09:00" max="18:00"></input></p>
      
      
      {/* <br></br>
      <button className="buttonContinuar" type="submit" href="">Continuar</button> 
      <br></br>
      <button className="buttonVoltar">Voltar</button> */}
      
      <Router>
        
          <Routes>
            <Route path="/pagamentos" exact='true' element={<Pagamentos/>}>Continuar</Route>
          </Routes>
               
      </Router>
      
      

      <table className="tabela">
        <tr>
          <td className="coluna"><AiFillHome/></td>
          <td className="coluna"><BsClipboardCheck/></td>
          <td className="coluna"><AiOutlineHeart/></td>
          <td className="coluna"><AiOutlineUser/></td>
        </tr>
        <tr>
          <td className="coluna">Home</td>
          <td className="coluna">Plantões</td>
          <td className="coluna">Favoritos</td>
          <td className="coluna">Minha conta</td>
        </tr>
      </table> 
    </div>
  );
}

export default App;
