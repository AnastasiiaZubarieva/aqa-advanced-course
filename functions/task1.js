// Function Declaration
function rectangleArea1(width, height) {
    return width * height;
}

// Function Expression
const rectangeArea2 = function(width, height) {
    return width * height;
}

// Arrow Function
const rectangleArea3 = (width, height) => width * height;

console.log(rectangleArea1(5, 10));
console.log(rectangeArea2(5, 10));
console.log(rectangleArea3(5, 10));