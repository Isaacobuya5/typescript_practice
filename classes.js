class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    // methods
    printDetails() {
        return `${this.name} is a ${this.gender} person`;
    }
}
let person1 = new Person("Isaac Obuya", "Male");
console.log(person1.printDetails());
class Novel {
    constructor(name, pages) {
        this.name = name;
        this.pages = 350;
    }
    printBookDetails() {
        return `${this.name} is ${this.pages}`;
    }
}
let setBook1 = new Novel("Enemy of the People", 450);
console.log(setBook1.printBookDetails());
// inheritance
class Student extends Person {
    // shortcut for defining member variables with constructor
    constructor(name, gender, _student_id, _course) {
        super(name, gender);
        this._student_id = _student_id;
        this._course = _course;
    }
    printStudentDetails() {
        return `name: ${this.name}
                gender: ${this.gender}
                student id: ${this._student_id}
                course: ${this._course}`;
    }
}
let student1 = new Student("Isaac Obuya", "Male", "32735167", "ICT");
console.log(student1.printStudentDetails());
