function sum(a, b) {
    return a + b;
}

test('suma 2 + 3 y devuelve 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('suma 10 + 5 y devuelve 15', () => {
    expect(sum(10, 5)).toBe(15);
});