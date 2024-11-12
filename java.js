let contador = 0;
 let numero1 = 3;
 let numero2 = 5;
let ingredientes = ['mantequilla', 'azúcar', 'vainilla', 'harina', 'huevo'];
 let alumno = "Agustín García del Pozo";
let result01 = 27;
let result02 = 0;
result02 += numero1;
let result03 = (contador+1);
let result04 = (result01+result02);
let result05 = (result01%numero1);
let result06 = (result04<=numero1);
let result07 = (contador>0 && contador<10);
let result08 = typeof result07;
let result09 = ingredientes[0]+","+ingredientes[1]+","+ingredientes[2];
let result10 =ingredientes.length;
let result11 =ingredientes[ingredientes.length -1].length;
let result12 = alumno.toUpperCase().indexOf("GARCÍA")>0;
let result13 = alumno.slice(0,alumno.indexOf(" "));

let palabra = " ";
 do {
  for(let i = 1; i <= 3; i++){
  palabra = prompt("CONTRASEÑA:");
  if(palabra.toLowerCase() === "patata")
    {
      alert("CORRECTO");
      break;
    }
    else 
    {
    alert("ERROR");
    }
  }
  
}
while(palabra.toLowerCase()!== "patata");

document.writeln(result01);document.writeln("<br>");
document.writeln(result02);document.writeln("<br>");
document.writeln(result03);document.writeln("<br>");
document.writeln(result04);document.writeln("<br>");
document.writeln(result05);document.writeln("<br>");
document.writeln(result06);document.writeln("<br>");
document.writeln(result07);document.writeln("<br>");
document.writeln(result08);document.writeln("<br>");
document.writeln(result09);document.writeln("<br>");
document.writeln(result10);document.writeln("<br>");
document.writeln(result11);document.writeln("<br>");
document.writeln(result12);document.writeln("<br>");
document.writeln(result13);document.writeln("<br>");
 // result01 contiene el valor numérico "27";
// result02 contiene el resultado de añadir a result02 el valor de la variable numero1;
// result03 contiene el valor de contador incrementado en 1;
// result04 almacena la suma de numerol y numero2; // result05 almacena el resto de dividir result01 entre numerol;
// result06 indica si es cierto o no que result04 es menor o igual a numerol; // result07 indica si el contador se ha incrementado y su valor en menor de 10;
// result08 guarda el tipo de la variable result07;
// result10 guarda el tamaño del array ingredientes;
// result09 contiene una cadena de caracteres con los tres primeros elementos de ingredientes separados por comas;
// result11 guarda el tamaño del último ingrediente del array; 12 // result12 indica (true o false) si el alumno se apellida garcia;
// result13 almacena el texto que haya hasta el primer espacio en alumno;