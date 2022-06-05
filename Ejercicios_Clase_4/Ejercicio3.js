//3.	Desarrollo un programa en JavaScript que calcule la pendiente de una recta que pasa por dos puntos.
let punto_A = [-10,8];
let punto_B = [5,-6]
let pendiente = 0;

//

for(let i = 0; i <= punto_A.length && i <= punto_B.length; i++){
    pendiente = (punto_B[1] - punto_A[1]) / (punto_B[0] - punto_A[0]);
}
console.log("El resultado de la pendiente es:", pendiente);