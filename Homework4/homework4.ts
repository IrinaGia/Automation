// TASK 1
class Calculator {
    // Method 1: Adds two numbers
    sumNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Method 2: Checks if the first number is greater than the second
    isGreater(num1: number, num2: number): boolean {
        return num1 > num2;
    }
}

// Create an instance
const calc = new Calculator();

// Test the methods
console.log("TASK 1:");
console.log("Sum result:", calc.sumNumbers(5, 3));
console.log("Is first number greater?", calc.isGreater(10, 7));
console.log();


//TASK 2:
class Product {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    inStock(): boolean {
        return this.quantity > 0;

    }
}

const product1 = new Product("Book", 10, 2);
const product2 = new Product("Cream", 20, 0);

console.log("TASK 2:");
console.log(product1.name, "is in stock? ", product1.inStock());
console.log(product2.name, "is in stock? ", product2.inStock());
