function validarFormulario(){
    let nombre = document.getElementById("nombreCompleto").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;


if (nombre.length < 5){ errorNombre.innerHTML = `<p class="bg-danger parrafo text-white p-3 rounded">Complete el campo nombre</p>`} else { errorNombre.innerHTML = ""};
if (email.length < 5 || email.indexOf("@") == -1 || email.indexOf(".") == -1) {errorEmail.innerHTML = `<p class="bg-danger parrafo text-white p-3 rounded">Ingrese un email correcto</p>`} else { errorEmail.innerHTML = ""};
if (telefono.length < 7) {errorTelefono.innerHTML = `<p class="bg-danger parrafo text-white p-3 rounded">Ingrese un telefono válido</p>`} else { errorTelefono.innerHTML = ""};
if (mensaje.length < 10) {errorMensaje.innerHTML = `<p class="bg-danger parrafo text-white p-3 rounded">Ingrese su mensaje</p>`} else { errorMensaje.innerHTML = ""};
 
(email.length < 5) || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) || (nombre.length < 5) || (telefono.length < 7) || (mensaje.length < 10)? errorForm.innerHTML = `<p class="bg-danger col-12 col-md-12 mx-auto text-white parrafo ps-3 py-2 pe-4 mt-3 p-lg-3 rounded">Revise los campos requeridos!</p>` : errorForm.innerHTML = `<p class="mx-auto bg-turquoise text-purple  ps-3 py-2 pe-4 parrafo mt-3 p-lg-3 rounded">Gracias por comunicarte con nosotros!</p>`;
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
