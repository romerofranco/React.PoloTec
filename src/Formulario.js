import React, { useState } from "react";

const Formulario = ({ agregarProducto }) => {
  const [formData, setFormData] = useState({
    id: "",
    nombre: "",
    precio: "",
    categoria: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProducto(formData);
    setFormData({ id: "", nombre: "", precio: "", categoria: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formData.precio}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
