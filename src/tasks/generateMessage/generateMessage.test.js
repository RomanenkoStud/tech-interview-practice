import {generateMessage} from './generateMessage';

describe('Generating a String with ES6 Template Literals', () => {
    it('should generate the expected message', () => {
        const name = 'Alice';
        const age = 28;
        const expectedMessage = 'Hello, my name is Alice and I am 28 years old.';
        
        const message = generateMessage(name, age);
        expect(message).toEqual(expectedMessage);
    });
});