const formulario = document.getElementById("formEncuesta");
let datosForm = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  juntarDatos();
});

//Recolecto los datos que se ingresan en la encuesta
const juntarDatos = () => {
  const encuesta = [];
  let checkSexo = document.querySelectorAll('input[name="opcionSexo"]:checked');
  let checkEdad = document.querySelectorAll('input[name="opcionEdad"]:checked');
  let checkConociste = document.querySelectorAll(
    'input[name="opcionConociste"]:checked'
  );
  let checkBurger = document.querySelectorAll(
    'input[name="opcionBurger"]:checked'
  );
  let checkCalidad = document.querySelectorAll(
    'input[name="opcionCalidad"]:checked'
  );
  let checkFrecuencia = document.querySelectorAll(
    'input[name="opcionFrecuencia"]:checked'
  );
  let mensaje = document.getElementById("textEncuesta");

  try {
    encuesta.push(checkSexo[0].value);
    encuesta.push(checkEdad[0].value);
    encuesta.push(checkConociste[0].value);
    encuesta.push(checkBurger[0].value);
    encuesta.push(checkCalidad[0].value);
    encuesta.push(checkFrecuencia[0].value);
    encuesta.push(mensaje.value);

    datosForm.push(encuesta);
    guardarDatosEnStorage(datosForm);
    datosForm = [];
    Toastify({
      text: "Encuesta enviada correctamente!",
      duration: 5000,
      gravity: "bottom",
      position: "left",
    }).showToast();
  } catch (error) {
    Toastify({
      text: "Por favor complete todos los campos",
      duration: 5000,
      gravity: "bottom",
      position: "left",
    }).showToast();
  }
};

//Guardamos datos de la encuesta en el storage
const guardarDatosEnStorage = (datos) => {
  localStorage.setItem(datos, JSON.stringify(datos));
};
