import { API } from "./api";

const $nombre = document.getElementById("nombre");
const $apellidom = document.getElementById("ramirez");
const $apellidop = document.getElementById("ramirez");
const $consultorio = document.getElementById("consultorio");
const $medico = document.getElementById("medico");
const $fecha = document.getElementById("fecha");
const $hora = document.getElementById("hora");

const validateUser = async (event, intentos = 1) => {
  event.preventDefault();
  console.log($nombre.value);
  console.log($apellidom.value);

  //TODO: VALIDAR USUARIO Y CONTRASEÑA VS BD
  /** 
    try {
        const params = {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: $nombre.value,
                apellidom: $apellidom.value,
                apellidop: $apellidop.value,
                consultorio: $consultorio.value,
                medico: $medico.value,
                fecha: $fecha.value,
                hora: $hora.value

            }),
        };
        const res = await fetch(API, params);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error);
*/
};

$btnLogin.onclick((e) => validateUser(e));
