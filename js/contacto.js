const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const mensaje = document.getElementById("message");
const chequearDatos = document.getElementById("formContacto");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  recolectarDatos();
});

const recolectarDatos = () => {
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    email: email.value,
    numero: numero.value,
    mensaje: mensaje.value,
  };
  verificarDatosStorage(datos);
};

//Guardamos datos de la persona en el storage
const guardarDatosEnStorage = (datos) => {
  localStorage.setItem(datos.email, JSON.stringify(datos));
  enviarCorreo(datos);
};

//Verificamos si la persona tiene o no una consulta realizada
const verificarDatosStorage = (datos) => {
  localStorage.getItem(datos.email)
    ? Toastify({
        text: "Ya ha enviado una consulta, espere su respuesta",
        duration: 6000,
        gravity: "bottom",
        position: "left",
      }).showToast()
    : Swal.fire({
        title: "Consulta enviada",
        text: "tu consulta ya fue enviada correctamente, le responderemos a la brevedad",
        icon: "success",
        confirmButtonText: "Cerrar",
      }) && guardarDatosEnStorage(datos);
};

//Me envio las consultas del contacto a mi email mediante la api
const enviarCorreo = (datos) => {
  emailjs.send("service_m3vwia4", "template_3og7se9", datos).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
};
