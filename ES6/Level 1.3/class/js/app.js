
//HERENCIA 

//Clase Persona
class Persona {
    constructor(nombre, sexo, edad) {
        //console.log("Soy una persona");
        this.Nombre = nombre;
        this.Sexo = sexo;
        this.Edad = edad;
    }

    saludo() {
        console.log("Buenos dias");
    }

    despedida() {
        console.log("See you!");
    }
}

//La clase Programador extiende a Persona
class Programador extends Persona {
    constructor(nombre, sexo, edad) {
        super(nombre, sexo, edad);
        //propiedad de programador, sueldo en este caso
        this.sueldo = 5000;
    }

    programar() {
        console.log("Let's code");
    }

    pensar() {
        console.log("Mi dia a dia");
    }
}

function conocer() {
    
    let Rafael = new Programador('Rafael','Masculino',38);

    console.log(Rafael.Edad);
    console.log(Rafael.Nombre);
    console.log(Rafael.Sexo);
    console.log(Rafael.sueldo);

    //Métodos de Persona y Programador. 
    Rafael.saludo();
    Rafael.despedida();
    Rafael.programar();
    Rafael.pensar();
}

conocer();
