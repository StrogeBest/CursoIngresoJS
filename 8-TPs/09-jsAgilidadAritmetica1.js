/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 9 IF

Debemos mostrar dos números Random  del 1 al 10 y una de las cuatro operaciones básicas (suma, resta, división o multiplicación) para realizar entre estos dos números, estas operaciones también serán Random.
En el cuadro de texto resultado el jugador debe ingresar el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/

var respuesta;

function comenzar()
{
    let numeroUno;
    let numeroDos;
    let operacion;
    
	// Genero el primer número RANDOM entre 1 y 10
	numeroUno = Math.floor(Math.random() * 10) + 1;
    // Muestro el numero random en el id
    document.getElementById("txtIdPrimerNumero").value = numeroUno;
    
	// Genero el segundo número RANDOM entre 1 y 10
	numeroDos = Math.floor(Math.random() * 10) + 1;
    // Muestro el numero random en el id
    document.getElementById("txtIdSegundoNumero").value = numeroDos;
    
    // Operacion RANDOM 
	operacion = Math.floor(Math.random() * 4) + 1;
    
    // Suma
    if (operacion == 1) {
        // Guardo la operacion en la varible resultado para usarlo despues
        respuesta = numeroUno + numeroDos;
        // Muestro la suma en el id
        document.getElementById("txtIdOperador").value = "+";
    }else if (operacion == 2) {
        // Resta
        // Guardo la operacion en la varible resultado para usarlo despues
        respuesta = numeroUno - numeroDos;
        // Muestro la resta en el id
        document.getElementById("txtIdOperador").value = "-";
    }else if (operacion == 3) {
        // Division
        // Guardo la operacion en la varible resultado para usarlo despues
        respuesta = numeroUno / numeroDos;
        // Muestro la division en el id
        document.getElementById("txtIdOperador").value = "/";
    }else{
        // Multiplicacion
        // Guardo la operacion en la varible resultado para usarlo despues
        respuesta = numeroUno * numeroDos;
        // Muestro la multiplicacion en el id
        document.getElementById("txtIdOperador").value = "*";
    }

    console.log(respuesta);
}//FIN DE LA FUNCIÓN

function Responder()
{
    let respuestaIngresada;

	// Tomo la respuesta
    respuestaIngresada = parseFloat(document.getElementById("txtIdRespuesta").value);

    // Si la respuesta ingresada es igual a la respuesta muestro el mensaje "Correcto"
    if (respuestaIngresada == respuesta) {
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
}//FIN DE LA FUNCIÓN
