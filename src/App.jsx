import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BaseColaboradores } from './assets/js/BaseColaboradores.js';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alerta from './components/Alert';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null); 

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, { ...nuevoColaborador, id: colaboradores.length + 1 }]);
    setAlerta('Colaborador agregado exitosamente'); 
    setTimeout(() => setAlerta(null), 3000); 
  };

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const buscarColaborador = (terminoBusqueda) => {
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
        <div><h1>Lista de colaboradores</h1></div>
        <div><Buscador onSearch={buscarColaborador} /></div>
        <div><Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} /></div>
        
      </div>

      <div className="formulario">

        <div><h3>Agregar colaborador</h3></div>
        <div><Formulario onSubmit={agregarColaborador} /></div>
        <div>{alerta && <Alerta mensaje={alerta} />}</div>
        
      </div>
      
    </div>
  );
}

export default App;
