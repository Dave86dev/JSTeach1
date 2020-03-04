
/* ES6.1 Arithmetic */ 

let operaciones = {
    
    //Inicializamos la propiedad resultado a 0
    resultado: 0,

    //Funciones de operaciones aritméticas 
    suma: () => {
        //Depositamos en la propiedad resultado el resultado de la operación
        this.resultado = Number(in_x.value) + Number(in_y.value)
        //Asignamos al elemento con id "res" el contenido de la propiedad resultado
        document.getElementById("res").value = this.resultado;
    },
    resta: () => {
        this.resultado = Number(in_x.value) - Number(in_y.value)
        document.getElementById("res").value = this.resultado;
    },
    multi: () => {
        this.resultado = Number(in_x.value) * Number(in_y.value)
        document.getElementById("res").value = this.resultado;
    },
    divi: () => {
        this.resultado = Number(in_x.value) / Number(in_y.value)
        document.getElementById("res").value = this.resultado;
    }

}
