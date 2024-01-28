// acá debo poner el listado de colaboradores usando una tabla de bootstrap

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// para el delete necesito usar data, setdata, datafilter, setdatafilter y deben ir como prop en la funcion de listado
function Listado({ dataFilter, setData, setDataFilter }) {
  const deleteColaboradores = (id) => {
    // Filtrar la lista de colaboradores para eliminar el seleccionado
    const newData = dataFilter.filter((colaborador) => colaborador.id !== id);

    // Actualizar los estados
    setData(newData);
    setDataFilter(newData);
  };

  const colaboradores = dataFilter.map((colaborador) => (
    <tr className="align-middle" key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <i>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="fa-trash-can"
            onClick={() => deleteColaboradores(colaborador.id)}
          />
        </i>
      </td>
    </tr>
  ));

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2 text-center">
      <table variant="dark" className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{colaboradores}</tbody>
      </table>
    </div>
  );
}

export default Listado;
