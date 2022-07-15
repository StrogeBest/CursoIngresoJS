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
    temporizador = 5;

    // Temporizador
    let tiempo = setInterval(() => {
        console.log(temporizador);
        temporizador--
        // Si el temporizador es 0 cancelo la ejecucion del setInterval()
        if (temporizador == 0) {
            clearInterval(tiempo);
        }
    }, 1000);
}//FIN DE LA FUNCIÓN

function Responder()
{
	


}//FIN DE LA FUNCIÓN
