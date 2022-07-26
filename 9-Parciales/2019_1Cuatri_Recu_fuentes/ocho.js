/* 
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantida de rojos
    b) La cantidad de rojos con precio mayor a 5000
    c) La cantidad de vehiculos con precio inferior a 5000
    d) El promedio de todos los vehiculos ingresados.
    e) El mas caro y su color
*/

function mostrar()
{
    // Declaro variables
    let color;
    let valor;

    let cantidadColorRojo = 0;
    let cantidadColorRojoPrecioMayor5000 = 0;
    let cantidadColorRojoPrecioMenor5000 = 0;
    let cantidadVehiculos = 0;
    let promedioVehiculos;
    let vehiculoMasCaro;
    let colorVehiculoMasCaro;

    let respuesta = true;
    let bandera = 0;

    while (respuesta) {
        // Pido datos
        color = prompt("Ingrese el color (rojo, verde o amarillo)");
        while (color != "rojo" && color != "verde" && color != "amarillo") {
            color = prompt("ERROR. Ingrese el color (rojo, verde o amarillo)");
        }

        valor = parseInt(prompt("Ingrese el precio entre 0 y 10000"));
        while (valor < 0 || valor > 10000) {
            valor = parseInt(prompt("Error. Ingrese el precio entre 0 y 10000"));
        }

        // PUNTO A
        if (color == "rojo") {
            cantidadColorRojo++;

            // PUNTO B
            if (valor > 5000) {
                cantidadColorRojoPrecioMayor5000++;
            }
        }
        
        // PUNTO C
        if (valor < 5000) {
            cantidadColorRojoPrecioMenor5000++;
        }

        // PUNTO D
        cantidadVehiculos++;

        // PUNTO E
        if (!bandera) {
            vehiculoMasCaro = valor;
            colorVehiculoMasCaro = color;
            bandera = 1;
        }else{
            if (valor > vehiculoMasCaro) {
                vehiculoMasCaro = valor;
                colorVehiculoMasCaro = color;
            }
        }

        respuesta = confirm("¿Desea continuar?");
    }

    promedioVehiculos = cantidadVehiculos / cantidadVehiculos;

    document.write(
        "A- Cantidad de vehiculos color rojo: " + cantidadColorRojo + "<br>" +
        "B- Cantidad de vehiculos rojos con precio mayor a 5000: " + cantidadColorRojoPrecioMayor5000 + "<br>" +
        "C- Cantidad de vehiculos con precio inferior a 5000: " + cantidadColorRojoPrecioMenor5000 + "<br>" +
        "D- Promedio de todos los vehiculos: " + promedioVehiculos + "<br>" +
        "E- El vehiculo mas caro costo: " + vehiculoMasCaro + "<br>" +
        "Color del vehiculo mas caro: " + colorVehiculoMasCaro
    );
}