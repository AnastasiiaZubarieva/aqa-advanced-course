const averageGrade = 85;
let grade;

switch (true) {
    case averageGrade < 60:
        grade = "Незадовільно";
        break;
    case averageGrade <= 70:
        grade = "Задовільно";
        break;
    case averageGrade <= 80:
        grade = "Добре";
        break;
    case averageGrade <= 90:
        grade = "Дуже добре";
        break;
    case averageGrade <= 100:
        grade = "Відмінно";
        break;
    default:
        grade = "Невірні дані";
}
console.log(grade);