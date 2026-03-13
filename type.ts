// Polimorfismo por herencia 
//Polimorfismo = mismo método, distinto comportamiento.

abstract class Vehicle {
  #speed!: number;

  constructor() {
    this.#speed = 0;
  }
  stop(): void {
    // implementation
    this.#speed = 0;
    console.log(this.#speed);
  }
  increaseSpeed(value: number) {
    if(value < 0){}
    this.#speed;
  }
  abstract move(): void;
}

// extends e implement
//extends significa heredar de otra clase o extender un tipo.
//implements significa implementar una interfaz. La clase está obligada a cumplir el contrato de la interfaz.
class Car extends Vehicle {
  move(): void {
    //
    this.increaseSpeed;
  }
}

class Moto extends Vehicle {
  move(): void {
    //
  }
}

const obj1 = new Moto();
const obj2 = new Moto();

obj1.move();
obj2.move();
obj1.move();
obj2.move();
