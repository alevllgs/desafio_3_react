import React from 'react';
import BootstrapAlert from 'react-bootstrap/Alert';

function Alerta() {
  return (
    <>
      {[
        'danger',
      ].map((variant) => (
        <BootstrapAlert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </BootstrapAlert>
      ))}
    </>
  );
}

export default Alerta;
