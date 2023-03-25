const form = document.querySelector('form');
const busquedaInput = document.querySelector('#busqueda');
const tablaEstudiantes = document.querySelector('#tabla-estudiantes');

let estudiantes = [];

// Función para agregar un estudiante a la tabla
function agregarEstudiante(estudiante) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${estudiante.nombre}</td>
    <td>${estudiante.apellido}</td>
    <td>${estudiante.genero}</td>
    <td>${estudiante.cedula}</td>
    <td>${estudiante.telefono}</td>
    <td>${estudiante.direccion}</td>
    </tr>
    `;
  tablaEstudiantes.appendChild(row);
}


// Función para mostrar todos los estudiantes
function mostrarEstudiantes() {
  tablaEstudiantes.innerHTML = '';
  estudiantes.forEach(agregarEstudiante);
}


// Función para buscar un estudiante por cédula
function buscarEstudiante(cedula) {
  return estudiantes.find(estudiante => estudiante.cedula === cedula);
}

// Event listener para registrar un estudiante
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nombreInput = document.querySelector('#nombre');
  const apellidoInput = document.querySelector('#apellido');
  const generoInput = document.querySelector('#genero');
  const cedulaInput = document.querySelector('#cedula');
  const telefonoInput = document.querySelector('#telefono');
  const direccionInput = document.querySelector('#direccion');

  const estudiante = {
    nombre: nombreInput.value,
    apellido: apellidoInput.value,
    genero: generoInput.value,
    cedula: cedulaInput.value,
    telefono: telefonoInput.value,
    direccion: direccionInput.value,
  };

  estudiantes.push(estudiante);
  mostrarEstudiantes();

  nombreInput.value = '';
  apellidoInput.value = '';
  generoInput.value = '';
  cedulaInput.value = '';
  telefonoInput.value = '';
  direccionInput.value = '';
});

// Event listener para buscar un estudiante
busquedaInput.addEventListener('keyup', () => {
  const busqueda = busquedaInput.value.trim();
  if (busqueda === '') {
    mostrarEstudiantes();
  } else {
    const estudiante = buscarEstudiante(busqueda);
    if (estudiante) {
      tablaEstudiantes.innerHTML = '';
      agregarEstudiante(estudiante);
    } else {
      tablaEstudiantes.innerHTML = '<tr><td colspan="4">No se encontraron resultados</td></tr>';
    }
  }
});


