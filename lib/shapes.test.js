const { Triangle, Circle, Square } = require("./shapes");

// Test  for the Triangle class
describe('Triangle', () => {
    test('renders triangle SVG correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

});

// Test for the Circle class
describe('Circle', () => {
    test('renders circle SVG correctly', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });

});

// Test for the Square class
describe('Square', () => {
    test('renders square SVG correctly', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect width="200" height="200" fill="green" />');
    });

});

