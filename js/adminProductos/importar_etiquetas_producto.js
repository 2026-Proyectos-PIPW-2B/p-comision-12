import { listadoCategorias } from "../gestores/gestorCategorias.js";

import { listadoEtiquetas } from "../gestores/gestorEtiquetas.js";

let categorias = [];
let etiquetas = [];

window.addEventListener("load", function () {
  categorias = listadoCategorias();
  etiquetas = listadoEtiquetas();
});

export function cargar_categorias(select_categorias) {
  categorias.forEach((categoria) => {
    const option = document.createElement("option");

    option.value = categoria.id;
    option.textContent = categoria.nombre;

    select_categorias.appendChild(option);
  });
}

export function cargar_etiquetas(contenedor_de_etiquetas) {
  contenedor_de_etiquetas.innerHTML = "";

  etiquetas.forEach((etiqueta) => {
    const col = document.createElement("div");
    col.classList.add("col", "my-1");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btn-check");
    checkbox.id = "eti-" + etiqueta.id;
    checkbox.setAttribute("data-identificador", etiqueta.id);
    checkbox.autocomplete = "off";

    const label = document.createElement("label");
    label.classList.add("btn", "btn-outline-warning", "rounded-pill");
    label.setAttribute("for", checkbox.id);
    label.textContent = etiqueta.nombre;

    col.appendChild(checkbox);
    col.appendChild(label);

    contenedor_de_etiquetas.appendChild(col);
  });
}

export function cargar_etiquetas_seleccionadas(
  contenedor_de_etiquetas,
  idEtiquetasSeleccionadas,
) {
  contenedor_de_etiquetas.innerHTML = "";

  etiquetas.forEach((etiqueta) => {
    const col = document.createElement("div");
    col.classList.add("col", "my-1");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btn-check");
    checkbox.id = "etiSeleccionada-" + etiqueta.id;
    checkbox.setAttribute("data-identificador", etiqueta.id);
    checkbox.autocomplete = "off";

    idEtiquetasSeleccionadas.forEach((idEtiqueta) => {
      if (idEtiqueta == etiqueta.id) {
        checkbox.checked = true;
      }
    });

    const label = document.createElement("label");
    label.classList.add("btn", "btn-outline-warning", "rounded-pill");
    label.setAttribute("for", checkbox.id);
    label.textContent = etiqueta.nombre;

    col.appendChild(checkbox);
    col.appendChild(label);

    contenedor_de_etiquetas.appendChild(col);
  });
}
