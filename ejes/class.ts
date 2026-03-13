abstract class Shape {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
}

//
export class Triangle extends Shape {
  base: number;
  height: number;

  constructor(base: number, height: number, color: string) {
    super(color); // es para la herencia y que no genere error
    this.base = base;
    this.height = height;
  }


    calculateArea(): number {
    return this.base * this.height;
  }

   calculatePerimeter(): number {
    return this.base * this.height;
  }
}

//
export class Circle extends Shape {
  radio: number;

  constructor(radio: number, color: string) {
    super(color);
    this.radio = radio;
  }
  calculateArea(): number {
    return Math.PI * this.radio ** 2
  }

   calculatePerimeter(): number {
    return Math.PI * this.radio * 2
  }
}

//
export class Square extends Shape {
  side: number;

  constructor(side: number, color: string) {
    super(color);
    this.side = side;
  }
}

//
export class Rectangle extends Shape {
  base: number;
  height: number;
  side: [number, number];

  constructor(
    base: number,
    height: number,
    side: [number, number],
    color: string,
  ) {
    super(color);
    this.base = base;
    this.height = height;
    this.side = side;
  }

      calculateArea(): number {
    return this.base * this.height;
  }

   calculatePerimeter(): number {
    return this.base * 2 + this.height * 2;
  }
}
