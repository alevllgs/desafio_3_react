import React, { useState } from 'react';

function Buscador({ onSearch }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onSearch(value);
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
