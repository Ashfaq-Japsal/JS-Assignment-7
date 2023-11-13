var firstNum = +prompt ("Enter your 1st number", "5")
var secondNum = +prompt ("Enter your 2nd number", "5")
var operation = prompt ("Enter an operation sign (like +, -, *, /)")

if (operation === "+") {
    alert ("Addition of " + firstNum + " and " + secondNum + " is " + (firstNum+secondNum))
}
else if (operation === "-") {
        alert ("Subtraction of " + firstNum + " and " + secondNum + " is " + (firstNum-secondNum))
}
else if (operation === "*") {
        alert ("Multiplication of " + firstNum + " and " + secondNum + " is " + (firstNum*secondNum))
}
else if (operation === "/") {
        alert ("Division of " + firstNum + " and " + secondNum + " is " + (firstNum/secondNum))
}
else {
    alert ("Please enter a valid operation. Thanks!")
}