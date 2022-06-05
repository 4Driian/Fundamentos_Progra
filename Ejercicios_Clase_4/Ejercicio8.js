//8.	Desarrollo un programa en JavaScript que nos permita leer un número entero y determiné si es un número terminado en 4.
let n1 = 60;
let respuesta = n1 % 10;
if(respuesta==4){
    console.log("El número termina en 4",n1);
}else{
    console.log("El número NO termina en 4");
}