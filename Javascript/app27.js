//Cuál de los siguientes programas en JavaScript imprime en la consola la tabla de multiplicar del número 5? Debe usar un ciclo for.
"use strict"

var mult = 0;
var numero = 5;

for (let i = 0; i < 11; i++) {
    mult = numero * i;
    console.log(numero + " * " + i + " = " + mult);
}