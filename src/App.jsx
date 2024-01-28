// Este es el super componente que llevará todo los otros
// Acá debo importar mi base de colaboradores.js
// Acá debo tener un state que almacene el mensaje de error o de éxito y pasar por props al formulario y a alert

import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState(BaseColaboradores); //La data que proviene de la basecolaboradores
  const [dataFilter, setDataFilter] = useState(data); //La data que estará filtrada
  const [alert, setAlert] = useState({
    message: "",
    error: false,
    color: "",
  });

  const [alertMessage, setAlertMessage] = useState(""); // Nuevo estado


  const addAlert = (newAlert) => {
    setAlert(newAlert);
    setAlertMessage(newAlert.message); // Almacena el mensaje en el estado

    setTimeout(() => {
      setAlert({
        message: "",
        error: "",
        color: "",
      });
      setAlertMessage(""); // Limpia el mensaje del estado
    }, 5000);
  };


// ACÁ EN APP DEBEN IR MIS ALERTAS IGUAL QUE EN EL DESAFÍO PASADO


  return (
    <>
      <h1 className="my-4">
        <FontAwesomeIcon icon={faUserGroup} />
          Lista de Colaboradores
      </h1>

      <Buscador data={data} dataFilter={setDataFilter} />
      
      <div className="row row-cols2 justify-content-end">
        <Listado
          data={data}
          setData={setData}
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
        />
        <Formulario
          className="formulario"
          addAlert={addAlert}
          data={data}
          setData={setData}
          dataFilter={dataFilter}
          setDataFilter={setDataFilter}
        />
<Alert setAlert={setAlert}/>
  { alert.message && <Alert {...alert} /> }
      </div>
    </>
  );
}

export default App;
