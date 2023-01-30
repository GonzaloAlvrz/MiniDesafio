import Axios from "axios";
import { React, useState, useEffect } from "react";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    Axios.get(
      "https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes"
    )
      .then((res) => {
        setPersonajes(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(personajes);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log(e.target.value)
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = personajes.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setPersonajes(resultadosBusqueda)
  };

  return (
    <div>
      <div>
        <input
        className="ml-8 relative bottom-4 text-black"
          value={busqueda}
          placeholder="Búsqueda por Nombre"
          onChange={handleChange}

        />
      </div>
      <div className="flex flex-wrap justify-center ">
        {personajes.map((p) => (
          <div className="mx-4 " key={p.id}>
            <div className="h-40 w-32">
              <img src={p.img} alt=""  className="h-40"/>
            </div>
            <h4>{p.nombre}</h4>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default App;
