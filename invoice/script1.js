class Factura {
  // propiedades privadas
  #empresa;
  #cliente;
  #elementos;
  #tipoIVA;
  #formaPago;
  #importeTotal;

  constructor(empresa, cliente, elementos, importeTotal, tipoIVA, formaPago) {
    this.#empresa = empresa;
    this.#cliente = cliente;
    this.#elementos = elementos;
    this.#tipoIVA = tipoIVA;
    this.#formaPago = formaPago;
    this.#importeTotal = 0;
  }

  //método privado para calcular el total
  #calcularTotal() {
    let subTotal = 0;
    for (let e of this.#elementos) {
      subTotal += e.precio * e.cantidad;
    }
    this.#importeTotal = subTotal + (subTotal * this.#tipoIVA) / 100;
  }

  // mostrar solo el total
  mostrarTotal() {
    this.#calcularTotal();
    console.log("Importe total de la factura: " + this.#importeTotal + " €");
  }

  // mostrar toda la factura

  mostrarFactura() {
    this.#calcularTotal();

    console.log();
  }

  //
  //     mostrarFactura() {
  //         this.#calcularTotal();

  //         console.log("=== FACTURA ===");

  //         console.log("Empresa:");
  //         console.log(this.#empresa);

  //         console.log("Cliente:");
  //         console.log(this.#cliente);

  //         console.log("Elementos:");
  //         for (let e of this.#elementos) {
  //             console.log(e.descripcion + " - Precio: " + e.precio + " - Cantidad: " + e.cantidad);
  //         }

  //         console.log("IVA: " + this.#tipoIVA + "%");
  //         console.log("Forma de pago: " + this.#formaPago);
  //         console.log("TOTAL: " + this.#importeTotal + " €");
  //     }
  // }
}
