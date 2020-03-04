
/*

    DECLARAMOS 2 LUCHADORES DE LA CLASE FIGHTER, CON SUS RESPECTIVAS 
    PROPIEDADES Y MÉTODOS A TU ELECCIÓN

*/

function random(min, max){
    //creacion de un número random
    return Math.floor(Math.random() * (max - min) + min);
}

class Fighter {
    constructor(name, id, fuerza, defensa, suerte, velocidad) {
        this.Vida = 300;
        this.Id = id;
        this.Name = name;
        this.Fuerza = fuerza;
        this.Defensa = defensa;
        this.Suerte = suerte;
        this.Velocidad = velocidad;
    }
    attack(enemigo) {

        let golpe = (this.Fuerza  - enemigo.Defensa);
        let velocidad = random(1, 100); //handicap de velocidad

        if (velocidad < enemigo.Velocidad) {
            golpe -= random(1, 5);
        }
        
        enemigo.Vida -= golpe;

        console.log("La fuerza del golpe ha sido: ", golpe);
    }
}

//declaration of thy 9 mighty fighters
let fighter1 = new Fighter('ANDY', '1', 40, 10, 7, 30);
let fighter2 = new Fighter('BILLY', '2', 42, 7, 8, 25);

/* 

   Simulación de ataques por console.log

   Fighter 1 vs Fighter 2

*/

//Uso del método attack de fighter1 con fighter2 como argumento
fighter1.attack(fighter2);

console.log("Después del golpe, la vida del luchador 1 es:", fighter1.Vida);
console.log("Después del golpe, la vida del luchador 2 es:", fighter2.Vida);
