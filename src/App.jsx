import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BaseColaboradores } from './assets/js/BaseColaboradores.js'
import Alert from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado';

function App() {
  return (
      <>
 
    <Listado colaboradores={BaseColaboradores} />
    
    </>
      
      
  );
}

export default App;