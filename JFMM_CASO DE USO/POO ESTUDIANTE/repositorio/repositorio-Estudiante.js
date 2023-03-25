export class RepositorioEstudiante {
  constructor() {
    // Inicializar la lista de estudiantes vacía
    this.estudiantes = [];
  }

  // Mostrar un nuevo estudiante al repositorio
  addEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
  }

  // Buscar un estudiante por número de cédula
  buscarEstudiantePorCedula(cedula) {
    return this.estudiantes.find((estudiante) => estudiante.cedula === cedula);
  }

  // Buscar un estudiante por número de teléfono
  buscarEstudiantePorTelefono(telefono) {
    return this.estudiantes.find((estudiante) => estudiante.telefono === telefono);
  }

  // Obtener todos los estudiantes en el repositorio
  obtenerEstudiantes() {
    return this.estudiantes;
  }

    }
  


