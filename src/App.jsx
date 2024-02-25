import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BaseColaboradores } from './assets/js/BaseColaboradores.js';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const buscarColaborador = (terminoBusqueda) => {
    // Filtrar colaboradores por cualquier campo
    const resultados = BaseColaboradores.filter(colaborador =>
      Object.values(colaborador).some(field =>
        field.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    );

    setColaboradores(resultados);
  };

  return (
    <div className="completo">
      <div className="listado">
        <Buscador colaboradores={colaboradores} setColaboradores={setColaboradores} />
        <Listado colaboradores={colaboradores} />
      </div>
      <div className="formulario">
        <h3>Agregar colaborador</h3>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
