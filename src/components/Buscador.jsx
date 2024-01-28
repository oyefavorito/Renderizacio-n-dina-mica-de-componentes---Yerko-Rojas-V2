// componente que me ayudará a buscar los colabores por todos los campos del formulario
// debería usar el método filter para retornar el nuevo arreglo de colabores y debo usarlo sobre el arreglo original y no en el estado anterior

function Buscador({ data, dataFilter }) {
  //   const [busqueda, setBusqueda] = useState('');

  //const handleInputChange = (event) => {
  // Actualiza el estado con el valor del campo de búsqueda
  //  setBusqueda(event.target.value);
  // };
  const inputHandle = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscarPalabra) ||
        colaborador.correo.toLowerCase().includes(buscarPalabra) ||
        colaborador.edad.includes(buscarPalabra) ||
        colaborador.cargo.toLowerCase().includes(buscarPalabra) ||
        colaborador.telefono.includes(buscarPalabra)
    );

    dataFilter(resultado);
  };

  return (
    <div className="buscador col-12 col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        className="form-control mb-3"
        onChange={inputHandle}
      />
    </div>
  );
}

export default Buscador;
