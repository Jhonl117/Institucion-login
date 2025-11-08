function iniciarSesion() {
  let usuario = document.getElementById("usuario").value.trim();
  let contrasena = document.getElementById("contrasena").value.trim();

  if (usuario === "" || contrasena === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  if (usuario.length < 4) {
    alert("El usuario debe tener al menos 4 caracteres.");
    return;
  }

  if (!/^[a-zA-Z0-9]+$/.test(usuario)) {
    alert("El usuario solo puede contener letras y números.");
    return;
  }

  if (contrasena.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (!/\d/.test(contrasena)) {
    alert("La contraseña debe incluir al menos un número.");
    return;
  }

  if (!/[a-zA-Z]/.test(contrasena)) {
    alert("La contraseña debe incluir al menos una letra.");
    return;
  }

  alert("Inicio de sesión exitoso ✅");
}

function verContrasena() {
  let input = document.getElementById("contrasena");
  input.type = input.type === "password" ? "text" : "password";
}
