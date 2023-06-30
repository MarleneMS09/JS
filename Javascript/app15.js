"use strict"

var a = 1;
var b = 2;
var c = 5;

var op1 = a < b; // 1 < 2
var op2 = c <= a;   // 5 <= 1
var op3 = (a > b) != (c > a) ; //(1 < 2 ) != (5 > 1)
console.log("Op1: " + op1); //true
console.log("Op2: " + op2);   //false 
console.log("Op3: " + op3);  //true 

