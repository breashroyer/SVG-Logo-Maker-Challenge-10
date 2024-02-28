const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('renders SVG string', () => {
    const circle = new Circle('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});

// Test for Triangle
describe('Triangle', () => {
  test('renders SVG string', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
  });
});

// Test for Square
describe('Square', () => {
  test('renders SVG string', () => {
    const square = new Square('green');
    expect(square.render()).toEqual('<rect x="100" y="75" width="100" height="100" fill="green" />');
  });
});
