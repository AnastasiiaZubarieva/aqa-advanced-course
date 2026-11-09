async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error (todo)! Status: ${response.status}`);
        }
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('Error fetching todo:', error.message);
        throw error;
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error(`HTTP error (user)! Status: ${response.status}`);
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error;
    }
}

async function main() {
    try {
        // --- Promise.all ---
        // Чекає завершення УСІХ промісів та повертає масив результатів [todo, user]
        const allResults = await Promise.all([fetchTodo(), fetchUser()]);
        const [todo, user] = allResults; // Деструктуризація результатів

        console.log('--- Результат Promise.all ---');
        console.log('Todo object:', todo);
        console.log('User object:', user);

        // --- Promise.race ---
        // Повертає результат ТОГО промісу, який виконався ШВИДШЕ за інші
        const raceResult = await Promise.race([fetchTodo(), fetchUser()]);

        console.log('--- Result of Promise.race (fastest) ---');
        console.log('First resolved object:', raceResult);

    } catch (error) {
        console.error('Error during main() execution:', error.message);
    }
}

main();