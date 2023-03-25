const botonBuscar = document.querySelector('#buscar');
const botonLimpiar = document.querySelector('#limpiar');
const campoBusqueda = document.querySelector('#busqueda');
const resultado = document.querySelector('#resultado');

botonBuscar.addEventListener('click', () => {
  const cedula = campoBusqueda.value.trim();

  // Validamos que se haya ingresado una cédula
  if (cedula === '') {
    resultado.innerHTML = '<p>Ingrese una cédula válida</p>';
    return;
  }

  // Realizamos la búsqueda mediante una petición AJAX a un servidor o una base de datos
  // En este ejemplo simularemos la búsqueda con un setTimeout de 1 segundo
  resultado.innerHTML = '<p>Buscando estudiante...</p>';

  setTimeout(() => {
    const estudiante = buscarEstudiante(cedula);

    if (estudiante) {
      // Si se encontró el estudiante, mostramos su información en el resultado
      resultado.innerHTML = `
        <p>Estudiante encontrado:</p>
        <ul>
          <li>Nombre: ${estudiante.nombre}</li>
          <li>Apellido: ${estudiante.apellido}</li>
          <li>Género: ${estudiante.genero}</li>
          <li>Género: ${estudiante.cedula}</li>
          <li>Teléfono: ${estudiante.telefono}</li>
          <li>Dirección: ${estudiante.direccion}</li>
        </ul>
      `;
    } else {
      // Si no se encontró el estudiante, mostramos un mensaje de error
      resultado.innerHTML = '<p>No se encontró ningún estudiante con esa cédula</p>';
    }
  }, 1000);
});

botonLimpiar