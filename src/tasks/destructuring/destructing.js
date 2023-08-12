const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

// Destructuring an object
export const { firstName, lastName } = person;

const colors = ['red', 'green', 'blue'];

// Destructuring an array
export const [firstColor, secondColor] = colors;