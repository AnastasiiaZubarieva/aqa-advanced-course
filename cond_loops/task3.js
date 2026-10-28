import chalk from "chalk";
const number = 5
console.log('For:')
for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(chalk.blue(`${number} x ${i} = ${result}`));
}
console.log('While:')
let i = 1
while (i <= 10) {
    const result = number * i;
    console.log(chalk.blue(`${number} x ${i} = ${result}`));
    i++;
}