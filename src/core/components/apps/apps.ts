export class App {
  static #selector = "app-root";
  static render() {
    const el = document.querySelectorAll(App.#selector) as HTMLElement;

    // guardar tipos - En este caso no es necesaria una type guard
    // if (el === null) {
    //   // esto es mala practica
    //   // throw 'Selector invalido'
    //   throw new Error("Selector invalido");
    // }
    console.log(App.#selector);
    console.dir("root", el);
    const newElement = new App();
    el.replaceWith(newElement.#element);
  }

  // #template: string
  // #element: HTMLElement;
  #template!: string;
  #element!: HTMLElement;

  private constructor() {
    this.#setTemplate();
    this.#setElement();

    // Es lo mismo que ponerlo abajo
    // this.#element = this.#serElement
  }

  // set → “establecer” o “asignar”
  // template → “plantilla” (normalmente HTML o estructura)
  #setTemplate() {
    this.#template = `<div>prueba</div>`;
  }

  // método de crear elementos
  #setElement() {
    // this.#element = document.createElement("app-root");
    // console.log(this.#element);
    this.#element.innerHTML = this.#template;
  }
}

