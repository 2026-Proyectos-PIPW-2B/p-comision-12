const claveCategorias = "categorias";

export function agregarCategoria(nombre, descripcion) {
  let categorias = JSON.parse(localStorage.getItem(claveCategorias)) || [];
  let categoria = crearCategoria(nombre, descripcion);
  categorias.push(categoria);
  localStorage.setItem(claveCategorias, JSON.stringify(categorias));
}

function crearCategoria(nombre, descripcion) {
  let categoria = {
    id: Date.now(),
    nombre: nombre,
    descripcion: descripcion,
  };
  return categoria;
}
