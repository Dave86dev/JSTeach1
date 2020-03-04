
//Generamos número aleatorio
let random_cpu = parseInt(Math.random() * (11 - 1) + 1);

console.log(random_cpu);

//Inicialización intentos a 0
let intentos = 0;


//Funcion que evalua si ha acertado y el número de intentos
function evaluar (){

        let elementText = "";
        
        let entrada = document.getElementById('entrada');
        let q = entrada.value;

        let nodoShow = document.getElementById('resultado');
        const newElement = document.createElement('p');

        
        if(q != random_cpu){
            console.log("PIERDES");
            intentos++;
            elementText = document.createTextNode(`El número que me has dicho es ${q} y no es el correcto ..llevas ${intentos} intentos`);

        }else{
            console.log("GANAS");
            elementText = document.createTextNode(`El número que me has dicho es ${q} , es CORRECTO y el numero de intentos ha sido ${intentos}`);

            //Deshabilitamos el botón Evaluar
            document.getElementById("b").disabled= true;

            //Deshabilitamos el input entrada
            document.getElementById("entrada").disabled = true;
            
            //Ocultamos el mensaje que nos pide un número
            document.getElementById("mensaje").style.visibility = "hidden";
            
        }

        newElement.appendChild(elementText);
        nodoShow.appendChild(newElement);

        //Limpieza de valor + posicionamiento de foco en entrada
        entrada.value="";
        entrada.focus();
}
