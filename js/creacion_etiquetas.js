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

// Constantes Form Edicion Categoria
const formEdicionCategoria = document.getElementById("formEdicionCategoria");
const inputNameEdicionCategoria = document.getElementById(
  "inputNameEdicionCategoria",
);
const inputDescripcionEdicionCategoria = document.getElementById(
  "inputDescripcionEdicionCategoria",
);
const buttonEdicionCategoria = document.getElementById(
  "buttonEdicionCategoria",
);

// Constantes Form Edicion Etiqueta
const formEdicionEtiqueta = document.getElementById("formEdicionEtiqueta");
const inputNameEdicionEtiqueta = document.getElementById(
  "inputNameEdicionEtiqueta",
);
const inputDescripcionEdicionEtiqueta = document.getElementById(
  "inputDescripcionEdicionEtiqueta",
);
const buttonEdicionEtiqueta = document.getElementById("buttonEdicionEtiqueta");

// localStorage
let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
let etiquetas = JSON.parse(localStorage.getItem("etiquetas")) || [];

window.addEventListener("load", function () {
  inicializarCrearCategoria();
});

function inicializarCrearCategoria() {
  formCrearCategoria.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarValidacion();

    if (validarDatos(inputNameCrearCategoria, inputDescripcionCrearCategoria)) {
      formCrearCategoria.reset();
      limpiarValidacion();
    }
  });
}

function limpiarValidacion() {
  const inputs = document.querySelectorAll(
    ".form-control, .form-select, .form-check-input",
  );
  for (const input of inputs) {
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");
  }
}

function validarDatos(inputNombre, inputDescripcion) {
  let validacion = true;

  if (!validarNombre(inputNombre)) {
    validacion = false;
  }
  if (!validarDescripcion(inputDescripcion)) {
    validacion = false;
  }

  return validacion;
}

function mostrarMensaje(input, validacion) {
  if (validacion) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}

function validarNombre(inputNombre) {
  let validacion = true;
  let mensaje = "";

  if (validator.isEmpty(inputNombre.value.trim())) {
    validacion = false;
  } else if (!validator.isLength(inputNombre.value.trim(), { min: 3 })) {
    validacion = false;
  }

  mostrarMensaje(inputNombre, validacion);
  return validacion;
}

function validarDescripcion(inputDescripcion) {
  let validacion = true;
  let mensaje = "";

  if (validator.isEmpty(inputDescripcion.value.trim())) {
    validacion = false;
  } else if (
    !validator.isLength(inputDescripcion.value.trim(), { min: 1, max: 200 })
  ) {
    validacion = false;
  }

  mostrarMensaje(inputDescripcion, validacion);
  return validacion;
}
