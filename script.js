/*
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault(); // Evita que el formulario se envíe y la página se refresque

	var palabra = document.querySelector('#palabra').value;
	var norma = obtenerNorma(); // Función para obtener la norma del director del juego

	if (revisarPalabra(palabra, norma)) {
		// Si la palabra cumple con la norma, el jugador pasa la frontera
		alert('¡Pasa la frontera!');
	} else {
		// Si la palabra no cumple con la norma, el jugador no pasa la frontera
		alert('No pasas la frontera :(');
	}
});

function obtenerNorma() {
	// Retorna una norma aleatoria o seleccionada de una lista
}
// CONSTANTES
const info = document.getElementById("info");
const comenzar = document.getElementById("comenzar");
const game = document.getElementById("game");
const girlask = document.getElementById("girlask");
const oldmananswer = document.getElementById("oldmananswer");
const arriesgar = document.getElementById("arriesgar");
const pistas = document.getElementById("pistas");
const arriesgando = document.getElementById("arriesgando");
const enviarBoton = document.getElementById("entrega");

// FUNCIONES
function mostrar(elemento) {
elemento.style.display = "block";
}

function ocultar(elemento) {
elemento.style.display = "none";
}

function mostrarTextoLento(idElemento) {
const elemento = document.getElementById(idElemento);
const texto = elemento.innerHTML;
elemento.innerHTML = "";
let i = 0;
const intervalo = setInterval(function () {
if (i < texto.length) {
elemento.innerHTML += texto.charAt(i);
i++;
} else {
clearInterval(intervalo);
}
}, 30);
}

function crearPregunta(pregunta) {
const ppregunta = document.createElement("p");
ppregunta.textContent = pregunta;
ppregunta.id = "pregunta";
ppregunta.className = "dialogo";
return ppregunta;
}

function crearPalabra(palabra) {
const pword = document.createElement("p");
pword.textContent = palabra;
pword.id = "word";
pword.className = "dialogo";
return pword;
}

function crearRespuesta(respuesta) {
const prespuesta = document.createElement("p");
prespuesta.textContent = respuesta;
prespuesta.id = "respuesta";
prespuesta.className = "dialogo";
return prespuesta;
}

function agregarTexto(elemento, texto) {
elemento.appendChild(texto);
}

function eliminarElemento(elemento) {
elemento.remove();
}

function verificarPalabra(palabra) {
let esValida = checkWord(palabra);
return esValida ? "Sí, si puedes" : "No, no puedes";
}

function onSubmitFormulario(evento) {
evento.preventDefault();
const input = document.querySelector("#palabra");
let palabra = input.value;
palabra = palabra + "?";
input.value = "";

ocultar(info);
comenzar.innerHTML = "Reiniciar";
mostrar(game);

const ppregunta = crearP
*/

//MODO OSCURO Y MODO CLARO
let guardians = document.getElementsByClassName("guardian");
let girls = document.getElementsByClassName("girl");

document.getElementById("darkmodeButton").addEventListener("click", function () {
  if (document.body.style.background == "var(--second-color)") {
    document.body.style.background = "var(--first-color)";
    document.body.style.color = "var(--second-color)";
    document.getElementById("bridge").src = "./assets/bridge-icon.jpg";
    for (let i = 0; i < guardians.length; i++) {
      guardians[i].src = "./assets/viejo.jpg";
    }
    for (let i = 0; i < girls.length; i++) {
      girls[i].src = "./assets/girl.jpg";
    }
  } else {
    document.body.style.background = "var(--second-color)";
    document.body.style.color = "var(--first-color)";
    document.getElementById("bridge").src = "./assets/bridgeblack.jpg";
    for (let i = 0; i < guardians.length; i++) {
      guardians[i].src = "./assets/viejodark.jpg";
    }
    for (let i = 0; i < girls.length; i++) {
      girls[i].src = "./assets/girldark.jpg";
    }
  }
});

//LO QUE PASA AL COMENZAR
document.getElementById("startButton").addEventListener("click", function () {
  if (document.getElementById("gameInfo").style.display == "none") {
    document.getElementById("gameInfo").style.display = "block";
    document.getElementById("startButton").innerHTML = "Comenzar Juego";
    document.getElementById("gameScreen").style.display = "none";
  } else {
    document.getElementById("gameInfo").style.display = "none";
    document.getElementById("startButton").innerHTML = "Reiniciar";
    document.getElementById("gameScreen").style.display = "block";
    mostrarTexto("hola");
  }
});

//TEXTOS QUE APARECEN LENTAMENTE
function mostrarTexto(idElemento) {
  const elemento = document.getElementById(idElemento);
  const texto = elemento.innerHTML;
  elemento.innerHTML = ""; // borra el texto del elemento HTML
  let i = 0;
  const intervalo = setInterval(function () {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i); // agrega la letra al texto
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, 30); // aquí se puede ajustar el intervalo de tiempo (en milisegundos) entre cada letra
}

//LO QUE PASA AL ENVIAR PALABRA
function onSubmitFormulario(evento) {
  evento.preventDefault(); // Evita que el formulario se envíe
  let wordInput = document.querySelector("#palabra");
  let palabra = wordInput.value;
  palabra = palabra + "?";
  wordInput.value = "";

  // Obtener una referencia al div con id "girlask" donde aparecera la pregunta
  const askDiv = document.getElementById("girlask");
  // Obtener una referencia al div2 con id "oldmananswer" donde aparecera la respuesta
  const answerDiv = document.getElementById("oldmananswer");
  // Crear un nuevo elemento "p" con la pregunta y con id pregunta
  let questionElem = document.createElement("p");
  questionElem.textContent = "Puedo cruzar la frontera con ... ";
  questionElem.id = "pregunta";
  questionElem.className = "dialogo";
  // Crear un nuevo elemento "p" con el contenido de la palabra y con id word
  let wordElem = document.createElement("p");
  wordElem.textContent = palabra;
  wordElem.id = "word";
  wordElem.className = "dialogo";
  // Agrega y muestra la pregunta, la palabra y la respuesta coorespondiente segun la funcion y luego las elimina
  askDiv.appendChild(questionElem);
  mostrarTexto("pregunta");
  setTimeout(function () {
    askDiv.appendChild(wordElem);
    mostrarTexto("word");
    setTimeout(function () {
      let answerElem = document.createElement("p");
      answerElem.textContent = verificarPalabra(palabra);
      answerElem.id = "respuesta";
      answerElem.className = "dialogo";
      answerDiv.appendChild(answerElem);
      mostrarTexto("respuesta");
      setTimeout(function () {
        questionElem.remove();
        wordElem.remove();
        answerElem.remove();
      }, 3000);
    }, 3000);
  }, 3000);
}
// Agrega un controlador de eventos para el botón de enviar
const formulario = document.querySelector("form");
formulario.addEventListener("submit", onSubmitFormulario);

//CHEQUEO DE LA PALABRA EN BASE A LA CLAVE
function checkWord(word) {
  // Verifica si la palabra cumple con la condición deseada
  let condition = word.includes("e");
  return condition;
}

function verificarPalabra(palabra) {
  // Llama a la función checkWord para verificar si la palabra cumple con la condición
  let esValida = checkWord(palabra);
  // Si la palabra cumple con la condición, devuelve "Sí, si puedes"
  // De lo contrario, devuelve "No, no puedes"
  return esValida ? "Sí, si puedes" : "No, no puedes";
}

//LO QUE PASA AL ARRIESGAR
document.getElementById("arriesgar").addEventListener("click", function () {
  document.getElementById("pistas").style.display = "none";
  document.getElementById("arriesgando").style.display = "block";
  document.getElementById("arriesgar").style.display = "none";
});

//LO QUE PASA AL ENVIAR LUEGO DE ARRIESGAR
// Selecciona el formulario y el botón de envío
const formulario2 = document.getElementById("arriesgando");
const enviarBoton = document.getElementById("entrega");

// Agrega un controlador de eventos al botón de envío
enviarBoton.addEventListener("click", function (evento) {
  evento.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  // Selecciona los campos de entrada de texto
  const si1 = document.getElementById("si1");
  const si2 = document.getElementById("si2");
  const si3 = document.getElementById("si3");
  const no1 = document.getElementById("no1");
  const no2 = document.getElementById("no2");
  const no3 = document.getElementById("no3");
  // Verifica si todas las palabras cumplen con la condición
  const si1Valida = checkWord(si1.value);
  const si2Valida = checkWord(si2.value);
  const si3Valida = checkWord(si3.value);
  const no1Valida = checkWord(no1.value);
  const no2Valida = checkWord(no2.value);
  const no3Valida = checkWord(no3.value);
  document.getElementById("arriesgando").style.display = 'none';
  // Comprueba si los campos cumplen con la condición
  if (
    si1Valida &&
    si2Valida &&
    si3Valida &&
    !no1Valida &&
    !no2Valida &&
    !no3Valida
  ) {
    // Muestra un mensaje de felicitación
    ganar();
    // Add confetti to the container
    for (var i = 0; i < 50; i++) {
      var confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      document.querySelector(".confetti-container").appendChild(confetti);
    }
    // Remove confetti after 5 seconds
    setTimeout(function () {
      var confettis = document.querySelectorAll(".confetti");
      for (var i = 0; i < confettis.length; i++) {
        confettis[i].parentNode.removeChild(confettis[i]);
      }
    }, 5000);
    setTimeout(function () {
      // Recarga la página después de 5 segundos
      location.reload();
    }, 5000);
  } else {
    // Muestra un mensaje de error
    perder();
    setTimeout(function () {
      // Recarga la página después de 5 segundos
      location.reload();
    }, 5000);
  }
});

//LO QUE PASA SI GANAS Y LO QUE PASA SI PIERDES
function ganar() {
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "<h4>¡Felicitaciones! Ganaste</h4>";
  mensaje.style.backgroundColor = "green";
  mensaje.style.color = "white";
  mensaje.style.padding = "20px";
}

function perder() {
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "<h4>Perdiste alpiste</h4>";
  mensaje.style.backgroundColor = "red";
  mensaje.style.color = "white";
  mensaje.style.padding = "20px";
}
