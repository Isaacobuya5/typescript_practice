/**
 * INTERFACE
 * Provide us mechanism to to define properties and methods an object must implement. Therefore it is a way of defining customvtype.
 * Using this syntax, we can also strongly type a variable to be of an interface type.
 * Interface is a compile time language feature of typescript and the compiler does not generate any Javascript code from interfaces
 * that you include in your typescript projects. They are only used by the compiler for type checking  during the copilation step.
 */

interface IComplexType {
    id: number,
    name: string
}

let complexType: IComplexType = {
    id: 1,
    name: "Isaac Obuya"
}

console.log(complexType.name);

// interface with optional parameter
interface IMain {
    id: number,
    name?: string
}

let main: IMain = {
    id: 2
}

console.log(main.id);

// some properties may only be modifiable when the object is first created.
interface IExample {
    readonly id: number,
    name: string
}

let exampleReadOnly: IExample = {
    id: 3,
    name: "Isaac Obuya"
}

exampleReadOnly.name = "John";
console.log(exampleReadOnly.name);

// exampleReadOnly.id = 4;