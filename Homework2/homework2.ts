// TASK 1
let recLength: number = 2;
let recWidth: number = 3;
let area: number;
area = recLength * recWidth;
console.log("The area is: ", area);

//TASK 2
let weight: number = 80;
let height: number = 160;
let bmi: number = weight/(height * height);
console.log("BMI is: ", bmi);

//TASK 3
let celsius: number = 20;
let fahrenheit: number = (9/5)*celsius+32;
console.log("Celsius is equal to " + fahrenheit + "F");

//TASK 4
let age: number = 20;
let isAdult: boolean = age >= 18;
console.log ("Is adult: " + isAdult);

//TASK 5
let name: string = "Cara";
let lastName: string = "Mia";
let fullName: string = name +" " + lastName;
console.log("Full name: ", fullName);

//TASK 6
let userAge: number = 15;
let requiredAge: number = 15;
let hasAccess: boolean = userAge == requiredAge;
console.log("Access: ", hasAccess);

//TASK 7
let userInput: number = 18;
let actualAge: number = 18;
let isEqualLoose: boolean = userInput == actualAge;
let isEqualStrict: boolean = userInput == actualAge;
console.log("Loose and Strict: " + isEqualLoose);

//TASK 8
let stringNumber: string = "456";
let convertNumber: number = Number(stringNumber);
console.log("String value: ", stringNumber);
console.log("Converted number: ", convertNumber);

//TASK 9
let myNumber: number = 10;
let convertToString: string = myNumber.toString();
console.log("Original number:", myNumber);
console.log("Converted to string:", convertToString);

//TASK 10
let rawText: string = "   Hello Playwright!   ";

// Remove spaces at the start and end
let trimmedText: string = rawText.trim();

// Display the first and last characters
let firstChar: string = trimmedText.charAt(0);
let lastChar: string = trimmedText.charAt(trimmedText.length - 1);

// Display results
console.log("Original text (with spaces): '" + rawText + "'");
console.log("Trimmed text: '" + trimmedText + "'");
console.log("First character:", firstChar);
console.log("Last character:", lastChar);
console.log("Lowercase:", trimmedText.toLowerCase());
console.log("Uppercase:", trimmedText.toUpperCase());
