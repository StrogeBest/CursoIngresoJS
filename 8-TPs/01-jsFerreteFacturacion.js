/*
Javier Vilchez
Div E
Trabajo Practico Ejercicio 1

1.	Para el departamento de facturación:
    A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
    B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
    C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
    let resultado;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);
    
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert("La suma total es: " + resultado);
}

function Promedio ()
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);
    
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);
    
    resultado = (precioUno + precioDos + precioTres) / 3;
    
    alert("El promedio es: " + resultado);
}

function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let precioTotal;
    let precioFinal;
    let iva;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioUno = parseInt(precioUno);
    
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioDos = parseInt(precioDos);
    
    precioTres = document.getElementById("txtIdPrecioTres").value;
    precioTres = parseInt(precioTres);
    
    precioTotal = precioUno + precioDos + precioTres;

    iva = (21 / 100) * precioTotal;

    precioFinal = precioTotal + iva;

    alert("Precio total: " + precioFinal);
}