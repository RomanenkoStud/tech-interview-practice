import {jest} from '@jest/globals';
import { fizzBuzz } from './fizzbuzz';

describe('fizzBuzz', () => {
    let originalLog; // To capture the console.log output

    beforeEach(() => {
        originalLog = console.log;
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = originalLog;
    });

    it('should output numbers 1 to 100 correctly', () => {
        fizzBuzz();
        
        // Verify that console.log was called 100 times
        expect(console.log).toHaveBeenCalledTimes(100);

        // Verify the individual outputs for some test cases
        expect(console.log).toHaveBeenCalledWith(1);
        expect(console.log).toHaveBeenCalledWith(2);
        expect(console.log).toHaveBeenCalledWith('fizz');
        expect(console.log).toHaveBeenCalledWith('buzz');
        expect(console.log).toHaveBeenCalledWith('fizzbuzz');
    });

});