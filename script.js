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
let guardians = document.getElementsByClassName('guardian');
let girls = document.getElementsByClassName('girl');

document.getElementById('darkmode').addEventListener('click', function(){
    if (document.body.style.background == 'var(--second-color)'){
        document.body.style.background = 'var(--first-color)';
        document.body.style.color = 'var(--second-color)';
		document.getElementById('bridge').src = './assets/bridge-icon.jpg';
		for (let i = 0; i < guardians.length; i++) {
			guardians[i].src = './assets/viejo.jpg';
		  }
		  for (let i = 0; i < girls.length; i++) {
			girls[i].src = './assets/girl.jpg';
		  }
	
    }else{  
        document.body.style.background = 'var(--second-color)';
        document.body.style.color = 'var(--first-color)';
		document.getElementById('bridge').src = './assets/bridgeblack.jpg';
		for (let i = 0; i < guardians.length; i++) {
			guardians[i].src = './assets/viejodark.jpg';
		  }
		  for (let i = 0; i < girls.length; i++) {
			girls[i].src = './assets/girldark.jpg';
		  }
    }
});

//LO QUE PASA AL COMENZAR
document.getElementById('comenzar').addEventListener('click', function(){
	if (document.getElementById('info').style.display == 'none'){
        document.getElementById('info').style.display = 'block';
		document.getElementById('comenzar').innerHTML = 'Comenzar Juego';
		document.getElementById('game').style.display = 'none';
    }else{  
        document.getElementById('info').style.display = 'none';
		document.getElementById('comenzar').innerHTML = 'Reiniciar';
		document.getElementById('game').style.display = 'block';
		mostrarTexto('hola');
    }
});

//TEXTOS QUE APARECEN LENTAMENTE
function mostrarTexto(idElemento) {
	const elemento = document.getElementById(idElemento);
	const texto = elemento.innerHTML;
	elemento.innerHTML = ""; // borra el texto del elemento HTML
	let i = 0;
	const intervalo = setInterval(function() {
	  if (i < texto.length) {
		elemento.innerHTML += texto.charAt(i); // agrega la letra al texto
		i++;
	  } else {
		clearInterval(intervalo);
	  }
	}, 50); // aquí se puede ajustar el intervalo de tiempo (en milisegundos) entre cada letra
  }
  
  //LO QUE PASA AL ENVIAR PALABRA
// Obtener los elementos del DOM que necesitaremos
const formulario = document.querySelector('form');
const input = document.querySelector('#palabra');
const pregunta = document.querySelector('#pregunta');

// Agregar un controlador de eventos para el botón de enviar
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evitar que el formulario se envíe

  // Obtener el valor del input
  let palabra = input.value;

  //Agregar palabra a la pregunta
  palabra = palabra + '?';
  pregunta.innerHTML += palabra;

  // Mostrar la palabra en el resultado
	mostrarTexto('pregunta');
	pregunta.style.display= 'block';
});
