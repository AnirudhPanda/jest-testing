const sum = require('./sum');

test('adds 5 and 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
});