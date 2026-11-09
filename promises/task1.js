function printWithDelay(text, delayMs) {
    if (typeof delayMs !== 'number' || delayMs < 0) {
        console.error('Помилка: Кількість мілісекунд має бути додатним числом');
        return;
    }

    setTimeout(() => {
        console.log(text);
    }, delayMs);
}

console.log('Wait for start...');

printWithDelay('Hello, world!', 2000);

printWithDelay('First fast message', 500);