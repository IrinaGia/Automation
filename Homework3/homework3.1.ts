// TASK 1
class Person {
    firstName: string | undefined;
    lastName: string | undefined;
}
const person1 = new Person();
person1.firstName = "Cara";
person1.lastName = "Mia";

console.log(person1);

// TASK 2
class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218);

console.log(book1);
