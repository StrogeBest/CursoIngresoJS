/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 5 IF

Al comenzar el juego generamos un número secreto del 1 al 100, en la pantalla del juego dispondremos de un cuadro de texto para ingresar un número y un botón “Verificar”, si el número ingresado es el mismo que el número secreto se dará por terminado el juego con un mensaje similar a este: “Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos;

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
    
    // Si el numero ingresado es igual al numero secreto muestro el mensaje "Usted es un ganador!!! y en solo X intentos"
    if (numeroIngresado == numeroSecreto) {
        mensaje = "Usted es un ganador!!! y en solo " + contadorIntentos + " intentos"
        // Muestro el mensaje por el id
        document.getElementById("txtIdIntentos").value = mensaje;
    }else{
        // Si el numero ingresado es mayor al numero secreto muestro un mensaje
        if (numeroIngresado > numeroSecreto) {
            alert("Se paso...")
        }else{
            // Como el numero ingresado no es mayor al numero secreto muestro el mensaje
            alert("Falta...")
        }
    }
}