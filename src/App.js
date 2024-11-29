import React, { useState, useEffect } from "react";
import Tabla from "./tabla";
import Formulario from "./Formulario";
import Spinner from "./spinner";

const mockData = [
  {
    id: 1,
    nombre: "Auriculares Inalámbricos",
    precio: 120,
    categoria: "Electrónica",
  },
  { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
  {
    id: 3,
    nombre: "Cafetera Espresso",
    precio: 250,
    categoria: "Electrodomésticos",
  },
  {
    id: 4,
    nombre: "Juego de Mesa - Monopoly",
    precio: 50,
    categoria: "Juguetes",
  },
  {
    id: 5,
    nombre: "Libro de Programación en JavaScript",
    precio: 35,
    categoria: "Libros",
  },
];

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductos(mockData);
      setCargando(false);
    }, 1000);
  }, []);

  const agregarProducto = (producto) => {
    setProductos([...productos, { ...producto, id: parseInt(producto.id) }]);
  };

  return (
    <div>
      <Spinner cargando={cargando} />
      {!cargando && <Tabla productos={productos} />}
      <Formulario agregarProducto={agregarProducto} />
    </div>
  );
}

export default App;
