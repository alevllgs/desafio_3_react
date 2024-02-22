import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BaseColaboradores } from "./assets/js/BaseColaboradores.js";
import Alert from './components/Alert'
//import Buscador from './components/Buscador'
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  return (
    <>
      <div className="completo">
        <div className="listado">
          <Listado colaboradores={BaseColaboradores} />
        </div>

        <div className="formulario">
          <h3 >Agregar colaborador</h3>
          <Formulario />
          /*<Alert />*/ //me da error el alert
        </div>
      </div>
    </>
  );
}

export default App;
