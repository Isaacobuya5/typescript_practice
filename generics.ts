/**
 * Generics -> allow algorithms to be written in a way that allows types to be specified later.
 * This allows types to be processed identically without sacrificing type safety or requiring a separate
 * instance of the algorithm to handle each type.
 * It is possible to create - generic functions, generic interfaces and generic classes.
 * Generics provides us with a way to capture the type arguments in such a way that we can also use it
 * to denote the returned values.
 * 
 */

function genericsExample<T>(arg: T): T {
    return arg;
}

// 2 WAYS TO USE IT
//a -> type infered
let genericString = genericsExample("Hello");
console.log(genericString);

let genericInt = genericsExample(5);
console.log(genericInt);

//b. ->
let genericBoolean = genericsExample<boolean>(true);
console.log(genericBoolean);

let genericArrayStrings = genericsExample<Array<String>>(["mangoes", "bananas", "oranges"]);
console.log(genericArrayStrings);