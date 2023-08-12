import { duplicate } from './duplicate';

test('duplicate function', () => {
    const input = [1, 2, 3, 4, 5];
    const result = duplicate(input);
    expect(result).toEqual([...input, ...input]);
});
