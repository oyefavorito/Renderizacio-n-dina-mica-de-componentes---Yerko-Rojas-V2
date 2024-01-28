// aca necesito un mensaje que alerte si se agregó exitosamente o si los campos están vacíos
// utilizar props para éxito o la falta de compos y opcionalmente puedo cambiar el color iguals

function Alert({ message, color }) {
  return (
    <>
      {message && (
        <div className={`alert alert-${color}`} role="alert">
          {message}
        </div>
      )}
    </>
  );
}

export default Alert;
