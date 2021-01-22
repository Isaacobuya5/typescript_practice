// let number = 4;
// number = "Isaac";
let number = 4;
number = "Five";
let username = "Isaac Obuya";
let age = 24;
let condition = true;
let fruits = ["Mangoes", "Bananas", "Oranges"];
let student_details = ["Isaac Obuya", "ICT", "Software Developer", 24];
// using type any can be perfect if we want to store multiple values but with tuples we can only permit certain types.
// tuples typescript
// declaration
let employee;
// assignment
employee = [[1, "Isaac Obouya", true]];
// both declaration and assignment
let user = [1, "Isaac Juma", "Software Developer", false];
// accessing elements in tuple same as array e.g.
// console.log(user[0])
// adding to a tuple
user.push(2, "John Doe", false);
console.log(user);
// enums -> allows developer to define a set of named constants. Using enums can make it easier to document intent or create 
// a set of distinct cases.
// Numeric enums
// they have auto-incrementing behaviour
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function log(val) {
    console.log(val);
}
log(Direction[1]);
// String enums
// doesn't have auto incrementing behaviour
// string enums allow you to give a meaningful and readable value when your code runs, independent of the name of the enum members itself.
var Steps;
(function (Steps) {
    Steps["First"] = "FIRST";
    Steps["Second"] = "SECOND";
    Steps["Third"] = "THIRD";
    Steps["Fourth"] = "FOURTH";
})(Steps || (Steps = {}));
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 4));
