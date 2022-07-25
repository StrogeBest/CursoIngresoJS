/* 
Javier Vilchez
Div E
Parcial 2018 Ejercicio 7

Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
    a) El promedio de las notas totales.
    b) La nota más baja y el sexo de esa persona.
    c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
    // Declaro variables
    let notaIngresada;
    let sexoIngresado;
    let contador;
    let promedio;
    let notasTotales;
    let notaMasBaja;
    let sexoNotaMasBaja;
    let cantidadVaronesNotaSeis;

    contador = 0;
    notasTotales = 0;
    cantidadVaronesNotaSeis = 0;

    while (contador < 5) {
        // Pedir y validar (entre 0 y 10) nota 
        notaIngresada = prompt("Ingrese una nota entre 0 y 10")
        notaIngresada = parseInt(notaIngresada);
        while (notaIngresada < 0 || notaIngresada > 10) {
            notaIngresada = prompt("ERROR. Ingrese una nota entre 0 y 10")
            notaIngresada = parseInt(notaIngresada);
        }

        // Pedir y validar ("f" o "m") sexo 
        sexoIngresado = prompt("Ingrese su sexo f(femenino) o m(masculino)");
        while (sexoIngresado != "f" && sexoIngresado != "m") {
            sexoIngresado = prompt("ERROR. Ingrese su sexo f(femenino) o m(masculino)");
        }

        // PUNTO A - Acumulador de las notas
        notasTotales = notasTotales + notaIngresada;
    
        // PUNTO B
        if (contador == 0) {
            notaMasBaja = notaIngresada;
            sexoNotaMasBaja = sexoIngresado;
        }else{
            if (notaIngresada < notaMasBaja) {
                notaMasBaja = notaIngresada;
                sexoNotaMasBaja = sexoIngresado;
            }
        }

        // PUNTO C
        if (notaIngresada >= 6) {
            cantidadVaronesNotaSeis++;
        }

        contador++;
    }

    // PUNTO A
    promedio = notasTotales / 5;
    alert("Promedio de las notas totales: " + promedio);
    
    // MUESTRO EL MENSAJE DEL PUNTO B
    alert("Nota mas baja: " + notaMasBaja + " Sexo de la nota mas baja: " + sexoNotaMasBaja);

    // MUESTRO EL MENSAJE DEL PUNTO C
    alert("Cantidad de varones con nota mayor o igual a 6: " + cantidadVaronesNotaSeis);
}