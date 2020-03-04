
function sumatorio(i) {
    return new Promise(resolve => {
        setTimeout(() => {
            let total = i;
            while (i > 0) {
                i = i - 1;
                total += i;
            }
            resolve(total);
        }, 1000);
    });
}

async function sumAsync() {
    //recogemos datos del input
    let entrada = document.getElementById("entrada");
    let i = parseInt(entrada.value);

    //await nos proporciona el resultado de la funcion asíncrona antes de continuar
    const result = await sumatorio(i);

    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `El resultado del auto sumatorio es: ${result}`;
}
