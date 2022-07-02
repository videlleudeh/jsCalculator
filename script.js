alert("This is a basic arithmetic operation calculator. Enjoy!")


let x = parseFloat(prompt("Enter a number: "));
let opr = prompt("Select '+', '-', '*' or '/': ");
let y = parseFloat(prompt("Enter another number: "));


if (isNaN(x)) 
    alert('Invalid input. Enter a valid number.');
else if (isNaN(y))
    alert('Invalid input. Enter a valid number.');
else {
    if (opr === '+')
        {result = x + y;}
    else if (opr === '-')
        {result = x - y;}
    else if (opr === '*')
        {result = x * y;}
    else if (opr === '/')
        {result = x / y;}
    else {
        alert("Invalid operator. Please refresh the page and try again!")
    } 
}



window.confirm("The answer is " + result + '.')