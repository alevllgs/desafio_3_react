import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './assets/js/BaseColaboradores.js';
import Alert from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  return (
      <div>
          {BaseColaboradores.map(colaborador => (
              <div key={colaborador.id}>
                  <p>Nombre: {colaborador.nombre}</p>
                  <p>Correo: {colaborador.correo}</p>
                  <p>Edad: {colaborador.edad}</p>
                  <p>Cargo: {colaborador.cargo}</p>
                  <p>Teléfono: {colaborador.telefono}</p>
              </div>
          ))}
      </div>
  );
}

export default App;