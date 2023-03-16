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
*/

//CONSTANTES Y VARIABLES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const gameInfo = document.getElementById("gameInfo");
const startButton = document.getElementById("startButton");
const gameScreen = document.getElementById("gameScreen");

let guardians = document.getElementsByClassName("guardian");
let girls = document.getElementsByClassName("girl");

//MODO OSCURO Y MODO CLARO xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

//FUNCIONES AUXILIARES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function mostrar(elemento) {
  elemento.style.display = "block";
}

function ocultar(elemento) {
  elemento.style.display = "none";
}

function limpiarTexto(elemento) {
  const elem = document.getElementById(elemento);
  elem.remove();
}

//muestra texto letra por letra 
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

//LO QUE PASA AL COMENZAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
startButton.addEventListener("click", function() {
  if (gameInfo.style.display === "none") {
    mostrar(gameInfo);
    startButton.innerHTML = "Comenzar Juego";
    ocultar(gameScreen);
  } else {
    ocultar(gameInfo);
    startButton.innerHTML = "Reiniciar";
    mostrar(gameScreen);
    mostrarTexto("hola");
  }
});

//LO QUE PASA AL ENVIAR PALABRA xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function agregarPregunta(palabra) {
  const questionDiv = document.getElementById("girlask");
  const questionElem = document.createElement("p");
  questionElem.textContent = `"Puedo cruzar la frontera con ${palabra} ...?"`;
  questionElem.id = "pregunta";
  questionElem.className = "dialogo";
  questionDiv.appendChild(questionElem);
  mostrarTexto("pregunta");
}
  
function agregarRespuesta(respuesta) {
  const answerDiv = document.getElementById("oldmananswer");
  const answerElem = document.createElement("p");
  answerElem.textContent = respuesta;
  answerElem.id = "respuesta";
  answerElem.className = "dialogo";
  answerDiv.appendChild(answerElem);
  mostrarTexto("respuesta");
}
  
const TIEMPO_ESPERA = 3000;
  
function onSubmitFormulario(evento) {
  evento.preventDefault();
  const palabraInput = document.querySelector("#palabra");
  const palabra = `${palabraInput.value}`;
  palabraInput.value = "";
  
  agregarPregunta(palabra);
  
  setTimeout(() => {
    const respuesta = verificarPalabra(palabra);
    agregarRespuesta(respuesta);
  
    setTimeout(() => {
      limpiarTexto("pregunta");
      limpiarTexto("respuesta");
    }, TIEMPO_ESPERA);
  }, TIEMPO_ESPERA);
}

const formulario = document.querySelector("form");
formulario.addEventListener("submit", onSubmitFormulario);

//LO QUE PASA AL ARRIESGAR xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Obtiene elementos del DOM
const clues = document.getElementById("clues");
const riskForm = document.getElementById("riskForm");
const riskButton = document.getElementById("riskButton");
const finalRiskButton = document.getElementById("finalRiskButton");

// Agrega controlador de eventos al botón de riesgo
riskButton.addEventListener("click", function() {
  // Oculta pistas y muestra formulario para arriesgar
  ocultar(clues);
  mostrar(riskForm);
  ocultar(riskButton);
});

// Agrega un controlador de eventos al botón de riesgo final
finalRiskButton.addEventListener("click", function (evento) {
  evento.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  // Selecciona campos de entrada de texto
  const si1 = document.getElementById("si1");
  const si2 = document.getElementById("si2");
  const si3 = document.getElementById("si3");
  const no1 = document.getElementById("no1");
  const no2 = document.getElementById("no2");
  const no3 = document.getElementById("no3");
  // Valida entradas de texto
  const si1Valida = checkWord(si1.value, claveGenerada);
  const si2Valida = checkWord(si2.value, claveGenerada);
  const si3Valida = checkWord(si3.value, claveGenerada);
  const no1Valida = checkWord(no1.value, claveGenerada);
  const no2Valida = checkWord(no2.value, claveGenerada);
  const no3Valida = checkWord(no3.value, claveGenerada);
  // Oculta formulario de riesgo
  ocultar(riskForm);

  // Comprueba si las entradas son válidas
  if (si1Valida && si2Valida && si3Valida && !no1Valida && !no2Valida && !no3Valida) {
    // Si las entradas son válidas, muestra mensaje de felicitación y animaciones
    ganar();
    confeti();
    setTimeout(function () {
      // Recarga la página después de 5 segundos
      location.reload();
    }, 5000);
  } else {
    // Si las entradas no son válidas, muestra mensaje de haber perdido el juego
    perder();
    setTimeout(function () {
      // Recarga la página después de 5 segundos
      location.reload();
    }, 5000);
  }
});

// Muestra mensaje de ganar o perder
function ganar() {
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "<h1>¡Felicitaciones! ¡Ganaste!<br> La clave era:</h1>";
  mensaje.classList.add("mensaje-ganador");
  mensaje.classList.remove("mensaje-perdedor");
}

function perder() {
  const mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "<h1>Perdiste. Puedes intentar otra vez!</h1>";
  mensaje.classList.add("mensaje-perdedor");
  mensaje.classList.remove("mensaje-ganador");
}


// Agrega animaciones de confeti
function confeti() {
  for (var i = 0; i < 50; i++) {
    var confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    document.querySelector(".confetti-container").appendChild(confetti);
  }}

  //CLAVES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const claves = [
    /[ea]/,
    /[b-df-hj-np-tv-z]r/,
    /[aeiou]{2}/,
    /^(\w)\w*\1$/
  ];

  const claveGenerada = generarClave(claves);

  function generarClave(claves) {
    const indiceAleatorio = Math.floor(Math.random() * claves.length);
    const claveAleatoria = claves[indiceAleatorio].toString();
    return claveAleatoria;
  }
  
  function checkWord(word, clave) {
    const regex = new RegExp(clave.slice(1, -1)); // Removemos los slashes del principio y del final de la expresión regular
    return regex.test(word);
  }

  //CHEQUEO DE LA PALABRA EN BASE A LA CLAVE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function verificarPalabra(palabra) {
  // Llama a la función checkWord para verificar si la palabra cumple con la condición
  let esValida = checkWord(palabra, claveGenerada);
  // Si la palabra cumple con la condición, devuelve "Sí, si puedes"
  // De lo contrario, devuelve "No, no puedes"
  return esValida ? '"Sí, si puedes"' : '"No, no puedes"';
}
  
 
  