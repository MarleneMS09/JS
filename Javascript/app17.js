"use strict"

//ESTRUCTURA SWITCH  (se usa si tendremos que utilizar muchas condiciones anidadas, para darle estructura)

//Evaluación con números
var edad = 30;
var resultado = "";

switch (edad) {
    case 10:
        resultado ="La edad es de 10 años";
        break;
    case 20:
        resultado="La edad es de 20 años";
        break;
    case 30: 
        resultado="La edad es de 30 años";        
        break;
    default:
        resultado="Nigun caso coincide"; //el defacult es como el else
        break;
}

console.log("El resultado de la evaluación con números es: " , resultado);

//Evaluación con cadena de texto
var producto = "TV";

switch (producto) {
    case "TV":
        resultado = "Se eligió la TV";
        break;
    case "radio":
        resultado = "Se eligio la Radio";
        break;
    case "Telefono":
        resultado="Se eligió el teléfono";
        break;
    default: 
    resultado= "No se eligió ningún producto";
    break;
}

console.log("El resultado de la evaluación de texto es: "+ resultado);








///console.log("El resultado de la evaluación con cadena de texto  es: " , resultado)