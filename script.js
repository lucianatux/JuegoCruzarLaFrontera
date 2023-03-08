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

//dark mode/light mode
document.getElementById('darkmode').addEventListener('click', function(){
    if (document.body.style.background == 'var(--second-color)'){
        document.body.style.background = 'var(--first-color)';
        document.body.style.color = 'var(--second-color)';
		document.getElementById('bridge').src = './assets/bridge-icon.jpg';
	
    }else{  
        document.body.style.background = 'var(--second-color)';
        document.body.style.color = 'var(--first-color)';
		document.getElementById('bridge').src = './assets/bridgeblack.jpg';

    }
});

document.getElementById('comenzar').addEventListener('click', function(){
	if (document.getElementById('info').style.display == 'none'){
        document.getElementById('info').style.display = 'block';
		document.getElementById('comenzar').innerHTML = 'Comenzar Juego';
    }else{  
        document.getElementById('info').style.display = 'none';
		document.getElementById('comenzar').innerHTML = 'Reiniciar';
    }
});