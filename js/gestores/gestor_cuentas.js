let cuentas;
const clave_cuentas = "cuentas";

const cuentas_template = [
  {
    id: crypto.randomUUID(),
    usuario: "admin",
    contrasena: "admin",
    email: "",
    tel: "",
    sesion: false,
    rol: "admin"
  },
];

window.addEventListener("load", function () {
  cuentas = JSON.parse(localStorage.getItem(clave_cuentas)) || cuentas_template;
});

export function agregar_cuenta(usuario, contrasena, email,tel) {
  let cuenta = crear_cuenta(usuario, contrasena, email,tel);

  cuentas.push(cuenta);

  localStorage.setItem(clave_cuentas, JSON.stringify(cuentas));
}

export function editar_cuenta(id, usuario, contrasena, email,tel) {
    let index = -1;

    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].id === id) {
            index = i;
            break;
        }
    }

  if (index !== -1) {
        cuentas[index].usuario = usuario;
        cuentas[index].contrasena = contrasena;
        cuentas[index].email = email;
        cuentas[index].tel = tel;

        localStorage.setItem(clave_cuentas, JSON.stringify(cuentas))
  }
}

export function eliminar_cuenta(id) {
  let nuevas_cuentas = [];

    for (let cuenta of cuentas) {
        if (cuenta.id !== id) {
            nuevas_cuentas.push(cuenta);
        }
    }
    cuentas = nuevas_cuentas;
    localStorage.setItem(clave_cuentas, JSON.stringify(cuentas));
}

export function listado_cuentas() {
  return cuentas;
}

export function conseguir_cuenta(id) {
    let encontrada = null;

    for (let cuenta of cuentas) {
        if (cuenta.id === id) {
            encontrada = cuenta;
            break;
        }
    }

    return encontrada
}

export function conseguir_cuenta_login(usuario, contrasena) {
  for (let cuenta of cuentas) {
        if (
            cuenta.usuario === usuario &&
            cuenta.contrasena === contrasena
        ) {
            return cuenta;
        }
    }

    return null;
}

function crear_cuenta(usuario, contrasena, email,tel) {
  function crear_objeto(){
        let cuenta = {
            id: crypto.randomUUID(),
            usuario: usuario,
            contrasena: contrasena,
            email: email,
            tel: tel,
            sesion: false,
            rol: "usuario final"
        }
        return cuenta
  };
  return crear_objeto();
}
