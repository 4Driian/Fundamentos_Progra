//5.	Desarrollo un programa en JavaScript que nos permita leer dos números entero y 
//muestre la división del primer número entre el segundo. Recordar que la división entre 0 da un error.
let n1 = 0;
let n2 = 5;
let division;

division = n1 / n2;

if(division != 0){
    console.log("El resultado es:",division);
}else{
    console.log("NO SE PUEDE DIVIDIR ENTRE 0.");
}
