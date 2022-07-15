/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 6 IF

En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.
*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	// Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 10) + 1;
	// Le asigno 0 a la variable 
	contadorIntentos = 0;
	console.log(numeroSecreto);
}

function verificar()
{
	let numeroIngresado;
    let mensaje;

    // Cuento la cantidad de veces que intento adivinar el numero
    contadorIntentos = contadorIntentos + 1;
    // Tomo el numero ingresado por id y lo transformo a un numero entero
    numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);

	// 1 intento
	if (contadorIntentos == 1) {
		// Si el numero ingresado es igual al numero secreto muestro el mensaje "excelente percepción"
		if (numeroIngresado == numeroSecreto) {
			mensaje = "usted es un Psíquico";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}

	// 2 intentos
	if (contadorIntentos == 2) {
		// Si el numero ingresado es igual al numero secreto muestro el mensaje "excelente percepción"
		if (numeroIngresado == numeroSecreto) {
			mensaje = "excelente percepción";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}
	
	// 3 intentos
	if (contadorIntentos == 3) {
		// Si el numero ingresado es igual al numero secreto muestro el mensaje "Esto es suerte"
		if (numeroIngresado == numeroSecreto) {
			mensaje = "Esto es suerte";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}
	
	// 4 intentos
	if (contadorIntentos == 4) {
		// Si el numero ingresado es igual al numero secreto muestro el mensaje "Excelente técnica"
		if (numeroIngresado == numeroSecreto) {
			mensaje = "Excelente técnica";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}
	
	// 5 intentos
	if (contadorIntentos == 5) {
		// Si el numero ingresado es igual al numero secreto muestro el mensaje "usted está en la media"
		if (numeroIngresado == numeroSecreto) {
			mensaje = "usted está en la media";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}
	
	// 6 o 10 intentos
	if (contadorIntentos >= 6 && contadorIntentos <= 10) {
		// Si el numero ingresado es igual al numero secreto muestro el mensaje "falta técnica"
		if (numeroIngresado == numeroSecreto) {
			mensaje = "falta técnica";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}else{
			mensaje = "afortunado en el amor!!";
			// Muestro el mensaje
			alert(mensaje);
			// Muestro por id la cantidad de veces que se intento
			document.getElementById("txtIdIntentos").value = contadorIntentos;
		}
	}
}