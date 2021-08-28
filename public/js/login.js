import { API } from './api'

const $nombre = document.getElementById("nombre");
const $apellidop = document.getElementById("apellidop");
const $apellidom = document.getElementById("apellidom");

const validateUser = async(event, intentos = 1) => {
    event.preventDefault();
    console.log($user.value);
    console.log($pass.value);

    //TODO: VALIDAR USUARIO Y CONTRASEÑA VS BD
    try {
        const params = {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: $nombre.value,
                apellidop: $pass.value,
            }),
        };
        const res = await fetch(API, params);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

$btnLogin.onclick((e) => validateUser(e));