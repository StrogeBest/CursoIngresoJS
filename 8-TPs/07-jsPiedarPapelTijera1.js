/*
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 7 IF

Al comenzar el juego generaremos un número RANDOM del 1 al 3 para la selección de la máquina, siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente a su opción  y le informaremos si ganó, empató o perdió.
*/

var eleccionMaquina;

function comenzar()
{
	// Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;
    console.log(eleccionMaquina);	
}//FIN DE LA FUNCIÓN

function piedra()
{
	// Si la maquina elige 1(piedra) el usuario empata
    if (eleccionMaquina == 1) {
        alert("Empate");
    }else{
        // Si la maquina elige 2(papel) el usuario pierde
        if (eleccionMaquina == 2) {
            alert("Perdiste");
        }else{
            // Como la maquina eligio 3(tijera) el usuario gana
            alert("Ganaste");
        }
    }
}//FIN DE LA FUNCIÓN

function papel()
{
    // Si la maquina elige 2(papel) el usuario empata
    if (eleccionMaquina == 2) {
        alert("Empate");
    }else{
        // Si la maquina elige 3(tijera) el usuario pierde
        if (eleccionMaquina == 3) {
            alert("Perdiste");
        }else{
            // Como la maquina eligio 1(piedra) el usuario gana
            alert("Ganaste");
        }
    }
}//FIN DE LA FUNCIÓN

function tijera()
{
    // Si la maquina elige 3(tijera) el usuario empata
    if (eleccionMaquina == 3) {
        alert("Empate");
    }else{
        // Si la maquina elige 1(piedra) el usuario pierde
        if (eleccionMaquina == 1) {
            alert("Perdiste");
        }else{
            // Como la maquina eligio 2(papel) el usuario gana
            alert("Ganaste");
        }
    }
}//FIN DE LA FUNCIÓN