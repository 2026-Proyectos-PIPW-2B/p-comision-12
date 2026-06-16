// Constantes Form Creacion Categoria
const formCrearCategoria = document.getElementById("formCrearCategoria");
const inputNameCrearCategoria = document.getElementById(
  "inputNameCrearCategoria",
);
const inputDescripcionCrearCategoria = document.getElementById(
  "inputDescripcionCrearCategoria",
);
const buttonCrearCategoria = document.getElementById("buttonCrearCategoria");

// Constantes Form Creacion Etiqueta
const formCrearEtiqueta = document.getElementById("formCrearEtiqueta");
const inputNameCrearEtiqueta = document.getElementById(
  "inputNameCrearEtiqueta",
);
const inputDescripcionCrearEtiqueta = document.getElementById(
  "inputDescripcionCrearEtiqueta",
);
const buttonCrearEtiqueta = document.getElementById("buttonCrearEtiqueta");

// localStorage
let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
let etiquetas = JSON.parse(localStorage.getItem("etiquetas")) || [];

window.addEventListener("load", function () {
  inicializar();
});

function inicializar() {}
