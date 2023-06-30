"use strict"

var a = 8;
var b = 5;
var c = 9;

var d = a < b;
var e = b > c;
var f = (c+3) > a;

var op1 = d && e;
var op2 = f && e;
var op3 = (d || f) && (!e || f);
console.log("Op1: " + op1); //false
console.log("Op2: " + op2); //false
console.log("Op3: " + op3); //true