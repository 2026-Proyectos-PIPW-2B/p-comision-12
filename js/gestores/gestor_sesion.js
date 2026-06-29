const cuentas_template = [
  {
    id: crypto.randomUUID(),
    username: "admin",
    password: "admin",
    email: "",
    tel: "",
    sesion: false,
    rol: "admin"
  },{
    id: crypto.randomUUID(),
    username: "ale",
    password: "ale",
    email: "",
    tel: "",
    sesion: false,
    rol: "usuario final"
  },
];


export function guardar_sesion(id) {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    cuentas.forEach(cuenta => {

        if (cuenta.id === id) {
            cuenta.sesion = true;
        } else {
            cuenta.sesion = false;
        }
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function iniciar_sesion(username) {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    for (let i = 0; i < cuentas.length; i++) {

    if (cuentas[i].username === username) {
        cuentas[i].sesion = true;
    } else {
        cuentas[i].sesion = false;
    }

}

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function cerrar_sesion() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    cuentas.forEach(cuenta => {
        cuenta.sesion = false;
    });

    localStorage.setItem("cuentas", JSON.stringify(cuentas));
}

export function consultar_sesion() {
    let cuentas = JSON.parse(localStorage.getItem("cuentas")) || cuentas_template;

    for (const cuenta of cuentas) {
        if (cuenta.sesion === true) {
         return true;
            }
        }
    return false;
}


export function conseguir_rol_usuario() {

    const cuentas = JSON.parse(localStorage.getItem(clave_cuentas)) || [];

    for (let cuenta of cuentas) {
        if (cuenta.sesion === true) {
            return cuenta.rol;
        }
    }

    return null;
}