function validarFormulario(){
    let nombre = document.getElementById("nombreCompleto").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

if (nombre.length < 5){ errorNombre.innerHTML = `<p class="text-danger fs-6 pt-3">⚠ Es necesario completar este campo</p>`} else { errorNombre.innerHTML = ""}
if (email.length < 5 || email.indexOf("@") == -1 || email.indexOf(".") == -1) {errorEmail.innerHTML = `<p class="text-danger fs-6 pt-3">⚠ Ingrese un email correcto</p>`} else { errorEmail.innerHTML = ""};
if (telefono.length < 7) {errorTelefono.innerHTML = `<p class="text-danger fs-6 pt-3">⚠ Ingrese un telefono válido</p>`} else { errorTelefono.innerHTML = ""};
if (mensaje.length < 10) {errorMensaje.innerHTML = `<p class="text-danger fs-6 pt-2">⚠ Ingrese su mensaje</p>`} else { errorMensaje.innerHTML = ""};
 
(email.length < 5) || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) || (nombre.length < 5) || (telefono.length < 7) || (mensaje.length < 10)? errorForm.innerHTML = "" : successForm.innerHTML = `<div class="d-flex justify-content-center description bg-turquoise py-5" id="mensaje" rows="9"><div class="text-white p-2 rounded bg-gracias">Mensaje Enviado</div></div>`; 
}
document.getElementById("boton_enviar").addEventListener("click", validarFormulario);


boton_borrar.addEventListener('click', () => {
    nombreCompleto.value = "";
    email.value= "";
    telefono.value= "";
    mensaje.value= "";
    errorNombre.innerHTML= "";
    errorEmail.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorMensaje.innerHTML = "";
    errorForm.innerHTML = "";
  })
