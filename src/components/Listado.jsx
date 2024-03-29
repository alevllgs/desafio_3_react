import React from 'react';
import Table from 'react-bootstrap/Table';

function Listado({ colaboradores, eliminarColaborador }) {
  const handleEliminarColaborador = (id) => {
    eliminarColaborador(id);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
          <tr key={colaborador.id}>
            <td>{index + 1}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>
              <button className="eliminar" onClick={() => handleEliminarColaborador(colaborador.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;
