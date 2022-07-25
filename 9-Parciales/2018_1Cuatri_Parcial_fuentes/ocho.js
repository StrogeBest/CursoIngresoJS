/* 
Javier Vilchez
Div E
Parcial 2018 Ejercicio 8

Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de números pares.
    b) La cantidad de números impares.
    c) La cantidad de ceros.
    d) El promedio de todos los números positivos ingresados.
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{
    // Declaro variables
    let letraIngresada;
    let numeroIngresado;
    let respuesta;
    let cantidadNumeroPar;
    let cantidadNumeroImpar;
    let cantidadCeros;
    let acumuladorNumeroPositivoIngresado;
    let acumuladorNumeroNegativoIngresado;
    let numeroMax;
    let letraNumeroMax;
    let numeroMin;
    let letraNumeroMin;
    let bandera;
    let promedioNumeroPositivo;
    let cantidadNumeroPositivo;

    respuesta = true;
    cantidadNumeroPar = 0;
    cantidadNumeroImpar = 0;
    cantidadCeros = 0;
    acumuladorNumeroPositivoIngresado = 0;
    acumuladorNumeroNegativoIngresado = 0;
    bandera = 0;

    while (respuesta ) {
        // Pido datos
        letraIngresada = prompt("Ingrese una letra");
        while (letraIngresada.length > 1) {
            letraIngresada = prompt("ERROR. Ingrese una letra");
        }

        // Numero entre -100 y 100
        numeroIngresado = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (numeroIngresado < -100 || numeroIngresado > 100) {
            numeroIngresado = parseInt(prompt("ERROR. Ingrese un numero entre -100 y 100"));
        }

        // PUNTO A
        if (numeroIngresado % 2 == 0) {
            cantidadNumeroPar++;
        }else{
            // PUNTO B
            cantidadNumeroPar++;
        }

        // PUNTO C
        if (numeroIngresado == 0) {
            cantidadCeros++;
        }

        // PUNTO D
        if (numeroIngresado > 0) {
            acumuladorNumeroPositivoIngresado = acumuladorNumeroPositivoIngresado + numeroIngresado;
            cantidadNumeroPositivo++;
        }else{
            // PUNTO E
            acumuladorNumeroNegativoIngresado = acumuladorNumeroNegativoIngresado + numeroIngresado;
        }

        // PUNTO F
        if (!bandera) {
            bandera = 1;
            numeroMax = numeroIngresado;
            letraNumeroMax = letra;
            
            numeroMin = numeroIngresado;
            letraNumeroMin = letra;
        }else{
            // Numero maximo
            if (numeroIngresado > numeroMax) {
                numeroMax = numeroIngresado;
                letraNumeroMax = letra;
            }

            // Numero minimo
            if (numeroIngresado < numeroMin) {
                numeroMin = numeroIngresado;
                letraNumeroMin = letra;
            }
        }
        respuesta = confirm("¿Desea continuar?");
    }

    // PUNTO D
    promedioNumeroPositivo = acumuladorNumeroPositivoIngresado / cantidadNumeroPositivo;

    // Muestro informacion
    document.write(
    "A- Cantidad de numero pares: " + cantidadNumeroPar +
    "B- Cantidad de numeros impares: " + cantidadNumeroImpar +
    "C- Cantidad de ceros: " + cantidadCeros +
    "D- Promedio de todos los números positivos: " + promedioNumeroPositivo +
    "E- Suma de todos los números negativos: " + acumuladorNumeroNegativoIngresado +
    "F- Numero máximo: " + numeroMax + " y letra del numero maximo: " + letraNumeroMax +
    "Numero minimo: " + numeroMin + " y letra del numero minimo: " + letraNumeroMin
    )
}
