//TASK 1
function convToFahr(celsium: number)
{
    let result: number;
    result = (celsium * 9/5) + 32;
    return result;
}
console.log("1. Fahrenheit is: "+ convToFahr(7));

// TASK 2
function greetUser(firstName: string, lastName: string)
{
    let result: string;
    result = 'Hello, '+ firstName + " " + lastName+ '! ' + 'How do you do?'
    return result;
}
console.log("2. " + greetUser('Ira', 'Gia'));

// TASK 3
function calcRecArea(a: number, b: number)
{
    let result: number;
    result = a*b;
    return result;
}
console.log("3. Rectangle area is: " + calcRecArea(5,7));

// TASK 4
function Sum(a: number, b: number)
{
    let result: number;
    result = a+b;
    return result;
}
console.log("4. Sum is: " + Sum(5,7));
