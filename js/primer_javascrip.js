/*var a=5, nombre="Pedro";
alert(nombre+ " tiene la nota "+a);+*/

var numero1 =prompt("ingrese numero 1");
var numero2 =prompt("ingrese numero 2");
/*var numero1 =8;
var numero2 =5;*/
var resultado= parseInt(numero1)+parseInt(numero2);
/*alert("el resultado de la suma es "+resultado);*/
/* voy a adicionarle a la pagina web el resultado en una etiqueta h1*/

document.write("<h5 style='text-align: center'>El resultado de la suma es "+resultado+"</h5>");
document.write("</br></br>");

document.write("<h5 class='alinear'>El resultado de la suma es "+resultado+"</h5>");

var resultado2="wq";
var numero4 = parseInt(resultado2);
document.write("<h5 class='alinear'>El resultado dos de la suma es "+numero4+"</h5>");
document.write("</br></br>");


var materias = ["quimica", "fisica", 8, true, "matematicas"];

materias[materias.length]="español";

materias.push("EF", "Idiomas");

/*materias.pop();*/

document.write("<div class='caja_materias'>")
document.write("<p>"+materias[0]+"</p>");
document.write("<p>"+materias[1]+"</p>");
document.write("<p>"+materias[2]+"</p><br />");
document.write("<p>"+materias[3]+"</p><br />");
document.write("<p>"+materias[4]+"</p><br />");
document.write("<p>"+materias[5]+"</p><br />");
document.write("<p>"+materias[6]+"</p><br />");
document.write("<p>"+materias[7]+"</p><br />");
document.write("</div>")







var numero3=5;