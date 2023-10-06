// FUNCTION


// Q no: 01
// function currDate(currentDate){
//     var currentDate = new Date();
//     return currentDate;
// }
// console.log(currDate());

// Q no: 02
// function greet(firstname, lastName){
//     var fullName = firstname + " " + lastName;
//     var greeting = "Hi! " + fullName;
//     return greeting;
// }
// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");

// var message = greet(firstName , lastName);
// console.log(message);

// Q no: 03
// function sum(firstNum, secondNum){
//     var result = firstNum + secondNum;
//     return result;
// }
// var firstNum = +prompt("Enter First Number");
// var secondNum = +prompt("Enter Second Number");
// var res = sum(firstNum, secondNum);
// console.log(res);

// Q no: 04
// function calc(num1,opr,num2){
//     if(opr === "+"){
//         var res = num1 + num2;
//     }
//     else if(opr === "-"){
//         var res = num1 - num2;
//     }
//     else if(opr === "*"){
//         var res = num1 * num2;
//     }
//     else if(opr === "/"){
//         var res = num1 / num2;
//     }
//     return res;
// }
// var num1 = +prompt("Enter First Number");
// var opr = prompt("Enter Operator");
// var num2 = +prompt("Enter Second Number");
// var result = calc(num1,opr,num2);
// console.log(result);

// Q no: 05
// function square(number) {
//     return number * number;
// }
// var number = +prompt("Enter a number to find its square")
// var result = square(number);
// console.log(result);

// Q no: 06
// function factorialIterative(number) {
//     var result = 1;
//     for (var i = 2; i <= number; i++) {
//         result *= i;
//     }
//     return result;
// }
// var number = +prompt("Enter any Number")
// var result = factorialIterative(number);
// console.log(result);

// Q no: 08
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;

//     return hypotenuseSquare;
// }

// var base = +prompt("Enter Base");
// var perpendicular = +prompt("Enter Perpendicular");
// var result = calculateHypotenuse(base, perpendicular);

// console.log("Hypotenuse Square:", result);

// Q no: 09

// function calculateRectangleAreaByValues(width, height) {
//     return width * height;
// }
// var area1 = calculateRectangleAreaByValues(5, 10);
// console.log("Area 1:", area1);

// function calculateRectangleAreaByVariables(width, height) {
//     return width * height;
// }
// var rectWidth = +prompt("Enter Rectangle Width");
// var rectHeight = +prompt("Enter Rectangle Height");
// var area2 = calculateRectangleAreaByVariables(rectWidth, rectHeight);
// console.log("Area 2:", area2);

// Q no: 11

// function capitalizeWords(str) {
//     return str.split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }
// var inputString = 'the quick brown fox';
// var capitalizedString = capitalizeWords(inputString);
// console.log(capitalizedString);

// Q no: 12
// function longWord(str){
//     var word = str.slice(4,14);
//     return word
// }
// var str = "Web Development Tutorial"
// var res = longWord(str);
// console.log(res);

// Q no: 13
// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
// console.log("Number of occurrences of '" + letterToCount + "': " + occurrences);
