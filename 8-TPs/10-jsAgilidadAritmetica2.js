/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 10 IF

Además de lo anterior, ahora se agregara un temporizador que a los cinco segundos dará por terminado el juego  de no ser ingresado el resultado correcto en ese lapso de tiempo. 
*/

var respuesta;
var temporizador;

function comenzar()
{
    let numeroUno;
    let numeroDos;
    let operacion;

    // Primer numero random entre 1 y 10
    numeroUno = Math.floor(Math.random() * 10) + 1;
    // Muestro el numero random en el id
    document.getElementById("txtIdPrimerNumero").value = numeroUno;

    // Segundo numero random entre 1 y 10
    numeroDos = Math.floor(Math.random() * 10) + 1;
    // Muestro el numero random en el id
    document.getElementById("txtIDSegundoNumero").value = numeroDos;

    // Operacion RANDOM 
    operacion = Math.floor(Math.random() * 4) + 1;

    // Suma
    if (operacion == 1) {
        // Guardo la operacion en la variable resultado para usarlo despues
        respuesta = numeroUno + numeroDos;
        // Muestro la suma en el id
        document.getElementById("txtIdOperador").value = "+";
    }else if (operacion == 2) {
        // Resta
        // Guardo la operacion en la variable resultado para usarlo despues
        respuesta = numeroUno - numeroDos;
        // Muestro la resta en el id
        document.getElementById("txtIdOperador").value = "-";
    }else if (operacion == 3) {
        // Division
        // Guardo la operacion en la variable resultado para usarlo despues
        respuesta = numeroUno / numeroDos;
        // Muestro la division en el id
        document.getElementById("txtIdOperador").value = "/";
    }else{
        // Multiplicacion
        // Guardo la operacion en la variable resultado para usarlo despues
        respuesta = numeroUno * numeroDos;
        // Muestro la multiplicacion en el id
        document.getElementById("txtIdOperador").value = "*";
    }

    temporizador = 10;

    // Temporizador
    let tiempo = setInterval(() => {
        console.log(temporizador);
        temporizador--
        // Cuando el temporizador llegue a 0 cancelo la ejecucion del setInterval() y muestro el mensaje "El tiempo ha terminado"
        if (temporizador == 0) {
            clearInterval(tiempo);
            alert("El tiempo ha terminado")
        }
    }, 1000);
}//FIN DE LA FUNCIÓN

function Responder()
{
    let respuestaIngresada;

	// Tomo la respuesta por el id y lo transformo a un numero con coma en caso que sea
    respuestaIngresada = parseFloat(document.getElementById("txtIdRespuesta").value);

    // Si la respuesta ingresada es igual a la respuesta antes de los 5 segundos muestro el mensaje "Ganaste" 
    if (respuestaIngresada == respuesta) {
        alert("Ganaste")
    }else{
        alert("Incorrecto")
    }

}//FIN DE LA FUNCIÓN
