import {
    firstName, lastName,
    firstColor, secondColor
} from './destructing';

describe('Destructuring an Object', () => {
    it('should correctly destructure the object', () => {
        expect(firstName).toEqual('John');
        expect(lastName).toEqual('Doe');
    });
});


describe('Destructuring an Array', () => {
    it('should correctly destructure the array', () => {
        expect(firstColor).toEqual('red');
        expect(secondColor).toEqual('green');
    });
});