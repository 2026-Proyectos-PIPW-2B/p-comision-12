import { conseguirCarrito } from "../js/gestores/gestorCarrito.js";

const carritoBadge = document.getElementById("carritoBadge");

// Inicialmente carga completamente todo el listado de productos.
window.addEventListener("load", function () {
  actualizarCarritoBadge();
});

export function actualizarCarritoBadge() {
  const itemsCantidad = conseguirCarrito().length;
  carritoBadge.innerHTML = itemsCantidad;

  if (itemsCantidad < 1) {
    carritoBadge.hidden = true;
  } else {
    carritoBadge.hidden = false;
  }
}
