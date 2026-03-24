export class Homepage {
  static #selector = "app-root";
  static render() {
    const el: HTMLElement | null = document.querySelector(Homepage.#selector);

    console.log(Homepage.#selector);
    console.dir("root", el);

    const newElement = new Homepage();
    el.replaceWith(newElement.#element);
    customElements.define(Homepage.#selector, Homepage);
  }


  #template!: string;
  #element!: HTMLElement;

  private constructor() {
    this.#setTemplate();
    this.#setElement();
  }


  #setTemplate() {
    this.#template = /* HTML */
     `    <main>
        <p>1 2 3 54 56 7 7 78 8 9 9</p>
        <app-counter counterId="1"></app-counter>
        <app-counter counterId="2"></app-counter>
        <app-counter counterId="3"></app-counter>
    </main>
    <app-footer>&copy root℗</app-footer>`
  }


  #setElement() {
    this.#element.innerHTML = this.#template;
  }
}
