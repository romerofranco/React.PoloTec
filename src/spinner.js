import React from "react";

const Spinner = ({ cargando }) => {
  return cargando ? (
    <div style={{ textAlign: "center" }}>Cargando...</div>
  ) : null;
};

export default Spinner;
