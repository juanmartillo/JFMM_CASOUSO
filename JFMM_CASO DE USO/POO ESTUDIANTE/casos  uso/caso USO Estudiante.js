import { Estudiante } from "./Estudiante";
import { RepositorioEstudiantes } from "./repositorioEstudiantes.js";

export class CasoUsoEstudiantes {
  constructor() {
    this.repositorio = new RepositorioEstudiantes();
  }

  agregarEstudiante(nombre, apellido, genero, cedula, telefono, direccion) {
    const estudiante = new Estudiante(nombre, apellido, genero, cedula, telefono, direccion);
    this.repositorio.agregar(estudiante);
  }

  obtenerEstudiante(cedula) {
    return this.repositorio.obtener(cedula);
  }

  actualizarEstudiante(cedula, nombre, apellido, genero, telefono, direccion) {
    const estudiante = this.repositorio.obtener(cedula);
    if (estudiante) {
      estudiante.nombre = nombre;
      estudiante.apellido = apellido;
      estudiante.genero = genero;
      estudiante.telefono = telefono;
      estudiante.direccion = direccion;
      return true;
    }
    return false;
  }

  eliminarEstudiante(cedula) {
    return this.repositorio.eliminar(cedula);
  }

  listarEstudiantes() {
    return this.repositorio.listar();
  }
}
