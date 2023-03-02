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

document.querySelector('form').addEventListener('submit
