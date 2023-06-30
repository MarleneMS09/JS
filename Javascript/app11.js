"use strict"

//operadores de concatenación

var datoA= 10;
var datoB= 20;

var nombre = 'Marlene';
var apellido = 'Sanchez';

//CONCATENACION DE NUMEROS
var concatNumeros = datoA + datoB;
console.log("Los números "+ datoA+" y "+ datoB+" más usados como números concatenados hacen una suma igual a: ", concatNumeros);

//CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + " " + apellido; 
console.log("Los textos " + nombre +" y "+ apellido +" mse unen para formar: ", concatTexto);

//CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumTxt = "2"+"8";
console.log("Los números 2 y 8 usados como texto se unen para formar ", concatNumTxt);
//CONCATENACIÓN DE TEXTO Y NÚMERO
var concatTxtNum = datoA + "8";
console.log("El numero "+ datoA +" usado como número y 8 como texto se unen para formar: ", concatTxtNum);
