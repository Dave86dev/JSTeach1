
function sumCallback(cb) {

    //deshabilitamos el botón autoSuma
    document.getElementById("b").disabled = true;

    setTimeout(() => {

        //obtenemos el valor del input y lo aseveramos como numérico
        let entrada = document.getElementById("entrada");
        let i = Number(entrada.value);
        let total = i;

        while (i > 0) {
            i = i - 1;
            total += i;
        }
        //callback pasando el total como argumento
        cb(total);
    }, 1000);
}

function resultShow(total) {
    let mensaje = document.getElementById("mensaje");
    let entrada = document.getElementById("entrada");

    mensaje.innerHTML = total;
    document.getElementById("b").disabled = false;

    entrada.value="";
    entrada.focus();
}
