export class Product extends HTMLElement {
  static #selector = "app-root";
  static render() {
    const el: HTMLElement | null = document.querySelector(Product.#selector);

    console.log(Product.#selector);
    console.dir("root", el);

    const newElement = new Product();
    el.replaceWith(newElement.#element);
    customElements.define(Product.#selector, Product);
  }

  #template!: string;
  #element!: HTMLElement;

  private constructor() {
    super();
    this.#setTemplate();
    this.#setElement();
  }

  #setTemplate() {
    this.#template =
      /* HTML */
      ` <main>
          <p>1 2 3 54 56 7 7 78 8 9 9</p>
          <app-counter counterId="1"></app-counter>
          <app-counter counterId="2"></app-counter>
          <app-counter counterId="3"></app-counter>
        </main>
        <app-footer>&copy root℗</app-footer>`;
  }

  #setElement() {
    this.#element.innerHTML = this.#template;
  }
}
