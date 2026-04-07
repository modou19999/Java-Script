/** @format */

// class - constructor - this - method
// {
//   // class
//   // Qué es: palabra clave para definir una clase, que es un “molde” para crear objetos.

//   // 1 básico (Usuario puede ser x o como quieras llamarlo)

//   class Usuario {
//     // constructor
//     // Qué es: método especial que se ejecuta automáticamente al crear un objeto con new.
//     // Sirve para inicializar propiedades.
//     constructor(name, age) {
//       // this
//       // Qué es: referencia al objeto actual.
//       // Dentro de la clase, this se refiere al objeto que se está creando o usando.
//       this.name = name;
//       this.age = age;
//     }

//     // method
//     // Qué es: función dentro de la clase que define un comportamiento del objeto.
//     saludar() {
//       console.log(`Hola bienvenido ${this.name}`);
//     }
//   }

//   // new
//   // Qué es: palabra clave que crea una instancia de la clase (un objeto nuevo).

//   const user1 = new Usuario("Sergio");
//   const user2 = new Usuario("Elena");
//   const user3 = new Usuario("Lucia");
//   const user4 = new Usuario("Lorena");
//   const user5 = new Usuario("Jordi");

//   user1.saludar();
//   user2.saludar();
//   user3.saludar();
//   user4.saludar();
//   user5.saludar();
// }
// // básico (class - constructor - this - method)
// {
//   // conjunto class

//   class Marca {
//     // constructor
//     constructor(name, creator, address) {
//       this.name = name;
//       this.creator = creator;
//       this.address = address;
//     }

//     // method
//     saludar() {
//       console.log(`Bienvenido a ${this.name}`);
//     }
//   }

//   // new
//   const marca1 = new Marca(`Gym Aesthe`);

//   marca1.saludar();
// }
// // eje1
// {
//   // eje1
//   class Producto {
//     constructor(nombre, precio) {
//       this.nombre = nombre;
//       this.precio = precio;
//     }

//     descuento() {
//       console.log(
//         `DESCUENTO 10% de nuestros nuevos ${this.nombre}, precio: ${this.precio}$`,
//       );
//     }
//   }

//   const producto1 = new Producto("Zapatillas", "100");

//   producto1.descuento();
// }

// Sub class
{
  // class
  class Producto {
    // constructor
    constructor(nombre, precio, stock) {
      // this
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock; // cantidad disponible
      this.oferta = false; // si esta en oferta
    }

    // method
    // método para aplicar descuento
    aplicarDescuento(porcentaje) {
      this.precio = this.precio - (this.precio * porcentaje) / 100;
      console.log(`Nuevo precio de ${this.nombre}: ${this.precio}`);
    }

    // método para mostrar información
    mostrarInfo() {
      console.log(
        `Producto: ${this.nombre}, precio: ${this.precio}$, Stock: ${this.stock}, Oferta: ${this.oferta}`,
      );
    }

    // método para marcar como oferta
    ponerEnOferta() {
      this.oferta = true;
      console.log(`${this.nombre}, ahora esta en oferta`);
    }

    //método para añadir stock
    añadirStock(cantidad) {
      this.stock += cantidad;
      console.log(`Stock de ${this.nombre} actualizado ${this.stock}`);
    }
  }

  // sub class
  // extends
  class Electrodoméstico extends Producto {
    constructor(nombre, precio, stock, marca) {
      // super se pone siempre que es una sub class
      super(nombre, precio, stock); // hereda propiedades de Producto
      this.marca = marca;
    }

    // método extra
    garantía(meses) {
      console.log(`${this.nombre} de la marca ${this.marca} tiene ${meses} `);
    }
  }

  // Crear instancias
  const televisor = new Electrodoméstico("Smart TV", 500, 10, "SAMSUNG");
  const licuadora = new Electrodoméstico("Licuadora", 80, 5, "Oster");

  // usar method
  televisor.mostrarInfo();
  televisor.aplicarDescuento(10);
  televisor.ponerEnOferta();
  televisor.garantía(24);

  licuadora.mostrarInfo();
  licuadora.añadirStock(3);
  licuadora.ponerEnOferta();
  licuadora.garantía(12);
}

// privado
{
  class Producto {
    // propiedades privadas
    #nombre;
    #precio;
    #stock;
    #oferta;

    // constructor
    constructor(nombre, precio, stock, oferta) {
      // this con privacidad
      this.#nombre = nombre;
      this.#precio = precio;
      this.#stock = stock;
      this.#oferta = oferta;
    }

    // method
    aplicarDescuento(porcentaje) {
      this.#precio -= (this.#precio * porcentaje) / 100;
      return this.#precio;
    }

    mostrarInfo() {
      return `Producto: ${this.#nombre}, precio: ${this.#precio}$, stock: ${this.#stock}, oferta: ${this.#oferta}`;
    }

    ponerEnOferta() {
      this.#oferta = true;
      return `${this.#nombre} ahora esta en oferta`;
    }

    añadirStock(cantidad) {
      if (cantidad <= 0) return "Cantidad invalida";
      this.#stock += cantidad;
      return this.#stock;
    }
  }
}
