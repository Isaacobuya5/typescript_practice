// let number = 4;
// number = "Isaac";

let number: any = 4;
number = "Five";

let username: String = "Isaac Obuya";
let age: Number = 24;
let condition: Boolean = true;
let fruits: Array<String> = ["Mangoes", "Bananas", "Oranges"];
let student_details: Array<any> = ["Isaac Obuya", "ICT", "Software Developer", 24];

// using type any can be perfect if we want to store multiple values but with tuples we can only permit certain types.

// tuples typescript
// declaration
let employee: [number, String, boolean][];
// assignment
employee = [[1, "Isaac Obouya", true]];

// both declaration and assignment
let user: [number, string, string, boolean] = [1, "Isaac Juma", "Software Developer", false];
// accessing elements in tuple same as array e.g.
// console.log(user[0])
// adding to a tuple
user.push(2, "John Doe", false);
console.log(user);

// enums -> allows developer to define a set of named constants. Using enums can make it easier to document intent or create 
// a set of distinct cases.

// Numeric enums
// they have auto-incrementing behaviour
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function log(val: any) {
    console.log(val);
}

log(Direction[1]);

// String enums
// doesn't have auto incrementing behaviour
// string enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum members itself.
enum Steps {
    First = "FIRST",
    Second = "SECOND",
    Third = "THIRD",
    Fourth = "FOURTH"
}


function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(addNumbers(5, 4));