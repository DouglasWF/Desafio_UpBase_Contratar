import {AiOutlineArrowLeft ,AiFillHome, AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import { BsClipboardCheck } from "react-icons/bs" 
import { Link } from "react-router-dom"
import React from "react"

import styles from "../App.css"
import Pagar from "./Pagar"
import Home from "./Home"

function Contratar() {
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
      
      <button className="buttonContinuar">Continuar</button> 
      <br></br>
      <button className="buttonVoltar">Voltar</button>
       
      <table className="tabela">
        <tbody>
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
        </tbody>
      </table> 
    </div>
  );
}

export default Contratar;