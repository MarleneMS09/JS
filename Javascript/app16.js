"use strict"

//Condición IF

var datoA = 110;
var datoB= 20;
var datoC= 5;
var resultado = "Sin datos";

if (datoA > datoB) {

    resultado = "La condición se cumplió";
 if (datoC < datoB) {
    resultado = "Evaluación anidada verdadera";
} else {
    resultado = "No se cumplió la evaluación anidada";
} 
} else {
    resultado= "La condición no se cumplió";
}
console.log ("El resultado de la evaluación anidada es: ", resultado); //arroja el primer texto ya que no se cumple la función 

