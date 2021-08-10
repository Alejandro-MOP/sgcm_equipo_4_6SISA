const API = "http://localhost:8080/api/login";

const $user = document.getElementById("user");
const $pass = document.getElementById("password");
const $btnLogin = document.getElementById("btn-login");

const validateUser = async (event, intentos = 1) => {
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
        user: $user.value,
        password: $pass.value,
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
