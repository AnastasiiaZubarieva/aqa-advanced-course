const users = [
    {name: "John", age: 30, email: "john.doe@example.com"},
    {name: "Jane", age: 25, email: "jane.doe@example.com"}
];

for (const {name, age, email} of users) {
    console.log(name, age, email);
}