import React from "react";

const Tabla = ({ productos }) => {
  return (
    <table border="1" style={{ margin: "0 auto", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
