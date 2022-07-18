/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 11 IF

En la pantalla se mostrarán 6 botones de distintos colores,  al comenzar el juego se mostrara el texto de un color entre los 6 posibles para que el jugador sepa que botón tocar. Al tocar el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
let tiempo;

function comenzar()
{
    // Color random
    let ColorRandom = Math.floor(Math.random() * 6) + 1;
    
    tiempoInicio = 1;

    // Azul
    if (ColorRandom == 1) {
        ColorSecreto = "azul";
        document.getElementById("txtIdColorElegido").value = "azul";
    }else if (ColorRandom == 2) {
        // Amarillo
        ColorSecreto = "amarillo";
        document.getElementById("txtIdColorElegido").value = "amarillo";
    }else if (ColorRandom == 3) {
        // Marron
        ColorSecreto = "marron";
        document.getElementById("txtIdColorElegido").value = "marron";
    }else if (ColorRandom == 4) {
        // Verde
        ColorSecreto = "verde";
        document.getElementById("txtIdColorElegido").value = "Verde";
    }else if (ColorRandom == 5) {
        // Celeste
        ColorSecreto = "celeste";
        document.getElementById("txtIdColorElegido").value = "celeste";
    }else{
        // Rojo
        ColorSecreto = "rojo";
        document.getElementById("txtIdColorElegido").value = "rojo";
    }

    // Tiempo
    tiempo = setInterval(() => {
        console.log(tiempoInicio);
        tiempoInicio++;
    }, 1000);
}//FIN DE LA FUNCIÓN

function Responder(colorParametro)
{
    // Si el color secreto es igual al color parametro cancelo la ejecucion del setInterval() y muestro el mensaje "Adivinante el color en x segundos"
    if (ColorSecreto == colorParametro) {
        clearInterval(tiempo);
        alert("Adivinante el color en " + tiempoInicio + " segundos")
    }
}//FIN DE LA FUNCIÓN
