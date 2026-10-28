function divide (numerator, denominator) {
    if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Invalid input: Please provide valid numbers');
    }
    return numerator / denominator;
}


const testCases = [
    [10, 0],
    [10, 'two'],
    [10, 2],
    ['ten', 2]
];

for (const [a, b] of testCases) {
    try {
        console.log(`divide(${a}, ${b}) =`, divide(a, b));
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Execution completed');
    }
}