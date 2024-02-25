import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Alerta({ mensaje }) {
  return (
    <Alert variant="success">
      {mensaje}
    </Alert>
  );
}

export default Alerta;
