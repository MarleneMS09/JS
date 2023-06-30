"use strict"



var persona = {nombre: 'Marlene', twitter: 'Marlene MS'};//JSON

/*function personas (string) {
    prompt('inserta un nombre');
    prompt('inserta una red social');
} console.log(personas);  practica */

var personas = [
    {nombre: 'Hugo', twitter: 'DcHugo'},
    {nombre: 'Rebeca', twitter: 'Rebek'},
    {nombre: 'Josue', twitter: 'Josu0'}
]
/*Lo anterior es un array o arreglo JSON*/


//convertir un objeto en una cadena de texto
var personaJson = JSON.stringify(persona);
//la funcion entiende la cadenda de texto anterior, y lo recompone 
var nuevaPersona = JSON.parse(personaJson)