/* 
Javier Vilchez
Div E
Trabajo Practico - Ejercicio 8 IF
*/

var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

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
		ContadorDeEmpates = ContadorDeEmpates + 1;
		// Muestro la cantidad de veces que el usuario empato
		document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
        alert("Empate");
    }else{
        // Si la maquina elige 2(papel) el usuario pierde
        if (eleccionMaquina == 2) {
			ContadorDePerdidas = ContadorDePerdidas + 1;
			// Muestro la cantidad de veces que el usuario perdio
			document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
            alert("Perdiste");
        }else{
			// Como la maquina eligio 3(tijera) el usuario gana
			ContadorDeGanadas = ContadorDeGanadas + 1;
			// Muestro la cantidad de veces que el usuario gano
			document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
            alert("Ganaste");
        }
    }
}//FIN DE LA FUNCIÓN

function papel()
{
    // Si la maquina elige 2(papel) el usuario empata
    if (eleccionMaquina == 2) {
		ContadorDeEmpates = ContadorDeEmpates + 1;
		// Muestro la cantidad de veces que el usuario empato
		document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
        alert("Empate");
    }else{
        // Si la maquina elige 3(tijera) el usuario pierde
        if (eleccionMaquina == 3) {
			ContadorDePerdidas = ContadorDePerdidas + 1;
			// Muestro la cantidad de veces que el usuario perdio
			document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
            alert("Perdiste");
        }else{
            // Como la maquina eligio 1(piedra) el usuario gana
			ContadorDeGanadas = ContadorDeGanadas + 1;
			// Muestro la cantidad de veces que el usuario gano
			document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
			alert("Ganaste");
        }
    }
}//FIN DE LA FUNCIÓN

function tijera()
{
    // Si la maquina elige 3(tijera) el usuario empata
    if (eleccionMaquina == 3) {
		ContadorDeEmpates = ContadorDeEmpates + 1;
		// Muestro la cantidad de veces que el usuario empato
		document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;
        alert("Empate");
    }else{
        // Si la maquina elige 1(piedra) el usuario pierde
        if (eleccionMaquina == 1) {
			ContadorDePerdidas = ContadorDePerdidas + 1;
			// Muestro la cantidad de veces que el usuario perdio
			document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
            alert("Perdiste");
        }else{
            // Como la maquina eligio 2(papel) el usuario gana
			ContadorDeGanadas = ContadorDeGanadas + 1;
			// Muestro la cantidad de veces que el usuario gano
			document.getElementById("txtIdGanadas").value = ContadorDeGanadas;
			alert("Ganaste");
        }
    }
}//FIN DE LA FUNCIÓN