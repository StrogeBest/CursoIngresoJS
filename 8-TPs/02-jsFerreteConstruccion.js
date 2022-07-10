/*
Javier Vilchez
Div E
Trabajo Practico Ejercicio 2

2. Para el departamento de Construcción:
    A. Mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
    B. Mostrar la cantidad de alambre a comprar si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
    C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let cantidadAlambres;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);
    
    perimetro = 2 * (largo + ancho);
    
    cantidadAlambres = perimetro * 3;

    alert("Cantidad de alambres a comprar: " + cantidadAlambres);
}

function Circulo () 
{
	let radio;
    let perimetro;
    let cantidadAlambres;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = 2 * 3.14 * radio;
    
    cantidadAlambres = perimetro * 3;

    alert("Cantidad de alambres a comprar: " + cantidadAlambres);
}

function Materiales () 
{
    let largo;
    let ancho;
	let area;
    let cantidadCemento;
    let cantidadCal;

    largo = document.getElementById("txtIdLargo").value;
    largo = parseInt(largo);
    
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseInt(ancho);

    area = largo * ancho;

    cantidadCemento = area * 2;
    cantidadCal = area * 3;

    alert("Se necesitan  " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsas de cal");
}