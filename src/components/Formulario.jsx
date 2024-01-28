// Acá debo tener el formulario con los campos necesarios para agregar colaboradores y un boton para agregar los campos y validar que los campos no estén vacios (expresión regular)
// Para agregar los detalles necesitaré 5 inputs y cinco estados y/o un estado de tipo objeto

import { useState } from "react";
import Alert from "./Alert";

function Formulario({ data, setData, dataFilter, setDataFilter, addAlert }) {
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const [alertMessage, setAlertMessage] = useState(""); 
  
  const handleInputs = (e) => {
    const inputsId = {
      inputNombre: "nombre",
      inputEmail: "correo",
      inputEdad: "edad",
      inputCargo: "cargo",
      inputTelefono: "telefono",
    };

    const prop = inputsId[e.target.id];
    if (prop) {
      setDatosColaborador({ ...datosColaborador, [prop]: e.target.value });
    }
  };

  const validarDatos = (e) => {
    e.preventDefault();
    const regrexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regrexTelef = /^[0-9]{9}$/;

    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo.trim() === "" ||
      datosColaborador.telefono === ""
    ) {
      setAlertMessage("Por favor, completa todos los campos");
      addAlert({
        error: true,
        message: "Por favor, completa todos los campos",
        color: "warning",
      });
    } else if (!regrexEmail.test(datosColaborador.correo)) {
      setAlertMessage("Correo electrónico inválido");
      addAlert({
        error: true,
        message: "Correo electrónico inválido",
        color: "danger",
      } );
    } else if (!regrexTelef.test(datosColaborador.telefono)) {
      setAlertMessage("Número telefónico inválido (debe tener 9 dígitos)");
      addAlert({
        error: true,
        message: "Número telefónico inválido (debe tener 9 dígitos)",
        color: "danger",
      });
    } else if (parseInt(datosColaborador.edad) <= 18) {
      setAlertMessage("La edad debe ser mayor a 0");
      addAlert({
        error: true,
        message: "La edad debe ser mayor a 0",
        color: "danger",
      });
      
    } else {
      // Agregar el nuevo colaborador a la lista
      const newColaborador = {
        id: data.length + 1, // Puedes generar el id como prefieras
        ...datosColaborador,
      };
      setData([...data, newColaborador]);

      // Actualizar la lista filtrada
      setDataFilter([...dataFilter, newColaborador]);

      // Limpiar los datos del formulario después de agregar el colaborador
      setDatosColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });

      setAlertMessage("Colaborador agregado exitosamente")
      // Mostrar mensaje de éxito
      addAlert({
        error: false,
        message: "Colaborador agregado exitosamente",
        color: "success",
      });
    }
  };

  return (
    <div className="formulario col-12 col-lg-4 text-center bg-ifo p-4 rounded">
      <h3>Agregar colaborador</h3>

      <form noValidate onSubmit={(e) => validarDatos(e)}>
        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.nombre}
            type="text"
            className="inputNombre"
            id="inputNombre"
            placeholder="Nombre del colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.correo}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email del colaborador"
            pattern=".*" // no sé qué es esto
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.edad}
            type="number"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.cargo}
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.telefono}
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Teléfono del colaborador"
          />
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-dark">
            Agregar colaborador
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
