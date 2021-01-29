export function addNumbers(num1: number, num2: number) {
    return num1 + num2;
}

export class Trainee {

    id: number;
    full_names: string;
    course: string;

    constructor(id: number, full_names: string, course: string) {
        this.id = id;
        this.full_names = full_names;
        this.course = course;
    }

    printTraineeDetails = (): string => `id: ${this.id}, full_names: ${this.full_names}, course: ${this.course}`;
    
}