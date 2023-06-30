"use strict"

//Condición IF

var datoA = 10;
var datoB= 20;
var resultado = "Sin datos";

if (datoA > datoB) {
    resultado= "La condición se cumplió";
} else if  (datoB==datoA) {
    resultado= "Segunda evaluación verdadera";
}
else {
    resultado= "La condición no se cumplió";
}
console.log ("El resultado de la evaluación if.else es ", resultado); //arroja el primer texto ya que no se cumple la función 

