import React, { useState } from 'react';

function Formulario({ onSubmit, setError }) {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '', 
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formulario).some(value => value === '')) {
      setError('Todos los campos son obligatorios');
      return;
    }
    onSubmit(formulario);
    setError('');
    setFormulario({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <div className='formulario'>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            name="correo"
            placeholder="Correo electrónico"
            value={formulario.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="number"
            className="form-control"
            name="edad"
            placeholder="Edad"
            value={formulario.edad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="cargo"
            placeholder="Cargo"
            value={formulario.cargo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="telefono"
            placeholder="Teléfono"
            value={formulario.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group-append">
          <button type="submit" className='btn btn-success form-control'>Agregar colaborador</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
