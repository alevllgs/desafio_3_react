import React from 'react';

function Buscador({ colaboradores, setColaboradores }) {
  const handleChange = (e) => {
    const { value } = e.target;

    // Filtrar colaboradores por cualquier campo
    const resultados = colaboradores.filter(colaborador =>
      Object.values(colaborador).some(field =>
        field.toString().toLowerCase().includes(value.toLowerCase())
      )
    );

    // Actualizar el estado de los colaboradores en el componente padre
    setColaboradores(resultados);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar colaborador..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Buscador;
