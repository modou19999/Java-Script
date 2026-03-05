/** @format */

{
  // Empresa, (nombre, direccion, telefono, nif)
  // cliente = empresa
  //Elementos, (descripcion, precio, cantida)
  //Factura, (importe total, tipo de iva, forma de pago)
  //////privada
  // 2 metodos publicos
}

//EMPRESA / cliente
class Empresa {
  constructor(name, address, telephon, NIF) {
    this.name = name;
    this.address = address;
    this.telephon = telephon;
    this.NIF = NIF;
  }
}

// Elementos
class Elements {
  constructor(description, price, quantity) {
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}

// factura
class Factura {
  constructor(empresa, cliente, elements, IVA, formPayment) {
    this.empresa = empresa;
    this.cliente = cliente;
    this.elements = elements;
    this.formPayment = formPayment;
    this.IVA = IVA;
    this.TotalImport = 0;
  }

  calcularTotalImport() {
    let subTotal = 0;

    for (let i = 0; i < this.elements.length; i++) {
      subTotal += this.elements[i].price * this.elements[i].quantity;
    }

    this.TotalImport = subTotal + subTotal * this.IVA;
  }

  mostrarTotalImport() {
    console.log("Total factura:", this.TotalImport);
  }

  mostrarfactura() {
    console.log("-----FACTURA-----");

    console.log("Empresa:", this.empresa.name);
    console.log("Cliente:", this.cliente.name);

    console.log("Products");
    for (let i = 0; i < this.elements.length; i++) {
      console.log(
        this.elements[i].description
          + " - "
          + this.elements[i].quantity
          + " x "
          + this.elements[i].price,
      );
    }
    console.log("IVA:", this.IVA);
    console.log("Form of Payment:", this.formPayment);
    console.log("Total Import:", this.TotalImport);
  }
}

//(nombre, direccion, telefono, nif)
let empresa = new Empresa(
  "La empresa",
  "C/San Francisco",
  "600 900 800",
  "10230235100",
);

let cliente = new Empresa(
  "Cliente",
  "C/Costa rios",
  "612 512 912",
  "60248963P",
);

let element1 = new Elements("Portatil", 900, 1);
let element2 = new Elements("Camera Sony", 3000, 1);
let element3 = new Elements("Card memory", 80, 2);

let element = [element1, element2, element3];

let factura = new Factura(empresa, cliente, element, 0.21);

factura.calcularTotalImport();
factura.mostrarTotalImport();
factura.mostrarfactura();


