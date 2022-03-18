


var num1 = +prompt("Enter First Digit")
var operator =prompt("Enter Operator")
var Num2 = +prompt("Enter Second Digit")

if(operator == "+"){
    var num = num1 + Num2;
    console.log("Your Addition is  = " + num)
    alert("Your Addition is " + num)
}
else if(operator=="-"){
    var num = num1 - Num2;
    console.log("Your Subtract is = " + num)
    alert("Your Subtract is " + num)
}
else if(operator=="*"){
    var num = num1 * Num2;
    console.log("Your Multiplication is = " + num)
    alert("Your Multiplication is " + num)
}
else if(operator=="/"){
    var num = num1 / Num2;
    console.log("Your Division is = " + num)
    alert("Your Division is " + num)
}
else{
    alert("Invalid Operator")
}