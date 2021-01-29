// Union types - allows us to express type as combination of 2 or more than one type.
let unionTypes: string | number;
unionTypes = 3;
unionTypes = "Hello";

// type guards
// suppose we have

function addWithUnion(arg1: string | number, arg2: string | number) {
    // using type guards
    if (typeof arg1 === "string") {
        return arg1 + arg2;
    }

    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}

console.log(addWithUnion(5, 3));
console.log(addWithUnion(5, "Three"));
console.log(addWithUnion("Fifty", " three"));

// type aliases - a special named type for a union type.

type stringOrNumber = string | number;
let example: stringOrNumber;
example = 20;
example = "a string";

// null and undefined
// a variable that has been defined but not assigned a value returns undefined.
let answer: number;
console.log(answer);

function printValue(num: null): number {
    return num;
}

console.log(printValue(null))

// typescript functions
function sayHello(name: string): void {
    console.log(`Hello ${name}`);
}

sayHello("Isaac Obuya");

// Anonymous functions - functions specified on the fly and don't have a function name
// contextual typing helps - we dont have to provide type for the variable name
let addStrings = function (a: string, b: string) {
    return a + b;
}

console.log(addStrings("John", "Doe"));

//Optional and Default parameters
let getUserDetails = function (name: string, age?: number) {
    return `${name} is ${age ? age : "10"} years old`;
}

console.log(getUserDetails("Quinter Achieng"));
console.log(getUserDetails("Isaac Obuya", 24));

// Default Parameters
function printEmployeeDetails(empID: number, name: string, dept: string = "ICT"): string {
    return `${name} - ${empID} works in ${dept} department`;
}

console.log(printEmployeeDetails(123212, "Isaac Juma"));
console.log(printEmployeeDetails(433423, "John Doe", "Finance"));

// Rest parameters
function buildPerson(firstName: string, ...remainingDetails: string[]): string {
    return `${firstName} is ${remainingDetails.join(' ')}`;
}

console.log(buildPerson("Isaac", "programmer", "Kenya"));