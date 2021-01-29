class Person {
    name: string;
    gender: string;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }

    // methods
    printDetails(): string {
        return `${this.name} is a ${this.gender} person`;
    }
}

let person1 = new Person("Isaac Obuya", "Male");
console.log(person1.printDetails());

interface Book {
    name: string;
    pages: number;
    printBookDetails(): string;
}

class Novel implements Book {
    name: string;
    pages: number;

    constructor(name: string, pages: number) {
        this.name = name;
        this.pages = 350;
    }

    printBookDetails(): string {
        return `${this.name} is ${this.pages}`;
    }
}

let setBook1 = new Novel("Enemy of the People", 450);
console.log(setBook1.printBookDetails());

// inheritance
class Student extends Person {

    _student_id: string;
    _course: string;

    // shortcut for defining member variables with constructor
    constructor(name: string, gender: string, _student_id: string, _course: string) {
        super(name, gender);
        this._student_id = _student_id;
        this._course = _course;
    }

    printStudentDetails(): string {
        return `name: ${this.name}
                gender: ${this.gender}
                student id: ${this._student_id}
                course: ${this._course}`;
    }
}

let student1 = new Student("Isaac Obuya", "Male", "32735167", "ICT");
console.log(student1.printStudentDetails());

