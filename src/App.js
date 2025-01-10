import { useState, UseState } from "react"; //hook de react que permite añadirle un estado a un componente
import './App.css';
import ComponenteMultiple from "./components/ComponenteMultiple";

function App() {

  const [dias, setDias] = useState(0);

  const [opcion, setOpcion] = useState("Hotel");
  //(e) es el objeto del evento que se desencadena, en un desplegable que vamos a hacer es rescatar el objeto con esta funcion
  const selector = (e) => {
    // para rescatar el valor del objeto del evento
    setOpcion(e.target.value);
  
  
  };

  return <div className="container">
    <select onChange={selector} className="desplegable">
      <option value="Hotel">Hotel</option>
      <option value="Coche">Coche</option>
    </select>

    <input type="text" onChange={e=>setDias(e.target.value)} placeholder="Introduce el nº de días" />
    
    {opcion === "Hotel" && <ComponenteMultiple opcion={1} dias={dias} />}
    
    {opcion === "Coche" && <ComponenteMultiple opcion={2} dias={dias} />}

  </div>

}

export default App;
