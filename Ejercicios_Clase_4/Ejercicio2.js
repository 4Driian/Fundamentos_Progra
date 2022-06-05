//2.	Desarrollo un programa en JavaScript que calcule el volumen de un cilindro dados su altura y diámetro.
let altura = 50;
let volumen;
let pi = 3.14;
let radio = 100;

volumen = pi * Math.pow(radio,2) * altura;
console.log("El volumen es:", volumen);