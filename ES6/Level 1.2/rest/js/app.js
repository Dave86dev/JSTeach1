let elem = ["Juan", "Vicente", "Ana", "Antonio", "Isabel", "Marcos", "Ingrid"];

//Pasamos el array elem en modalidad rest a la función
rest(...elem);

function rest(...elem) {
    let elementText = "";

    let nodoShow = document.getElementById("resultado");
    const newElement = document.createElement("p");
    
    //elem.length hace referencia al número de elementos que hay en la variable recibida por parámetro ...elem 
    for (let i = 0; i < elem.length; i++) {
        elementText = document.createTextNode(`${elem[i]} `);
        newElement.appendChild(elementText);
        nodoShow.appendChild(newElement);
    }
}
