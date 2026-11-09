const averageGrade = 85;
let grade;
if (averageGrade < 60) {
    grade = "Незадовільно";
} else if (60 <= averageGrade && averageGrade <= 70){
    grade = "Задовільно";
} else if (71 <= averageGrade && averageGrade <= 80) {
    grade = "Добре";
} else if(81 <= averageGrade && averageGrade <= 90) {
    grade = "Дуже добре";
} else if (91 <= averageGrade && averageGrade <= 100) {
    grade = "Відмінно";
}

console.log(grade);
