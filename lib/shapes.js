class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
 export class Triangle extends Shape {
    render() {
      // SVG for an equilateral triangle centered in the viewbox
      return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
  }
  
 export class Square extends Shape {
    render() {
      // SVG for a square centered in the viewbox
      // Note: Adjust the x, y, width, and height as needed
      return `<rect x="100" y="75" width="100" height="100" fill="${this.color}" />`;
    }
  }
  
 export class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  