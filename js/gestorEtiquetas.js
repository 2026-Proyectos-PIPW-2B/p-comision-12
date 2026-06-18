const claveEtiquetas = "etiquetas";

export function agregarEtiqueta(nombre, descripcion) {
  let etiquetas = JSON.parse(localStorage.getItem(claveEtiquetas)) || [];
  let etiqueta = crearEtiqueta(nombre, descripcion);
  etiquetas.push(etiqueta);
  localStorage.setItem(claveEtiquetas, JSON.stringify(etiquetas));
}

function crearEtiqueta(nombre, descripcion) {
  let etiqueta = {
    id: Date.now(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return etiqueta;
}
