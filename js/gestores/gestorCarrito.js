import { conseguirProducto } from "../gestores/gestorProductos";

let carrito;
let claveCarrito = "carrito";

window.addEventListener("load", function () {
  //TO-DO: Cargar carrito de sesion
  carrito = JSON.parse(localStorage.getItem(claveCarrito)) || [];
  localStorage.setItem(claveCarrito, JSON.stringify(carrito));
});

export function agregarAlCarrito(idProducto, cantidad) {
  let itemCarrito = crearItemCarrito(idProducto, cantidad);
  carrito.push(itemCarrito);
  localStorage.setItem(claveCarrito, JSON.stringify(carrito));
}

export function editarCantidad(idItemCarrito, cantidad) {
  const index = productos.findIndex(
    (itemCarrito) => itemCarrito.id === idItemCarrito,
  );
  if (index !== -1) {
    carrito[index].cantidad = cantidad;
    carrito[index].subtotal = cantidad * producto.precio;
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
  }
}

export function eliminarDelCarrito(idItemCarrito) {
  itemCarrito = carrito.filter(
    (itemEncontrado) => itemEncontrado.id !== idItemCarrito,
  );
  localStorage.setItem(claveCarrito, JSON.stringify(carrito));
}

export function conseguirItemCarrito(idItemCarrito) {
  return carrito.find((item) => item.id === idItemCarrito) || null;
}

export function conseguirCarrito() {
  return carrito;
}

function crearItemCarrito(idProducto, cantidad) {
  let producto = conseguirProducto(idProducto);
  let itemCarrito = {
    id: crypto.randomUUID(),
    producto: producto,
    cantidad: cantidad,
    subtotal: cantidad * producto.precio,
  };

  return itemCarrito;
}
