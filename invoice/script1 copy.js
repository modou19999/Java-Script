/** @format */

{
  // Empresa, (nombre, direccion, telefono, nif)
  // cliente = empresa
  //Elementos, (descripcion, precio, cantidad)
  //Factura, (importe total, tipo de iva, forma de pago)
  //////privada
  // 2 metodos publicos
}

// empresa cliente
class Empresa {
  constructor(nombre, direccion, telefono, NIF) {
    TransitionEvent.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.NIF = NIF;
  }
}

//Elementos, (descripcion, precio, cantidad)
class Elementos {
  constructor(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

//Factura, (importe total, tipo de iva, forma de pago)
class Factura {
  constructor(Total, IVA, FormaDePago) {
    this.Empresa = empresa;
    this.Elementos = elementos;
    this.IVA = IVA;
    this.FormaDePago = FormaDePago;
    this.Total = 0;
  }

  calcularTOtalImporte() {
    let subTotal = 0;

    for (let i = 0; i < this.Elementos.length; i++) {
      subTotal += this.Elementos[i].precio * this.Elementos[i].cantidad;
    }
    this.Total = subTotal + subTotal + this.IVA;
  }
}
