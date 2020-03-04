
let promesa = i =>
    new Promise((resolve, reject) => {
        if (!i) {
            return reject("dame un número");
        } else if (i < 0) {
            return reject("dame un número positivo please!");
        }

        let total = i;
        while (i > 0) {
            i = i - 1;
            total += i;
        }
        resolve(total);
    });

function sumPromise() {
    //recogemos datos del input
    let entrada = document.getElementById("entrada");
    let i = parseInt(entrada.value);

    //llamada a la promesa, pasamos el numero introducido por parámetro
    promesa(i)
        .then(result => {
            let mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = `El resultado del auto sumatorio es: ${result}`;
        })
        .catch(error => {
            let mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = error;
        });
}
