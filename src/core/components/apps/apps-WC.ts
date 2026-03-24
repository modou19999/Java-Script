export class App extends HTMLElement {
  static #selector = "app-root";
  static render() {
    customElements.define(App.#selector, App);
  }

  #template!: string;

  private constructor() {
    super();
    this.#setTemplate();
    this.#setElement();
  }

  #setTemplate() {
    this.#template = /*html*/ `
    <main>
        <p>1 2 3 54 56 7 7 78 8 9 9</p>
        <app-counter counterId="1"></app-counter>
        <app-counter counterId="2"></app-counter>
        <app-counter counterId="3"></app-counter>
    </main>
    `;
  }

  #setElement() {
    this.innerHTML = this.#template;
  }
}
