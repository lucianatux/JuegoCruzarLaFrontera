/*
function revisarPalabra(palabra, norma) {
	// Revisa si la palabra cumple con la norma
	// Retorna true si cumple y false si no cumple
}

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

var director = 'Director del juego'; // Inicializa el director del juego

function revisarPalabra(palabra, norma) {
	// Revisa si la palabra cumple con la norma
	// Retorna true si cumple y false si no cumple
}

document.querySelector('form').addEventListener('submit');
*/

//MODO OSCURO Y MODO CLARO
let guardians = document.getElementsByClassName("guardian");
let girls = document.getElementsByClassName("girl");

document.getElementById("darkmode").addEventListener("click", function () {
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
document.getElementById("comenzar").addEventListener("click", function () {
  if (document.getElementById("info").style.display == "none") {
    document.getElementById("info").style.display = "block";
    document.getElementById("comenzar").innerHTML = "Comenzar Juego";
    document.getElementById("game").style.display = "none";
  } else {
    document.getElementById("info").style.display = "none";
    document.getElementById("comenzar").innerHTML = "Reiniciar";
    document.getElementById("game").style.display = "block";
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
  let input = document.querySelector("#palabra");
  let palabra = input.value;
  palabra = palabra + "?";
  input.value = '';

  // Obtener una referencia al div con id "girlask" donde aparecera la pregunta
  const div = document.getElementById("girlask");
  // Obtener una referencia al div2 con id "oldmananswer" donde aparecera la respuesta
  const div2 = document.getElementById("oldmananswer");
  // Crear un nuevo elemento "p" con la pregunta y con id pregunta
  let ppregunta = document.createElement("p");
  ppregunta.textContent = "Puedo cruzar la frontera con ... ";
  ppregunta.id = "pregunta";
  ppregunta.className = "dialogo";
  // Crear un nuevo elemento "p" con el contenido de la palabra y con id word
  let pword = document.createElement("p");
  pword.textContent = palabra;
  pword.id = "word";
  pword.className = "dialogo";
  // Agrega y muestra la pregunta, la palabra y la respuesta coorespondiente segun la funcion y luego las elimina
  div.appendChild(ppregunta);
  mostrarTexto("pregunta");
  setTimeout(function () {
    div.appendChild(pword);
    mostrarTexto("word");
    setTimeout(function () {
      let prespuesta = document.createElement("p");
      prespuesta.textContent = verificarPalabra(palabra);
      prespuesta.id = "respuesta";
	  prespuesta.className = "dialogo";
      div2.appendChild(prespuesta);
      mostrarTexto("respuesta");
      setTimeout(function () {
        ppregunta.remove();
        pword.remove();
        prespuesta.remove();
      }, 3000);
    }, 3000);
  }, 3000);
}
// Agrega un controlador de eventos para el botón de enviar
const formulario = document.querySelector("form");
formulario.addEventListener("submit", onSubmitFormulario);

//CHEQUEO DE LA PALABRA EN BASE A LA CLAVE
function verificarPalabra(palabra) {
	let contieneE = palabra.includes('e');
	if (contieneE) {
	  return "Sí, si puedes";
	} else {
	  return "No, no puedes";
	}
  }