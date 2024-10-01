let number1 = prompt("Enter Your 1st Number");
let number2 = prompt("Enter Your 2nd Number");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let result;


//Addition area
result = number1 + number2;
document.write("Addition: " + number1 + " + " + number2 + " = " + result + '<br>');


//Subtraction area
result = number1 - number2;
document.write("Subtraction: " + number1 + " - " + number2 + " = " + result + '<br>');

//Multiplication area
result = number1 * number2;
document.write("Multiplication: " + number1 + " * " + number2 + " = " + result + '<br>');



//division area
result = number1 * number2;
document.write("division: " + number1 + " / " + number2 + " = " + result + '<br>');



var point = Math.random() * 10;

 point = Math.round(point);

document.write("This is " + point + " Random Number");
