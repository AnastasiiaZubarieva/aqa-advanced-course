function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP помилка (todo)! Статус: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Помилка при завантаженні todo:', error.message);
            throw error; 
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP помилка (user)! Статус: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Помилка при завантаженні user:', error.message);
            throw error;
        });
}

const allPromise = Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('--- Результат Promise.all ---');
        console.log('Todo object:', todo);
        console.log('User object:', user);
        return { todo, user };
    })
    .catch(error => {
        console.error('Помилка в Promise.all:', error.message);
    });


const racePromise = Promise.race([fetchTodo(), fetchUser()])
    .then(firstResult => {
        console.log('--- Результат Promise.race (найшвидший запит) ---');
        console.log('First resolved object:', firstResult);
        return firstResult;
    })
    .catch(error => {
        console.error('Помилка в Promise.race:', error.message);
    });