/* 
Javier Vilchez
Div E
Parcial 2018 Ejercicio 9

Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
    a) La cantidad de temperaturas pares.
    b) La marca del producto más pesado
    c) La cantidad de productos que se conservan a menos de 0 grados.
    d) El promedio del peso de todos los productos.
    f) El peso máximo y el mínimo.
*/

function mostrar()
{
    // Declaro variables
    let marcaProducto;
    let pesoProducto;
    let temperatura;

    let cantidadTemperaturasPares = 0;
    let marcaProductoMasPesado;
    let cantidadProductosMenosCeroGrados = 0;
    let acumuladorPesoProducto = 0;
    let cantidadPesoProducto = 0;
    let pesoProductoMax;
    let pesoProductoMin;
    let promedio;

    let respuesta = true;
    let banderaA = 0;
    let banderaE = 0;

    while (respuesta) {
        // Pido datos
        marcaProducto = prompt("Ingrese la marca del producto");

        pesoProducto = parseInt(prompt("Ingrese el peso del producto (entre 1 y 100)"));
        while (pesoProducto < 1 || pesoProducto > 100) {
            pesoProducto = parseInt(prompt("ERROR. Ingrese el peso del producto (entre 1 y 100)"));
        }

        temperatura = parseInt(prompt("Ingrese la temperatura del producto(entre -30 y 30)"));
        while (temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("ERROR. Ingrese la temperatura del producto(entre -30 y 30)"));
        }

        // PUNTO A
        if (temperatura % 2 == 0) {
            cantidadTemperaturasPares++;
        }

        // PUNTO B
        if (!banderaA) {
            banderaA = 1;
            marcaProductoMasPesado = pesoProducto;
        }else{
            if (pesoProducto > marcaProductoMasPesado) {
                marcaProductoMasPesado = pesoProducto;
            }
        }

        // PUNTO C
        if (temperatura > 0) {
            cantidadProductosMenosCeroGrados++;
        }

        // PUNTO D
        acumuladorPesoProducto = acumuladorPesoProducto + pesoProducto;
        cantidadPesoProducto++;

        // PUNTO E
        if (!banderaE) {
            banderaE = 1;
            pesoProductoMax = pesoProducto;
            pesoProductoMin = pesoProducto;
        }else{
            // Peso Max
            if (pesoProducto > pesoProductoMax) {
                pesoProductoMax = pesoProducto;
            }

            // Peso Min
            if (pesoProducto < pesoProductoMin) {
                pesoProductoMin = pesoProducto;
            }
        }

        respuesta = confirm("¿Desea continuar?");
    }

    promedio = acumuladorPesoProducto / cantidadPesoProducto;
    document.write(
        "A- Cantidad de temperaturas pares: " + cantidadTemperaturasPares +
        "B- Marca del producto más pesado: " + marcaProductoMasPesado +
        "C- Cantidad de productos que se conservan a menos de 0 grados: " + cantidadProductosMenosCeroGrados +
        "D- Promedio del peso de todos los productos: " + promedio +
        "E- Peso maximo: " + pesoProductoMax + " Peso minimo: " + pesoProductoMin
    );
}
