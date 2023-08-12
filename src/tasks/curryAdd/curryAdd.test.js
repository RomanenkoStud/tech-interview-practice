import {add} from './curryAdd'; // Update the path to your add.js file

describe('add function', () => {
    it('should return the sum of two arguments', () => {
        expect(add(1, 2)).toBe(3);
    });

    it('should return a function when called with one argument', () => {
        const result = add(1);
        expect(typeof result).toBe('function');
    });

    it('should return the sum when curried with a single argument', () => {
        const curriedAdd = add(1);
        expect(curriedAdd(5)).toBe(6);
    });
});