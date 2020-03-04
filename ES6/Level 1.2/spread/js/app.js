
//Declaracion inicial del array numbers
const numbers = [5,10,9];

//Construcción de la funcion operadora
function sum(x,y,z){
    return x + y + z;
}

//Uso de spread al pasar el argumento a la función sum
let elementText = document.createTextNode(sum(...numbers));

//Muestreo en el DOM
let nodoShow = document.getElementById("resultado");
const newElement = document.createElement("p");

newElement.appendChild(elementText);
nodoShow.appendChild(newElement);
