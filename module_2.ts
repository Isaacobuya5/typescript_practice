// import { addNumbers, Trainee as Student } from "./module_1";

// let sum = addNumbers(4, 5);
// console.log(sum);

// let student1 = new Student(12, "Isaac Obuya", "ICT");
// console.log(student1.printTraineeDetails());

import * as imports from "./module_1";

let sum = imports.addNumbers(6, 7);
console.log(sum);

let student2 = new imports.Trainee(4, "John Doe", "Software Engineering");
console.log(student2.printTraineeDetails());