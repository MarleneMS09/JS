"use strict"

//Operadores Lógicos


var datoA= 10;
var datoB=20;

//Operador y o AND
var and = (datoA > 10 && datoB> 10);
console.log('El resultado de la evaluación AND es: ' + and);
//aroja false porque dato a no es mayor que 10 y deben cumplirse ambas condiciones 

//Operador O u OR
var or=(datoA > 10 || datoB > 10);
console.log('El resultado de la evaluación OR es: ' + or);
//con que se cumpla una condición arrojara true

//Operador de negación o NOT
var not= !(datoA > 10 );
console.log('El resultado de la evaluación NOT es: ' + not);
//contrariamos el resultado así que da false (ya que el dato A no es mayor a 10)